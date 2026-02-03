
import React from 'react';
import DoveIcon from './DoveIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <DoveIcon className="w-12 h-12" />
          <div>
            <h3 className="text-xl font-bold text-slate-800 font-serif-ar">جسر السلام</h3>
            <p className="text-sm text-slate-500">منصة عالمية لنشر قيم الوئام والحوار.</p>
          </div>
        </div>
        
        <div className="flex gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">عن المنصة</a>
          <a href="#" className="hover:text-blue-600 transition-colors">اتصل بنا</a>
          <a href="#" className="hover:text-blue-600 transition-colors">سياسة الخصوصية</a>
        </div>
        
        <div className="text-slate-400 text-sm">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - صنع بكل حب لنشر السلام.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
