
import React from 'react';
import DoveIcon from './DoveIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6">
      <div className="absolute top-20 right-10 opacity-20 hidden md:block">
        <DoveIcon className="w-64 h-64" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 hidden md:block scale-x-[-1]">
        <DoveIcon className="w-48 h-48" />
      </div>
      
      <div className="z-10 text-center max-w-4xl">
        <div className="mb-8 inline-block">
          <DoveIcon className="w-32 h-32 md:w-48 md:h-48" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 font-serif-ar leading-tight">
          جسر السلام العالمي
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
          نحن نؤمن أن السلام يبدأ بكلمة، وينمو بالتفاهم، ويزدهر بالعدالة. 
          اكتشف حكمة السلام، واصنع فرقاً في محيطك.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#wisdom" 
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            استلهم حكمة
          </a>
          <a 
            href="#mediator" 
            className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
          >
            طلب وساطة ذكية
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
