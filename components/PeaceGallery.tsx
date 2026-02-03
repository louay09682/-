
import React, { useState } from 'react';
import { generatePeaceArt } from '../services/geminiService';
import DoveIcon from './DoveIcon';

const PeaceGallery: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [style, setStyle] = useState<string>('رسم زيتي هادئ');

  const styles = [
    { label: 'رسم زيتي', value: 'tranquil oil painting' },
    { label: 'فن رقمي حديث', value: 'modern digital art' },
    { label: 'ألوان مائية', value: 'ethereal watercolor' },
    { label: 'سريالي حالم', value: 'dreamy surrealism' },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const selectedStyle = styles.find(s => s.label === style)?.value || 'artistic';
      const imgData = await generatePeaceArt(selectedStyle);
      setImage(imgData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">أروقة الجمال</span>
          <h2 className="text-4xl font-bold mt-2 font-serif-ar">معرض فنون السلام</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            استخدم الذكاء الاصطناعي لتخيل رموز السلام في قوالب فنية مختلفة. الحمامة البيضاء ترسم عالماً أفضل.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">اختر أسلوبك الفني</h3>
            <div className="grid grid-cols-2 gap-3">
              {styles.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setStyle(s.label)}
                  className={`p-4 rounded-2xl border-2 transition-all text-right font-medium ${
                    style === s.label 
                    ? 'border-blue-600 bg-blue-50 text-blue-700' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex justify-center items-center gap-3 disabled:opacity-50"
            >
              {loading ? 'جاري رسم لوحتك...' : 'توليد لوحة السلام'}
              {!loading && <DoveIcon className="w-6 h-6" />}
            </button>
          </div>

          <div className="relative aspect-square bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex items-center justify-center p-4">
            {loading ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-400 font-medium animate-pulse">الحمامة ترسم الآن...</p>
              </div>
            ) : image ? (
              <img src={image} alt="Peace Art" className="w-full h-full object-cover rounded-2xl animate-in fade-in duration-1000" />
            ) : (
              <div className="text-center opacity-20 group">
                <DoveIcon className="w-32 h-32 mx-auto grayscale group-hover:grayscale-0 transition-all" />
                <p className="mt-4 font-medium">اختر أسلوباً لتبدأ المعرض</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceGallery;
