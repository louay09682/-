
import React, { useState } from 'react';
import { generatePeaceWisdom } from '../services/geminiService.ts';

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
              <div className="relative p-8 bg-white rounded-2xl border-r-8 border-blue-500 shadow-sm italic text-right">
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-serif-ar pr-4">
                  {wisdom}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;
