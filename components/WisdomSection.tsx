
import React, { useState } from 'react';
import { generatePeaceWisdom } from '../services/geminiService';

const WisdomSection: React.FC = () => {
  const [wisdom, setWisdom] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('');

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generatePeaceWisdom(topic);
      setWisdom(result || '');
    } catch (error) {
      console.error(error);
      setWisdom('عذراً، حدث خطأ أثناء استحضار الحكمة. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="wisdom" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">منارة الفكر</span>
          <h2 className="text-4xl font-bold mt-2 font-serif-ar">حكم السلام الملهمة</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-8">
            <label className="block text-slate-700 mb-2 font-medium">عن ماذا تريد أن تستلهم؟ (اختياري)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="مثلاً: التسامح، الحوار، الأجيال القادمة..."
                className="flex-1 px-6 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all"
              >
                {loading ? 'جاري الاستحضار...' : 'توليد حكمة'}
              </button>
            </div>
          </div>

          {wisdom && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative p-8 bg-white rounded-2xl border-r-8 border-blue-500 shadow-sm italic">
                <svg className="absolute top-4 left-4 w-10 h-10 text-blue-100 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H16.0171C14.9125 8 14.017 7.10457 14.017 6V3C14.017 2.44772 14.4647 2 15.017 2H21.017C21.5693 2 22.017 2.44772 22.017 3V15C22.017 18.3137 19.3307 21 16.0171 21H14.017ZM3.01709 21H5.01709C8.3308 21 11.0171 18.3137 11.0171 15V3C11.0171 2.44772 10.5694 2 10.0171 2H4.01709C3.4648 2 3.01709 2.44772 3.01709 3V6C3.01709 7.10457 3.91252 8 5.01709 8H8.01709C8.56937 8 9.01709 8.44772 9.01709 9V15C9.01709 15.5523 8.56937 16 8.01709 16H5.01709C3.91252 16 3.01709 16.8954 3.01709 18V21Z" />
                </svg>
                <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-serif-ar pr-4">
                  {wisdom}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => navigator.clipboard.writeText(wisdom)}
                  className="text-slate-400 hover:text-blue-600 flex items-center gap-1 text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  نسخ الحكمة
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;
