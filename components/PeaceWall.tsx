
import React, { useState } from 'react';

interface WallMessage {
  id: number;
  text: string;
  author: string;
  color: string;
}

interface PeaceWallProps {
  onMessageAdded?: () => void;
}

const PeaceWall: React.FC<PeaceWallProps> = ({ onMessageAdded }) => {
  const [messages, setMessages] = useState<WallMessage[]>([
    { id: 1, text: "السلام هو اللغة التي تفهمها كل القلوب.", author: "أحمد", color: "bg-blue-50" },
    { id: 2, text: "فلنزرع الحب لنحصد الوئام.", author: "سارة", color: "bg-emerald-50" },
    { id: 3, text: "لا يوجد طريق للسلام، السلام هو الطريق.", author: "غاندي", color: "bg-amber-50" },
  ]);
  const [input, setInput] = useState('');
  const [author, setAuthor] = useState('');

  const colors = ["bg-blue-50", "bg-emerald-50", "bg-purple-50", "bg-amber-50", "bg-rose-50"];

  const postMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage: WallMessage = {
      id: Date.now(),
      text: input,
      author: author || 'فاعل خير',
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setMessages([newMessage, ...messages]);
    setInput('');
    setAuthor('');
    if (onMessageAdded) onMessageAdded();
  };

  return (
    <section id="wall" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">جدارية الأمل</span>
          <h2 className="text-4xl font-bold mt-2 font-serif-ar">جدار السلام الرقمي</h2>
          <p className="text-slate-600 mt-4">اترك بصمتك، اكتب رسالة سلام للعالم.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <form onSubmit={postMessage} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 sticky top-32">
              <h3 className="font-bold mb-4 text-lg">أضف رسالتك</h3>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب شيئاً ملهماً..."
                className="w-full p-4 rounded-xl border border-slate-200 mb-4 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                rows={3}
              />
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="اسمك (اختياري)"
                className="w-full p-4 rounded-xl border border-slate-200 mb-4 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-amber-100">
                انشر السلام 🕊️
              </button>
            </form>
          </div>

          {/* Wall Display */}
          <div className="lg:col-span-3">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`${msg.color} p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid hover:scale-[1.02] transition-transform animate-in fade-in slide-in-from-top-4`}
                >
                  <p className="text-lg text-slate-800 mb-4 leading-relaxed font-serif-ar">"{msg.text}"</p>
                  <div className="flex items-center justify-between border-t border-black/5 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px]">🕊️</div>
                      <span className="text-sm font-bold text-slate-500">{msg.author}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">منذ قليل</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceWall;
