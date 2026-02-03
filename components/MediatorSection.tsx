
import React, { useState } from 'react';
import { mediateConflict } from '../services/geminiService.ts';

const MediatorSection: React.FC = () => {
  const [conflict, setConflict] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleMediate = async () => {
    if (!conflict.trim()) return;
    setLoading(true);
    try {
      const result = await mediateConflict(conflict);
      setAdvice(result || '');
    } catch (error) {
      console.error(error);
      setAdvice('نعتذر، يبدو أن هناك مشكلة في التواصل مع خبير السلام حالياً.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="mediator" className="py-24 bg-blue-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-right">
        <div className="text-center mb-16">
          <span className="text-blue-300 font-bold tracking-widest uppercase text-sm">مختبر الوئام</span>
          <h2 className="text-4xl font-bold mt-2 font-serif-ar text-white">الوساطة الذكية</h2>
          <p className="text-blue-200 mt-4 text-lg">اطرح أي نزاع فكري أو اجتماعي، ودع ذكاء السلام يقدم لك مخرجاً حكيماً.</p>
        </div>

        <div className="bg-blue-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-700/50 shadow-2xl">
          <div className="mb-6">
            <textarea 
              rows={4}
              value={conflict}
              onChange={(e) => setConflict(e.target.value)}
              placeholder="صف الموقف أو النزاع الذي تبحث له عن حل سلمي..."
              className="w-full bg-blue-900/50 border border-blue-600 rounded-2xl p-6 text-white placeholder-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none text-right"
            />
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleMediate}
              disabled={loading || !conflict.trim()}
              className="px-12 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg disabled:opacity-50 transition-all flex items-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  جاري التفكير في حل...
                </>
              ) : 'اطلب الحكمة السلمية'}
            </button>
          </div>

          {advice && (
            <div className="mt-12 bg-white/10 rounded-2xl p-8 border border-white/10 animate-in fade-in zoom-in duration-500">
              <div className="prose prose-invert max-w-none text-blue-50 leading-loose whitespace-pre-wrap text-right">
                {advice}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediatorSection;
