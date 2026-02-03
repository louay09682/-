
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WisdomSection from './components/WisdomSection';
import MediatorSection from './components/MediatorSection';
import PeaceWall from './components/PeaceWall';
import IslamicPeaceSection from './components/IslamicPeaceSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [wallCount, setWallCount] = useState(128452); // رقم افتراضي يبدأ منه العداد
  const [activeUsers, setActiveUsers] = useState(42);
  const [latestActivity, setLatestActivity] = useState("شخص ما من القاهرة شارك حكمة جديدة...");

  // محاكاة لنشاط الموقع لجعل الموقع يبدو حياً
  useEffect(() => {
    const activities = [
      "زائر من مسقط نشر رسالة سلام على الجدار...",
      "تم توليد حكمة جديدة عن التسامح الآن...",
      "الوسيط الذكي ساعد في حل نزاع فكري منذ دقائق...",
      "شخص ما من الرباط استلهم آية قرآنية عن السلام...",
      "زائر جديد انضم إلى جسر السلام من دبي..."
    ];
    
    const interval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setLatestActivity(randomActivity);
      setActiveUsers(prev => Math.max(10, prev + Math.floor(Math.random() * 5) - 2));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleMessageAdded = () => {
    setWallCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen">
      {/* Activity Bar - Top */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-blue-600 text-white py-1 px-4 text-xs md:text-sm overflow-hidden whitespace-nowrap">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>نشاط حي: {latestActivity}</span>
          </div>
          <div className="hidden md:block">
            عدد المتواجدين الآن: {activeUsers} حكيماً
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">🕊️</div>
            <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block font-serif-ar">جسر السلام</span>
          </div>
          <div className="flex gap-4 md:gap-8 font-medium text-slate-600 text-sm md:text-base">
            <a href="#" className="hover:text-blue-600 transition-colors">الرئيسية</a>
            <a href="#spiritual" className="hover:text-emerald-600 transition-colors">نور السلام</a>
            <a href="#wisdom" className="hover:text-blue-600 transition-colors">حكم</a>
            <a href="#mediator" className="hover:text-blue-600 transition-colors">الوساطة</a>
            <a href="#wall" className="hover:text-blue-600 transition-colors">الجدار</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        <Hero />
        
        {/* Real-time Interactive Impact Hub */}
        <section className="bg-slate-50 py-20 px-6 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Counter Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase">مباشر</span>
                </div>
                <div className="text-4xl font-extrabold text-slate-800 mb-2 font-mono">
                  {wallCount.toLocaleString()}
                </div>
                <div className="text-slate-600 font-medium mb-4">رسالة سلام نُشرت عالمياً</div>
                <a href="#wall" className="text-blue-600 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  شارك رسالتك الآن <span>←</span>
                </a>
              </div>

              {/* AI Support Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17H4.663M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">ذكاء اصطناعي</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-2 font-serif-ar">وساطة ذكية فورية</div>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">نظامنا المدعوم بـ Gemini 3 جاهز دائماً لتقريب وجهات النظر وفض النزاعات بحكمة.</p>
                <a href="#mediator" className="inline-block px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  ابدأ حواراً سلمياً
                </a>
              </div>

              {/* Safety Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-amber-50 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04C3.063 6.267 3 6.783 3 7.32c0 7.07 4.546 13.095 10.915 15.38a11.572 11.572 0 002.17 0C22.454 20.415 27 14.39 27 7.32c0-.537-.063-1.053-.182-1.592z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-amber-400">آمن 100%</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-2 font-serif-ar">بيئة نقية من الكراهية</div>
                <p className="text-slate-500 text-sm leading-relaxed">نستخدم خوارزميات متقدمة لتنقية المحتوى من التنمر والعنف، لضمان جسر سلام حقيقي وآمن للجميع.</p>
                <div className="mt-4 flex gap-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-xs">★</span>)}
                </div>
              </div>

            </div>
          </div>
        </section>

        <IslamicPeaceSection />

        <WisdomSection />
        
        {/* Quote Break with Parallax-like effect */}
        <div className="py-56 bg-fixed bg-cover bg-center text-white relative flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/70 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1528605248644-14dd04322119?auto=format&fit=crop&q=80&w=1920" 
            className="absolute inset-0 w-full h-full object-cover -z-10"
            alt="Peace background"
          />
          <div className="relative z-10 text-center max-w-4xl">
            <div className="mb-8 opacity-50">🕊️</div>
            <h2 className="text-4xl md:text-6xl font-serif-ar italic mb-8 leading-tight">"السلام لا يمكن الحفاظ عليه بالقوة؛ لا يمكن تحقيقه إلا بالتفاهم."</h2>
            <div className="h-0.5 w-20 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-2xl font-light tracking-widest">— ألبرت أينشتاين</p>
          </div>
        </div>

        <MediatorSection />

        <PeaceWall onMessageAdded={handleMessageAdded} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
