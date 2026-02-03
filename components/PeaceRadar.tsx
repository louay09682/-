
import React, { useState } from 'react';
import { findPeacefulPlaces } from '../services/geminiService';

const PeaceRadar: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ text: string; links: any[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    setLoading(true);
    setError(null);
    
    if (!navigator.geolocation) {
      setError("متصفحك لا يدعم تحديد الموقع.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const result = await findPeacefulPlaces(position.coords.latitude, position.coords.longitude);
          setData(result);
        } catch (err) {
          console.error(err);
          setError("فشل الاتصال بالذكاء الاصطناعي. حاول مرة أخرى.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("يرجى السماح بالوصول إلى موقعك لتفعيل الرادار.");
        setLoading(false);
      }
    );
  };

  return (
    <section id="radar" className="py-24 bg-emerald-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-emerald-800 rounded-full text-xs font-bold mb-4 animate-pulse">ميزة حصرية</span>
          <h2 className="text-4xl font-bold font-serif-ar mb-4">رادار السكينة</h2>
          <p className="text-emerald-200 text-lg">استخدم قوة الذكاء الاصطناعي للعثور على واحات الهدوء والسلام القريبة منك في عالمنا المزدحم.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Radar Animation Effect */}
          {!data && !loading && (
            <div className="flex flex-col items-center py-12">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-4xl">📍</div>
              </div>
              <button 
                onClick={handleSearch}
                className="px-12 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-xl transition-all shadow-xl shadow-emerald-900/40"
              >
                تفعيل الرادار الآن
              </button>
              {error && <p className="mt-4 text-red-300 font-medium">{error}</p>}
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center py-20">
              <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin mb-6"></div>
              <p className="text-xl font-medium animate-pulse">جاري مسح المحيط بحثاً عن الهدوء...</p>
            </div>
          )}

          {data && (
            <div className="animate-in fade-in duration-700">
              <div className="prose prose-invert max-w-none mb-8 leading-loose text-emerald-50 text-lg">
                {data.text}
              </div>
              
              {data.links.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {data.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center gap-4 transition-all group border border-white/5"
                    >
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🗺️</div>
                      <div>
                        <h4 className="font-bold text-white">{link.title || "موقع هادئ"}</h4>
                        <span className="text-xs text-emerald-300">افتح في خرائط جوجل ←</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
              
              <button 
                onClick={() => setData(null)}
                className="mt-12 text-emerald-400 hover:text-emerald-300 text-sm font-bold block mx-auto underline decoration-dotted"
              >
                بحث جديد
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PeaceRadar;
