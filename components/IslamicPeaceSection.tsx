
import React from 'react';

interface SacredText {
  text: string;
  source: string;
  type: 'quran' | 'hadith';
}

const IslamicPeaceSection: React.FC = () => {
  const sacredTexts: SacredText[] = [
    {
      type: 'quran',
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ",
      source: "سورة البقرة - الآية 208"
    },
    {
      type: 'hadith',
      text: "لا تَدْخُلُونَ الجَنَّةَ حتَّى تُؤْمِنُوا، ولا تُؤْمِنُوا حتَّى تَحابُّوا، أوَلا أدُلُّكُمْ علَى شيءٍ إذا فَعَلْتُمُوهُ تَحابَبْتُمْ؟ أفْشُوا السَّلامَ بيْنَكُمْ.",
      source: "صحيح مسلم"
    },
    {
      type: 'quran',
      text: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ",
      source: "سورة الأنفال - الآية 61"
    },
    {
      type: 'hadith',
      text: "المسلمُ من سَلِمَ المسلمون من لسانِه ويدِه.",
      source: "متفق عليه"
    },
    {
      type: 'quran',
      text: "وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا",
      source: "سورة الفرقان - الآية 63"
    }
  ];

  return (
    <section id="spiritual" className="py-24 bg-[#fcfaf2] relative overflow-hidden px-6">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm block mb-2">السكينة والوقار</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif-ar text-slate-800">السلام في الميزان الرباني</h2>
          <div className="h-1 w-32 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            الرسالة الإسلامية هي دعوة دائمة للسلام والوئام، نستعرض هنا قبساً من النور القرآني والنهج النبوي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredTexts.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-[2rem] shadow-sm border border-emerald-100 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1 ${
                item.type === 'quran' ? 'bg-white' : 'bg-emerald-50/30'
              }`}
            >
              <div className="mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                  item.type === 'quran' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {item.type === 'quran' ? '📖' : '📜'}
                </div>
                <p className="text-xl md:text-2xl font-serif-ar text-slate-800 leading-relaxed text-center">
                  "{item.text}"
                </p>
              </div>
              <div className="text-left border-t border-slate-100 pt-4">
                <span className="text-sm font-bold text-emerald-600">{item.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Reflection */}
        <div className="mt-20 text-center bg-white p-10 rounded-[3rem] shadow-xl border border-emerald-50 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="text-5xl">🕊️</span>
          </div>
          <h3 className="text-2xl font-bold font-serif-ar mb-4 text-slate-800">تحية الإسلام هي السلام</h3>
          <p className="text-slate-600 leading-loose">
            جعل الإسلام السلام تحية المؤمنين، واسماً من أسماء الله الحسنى، وغاية يسعى إليها كل من أراد صلاح الدنيا والآخرة. 
            فلنكن دعاة سلام في أقوالنا وأفعالنا.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IslamicPeaceSection;
