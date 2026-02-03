
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.tsx';
import WisdomSection from './components/WisdomSection.tsx';
import MediatorSection from './components/MediatorSection.tsx';
import PeaceWall from './components/PeaceWall.tsx';
import IslamicPeaceSection from './components/IslamicPeaceSection.tsx';
import PeaceGallery from './components/PeaceGallery.tsx';
import PeaceRadar from './components/PeaceRadar.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [wallCount, setWallCount] = useState(128452);
  const [activeUsers, setActiveUsers] = useState(42);
  const [latestActivity, setLatestActivity] = useState("جسر السلام يرحب بك...");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // محاكاة تأخير بسيط للتحميل لضمان سلاسة الواجهة
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
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

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleMessageAdded = () => {
    setWallCount(prev => prev + 1);
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-slate-50 transition-opacity duration-1000 animate-in fade-in">
      {/* Activity Bar - Top */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-blue-600 text-white py-1 px-4 text-[10px] md:text-sm overflow-hidden whitespace-nowrap shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="font-medium">تحديث مباشر: {latestActivity}</span>
          </div>
          <div className="hidden md:block opacity-80">
            الحكماء المتواجدون: {activeUsers}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4 mx-4 md:mx-auto max-w-7xl rounded-3xl shadow-xl shadow-slate-200/50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">🕊️</div>
            <span className="text-2xl font-black tracking-tight text-slate-800 hidden sm:block font-serif-ar">جسر السلام</span>
          </div>
          <div className="flex gap-3 md:gap-8 font-bold text-slate-600 text-[10px] md:text-base">
            <a href="#" className="hover:text-blue-600 transition-colors">الرئيسية</a>
            <a href="#spiritual" className="hover:text-emerald-600 transition-colors">نور</a>
            <a href="#radar" className="hover:text-emerald-500 transition-colors">الرادار</a>
            <a href="#wisdom" className="hover:text-blue-600 transition-colors">حكم</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">معرض</a>
            <a href="#wall" className="hover:text-blue-600 transition-colors">الجدار</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 overflow-x-hidden">
        <Hero />
        
        {/* Real-time Interactive Impact Hub */}
        <section className="bg-white py-20 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Counter Card */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/50 group hover:bg-blue-600 transition-all duration-500 cursor-default">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-2xl text-blue-600 group-hover:bg-white/20 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl font-black text-slate-800 mb-2 font-mono group-hover:text-white">
                  {wallCount.toLocaleString()}
                </div>
                <div className="text-slate-600 font-bold mb-4 group-hover:text-blue-100 uppercase text-xs tracking-widest">رسالة سلام نُشرت عالمياً</div>
                <a href="#wall" className="text-blue-600 group-hover:text-white text-sm font-black flex items-center gap-2">
                  اترك أثرك الآن <span>←</span>
                </a>
              </div>

              {/* AI Support Card */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/50 group hover:bg-emerald-600 transition-all duration-500 cursor-default">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600 group-hover:bg-white/20 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-800 mb-2 font-serif-ar group-hover:text-white">ذكاء السكينة</div>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed group-hover:text-emerald-100">نظامنا يبحث لك عن الهدوء ويفض النزاعات بحكمة متناهية.</p>
                <a href="#radar" className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black group-hover:bg-white group-hover:text-emerald-700">
                  استكشف الرادار
                </a>
              </div>

              {/* Safety Card */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/50 group hover:bg-amber-600 transition-all duration-500 cursor-default">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-amber-100 rounded-2xl text-amber-600 group-hover:bg-white/20 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04C3.063 6.267 3 6.783 3 7.32c0 7.07 4.546 13.095 10.915 15.38a11.572 11.572 0 002.17 0C22.454 20.415 27 14.39 27 7.32c0-.537-.063-1.053-.182-1.592z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-800 mb-2 font-serif-ar group-hover:text-white">بيئة آمنة</div>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-amber-100">فلترة ذكية لضمان حوار راقٍ ونبذ أي خطاب كراهية.</p>
                <div className="mt-4 flex gap-1 group-hover:text-white">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 group-hover:text-white text-xs">★</span>)}
                </div>
              </div>

            </div>
          </div>
        </section>

        <IslamicPeaceSection />
        <PeaceRadar />
        <WisdomSection />
        
        {/* Quote Break */}
        <div className="py-64 bg-fixed bg-cover bg-center text-white relative flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px] z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=1920" 
            className="absolute inset-0 w-full h-full object-cover -z-10"
            alt="Peace background"
          />
          <div className="relative z-10 text-center max-w-4xl px-4">
            <div className="mb-12 text-6xl opacity-40 animate-bounce">🕊️</div>
            <h2 className="text-3xl md:text-6xl font-serif-ar italic mb-10 leading-[1.4] md:leading-[1.6]">"السلام لا يولد في المعاهدات، بل في قلوب البشر وعقولهم."</h2>
            <div className="h-1 w-24 bg-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl font-light tracking-[0.2em] opacity-80 uppercase">— رسالة الجسر</p>
          </div>
        </div>

        <PeaceGallery />
        <MediatorSection />
        <PeaceWall onMessageAdded={handleMessageAdded} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
