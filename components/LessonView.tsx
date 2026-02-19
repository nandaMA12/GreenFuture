
import React, { useState } from 'react';
import { Course } from '../types';
import AIAssistant from './AIAssistant';

interface LessonViewProps {
  course: Course;
  onBack: () => void;
}

const LessonView: React.FC<LessonViewProps> = ({ course, onBack }) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in slide-in-from-left-4 duration-500">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors font-semibold"
      >
        <i className="fas fa-arrow-left text-sm"></i> Kembali ke Dashboard
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden relative shadow-2xl group">
            <img 
              src={course.imageUrl} 
              className="w-full h-full object-cover opacity-40 blur-sm" 
              alt="" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <button className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 hover:bg-emerald-500 transition-all mb-4">
                <i className="fas fa-play translate-x-1"></i>
              </button>
              <h4 className="text-lg font-bold">Memutar: {course.modules[activeModuleIndex].title}</h4>
              <p className="text-slate-400 text-sm mt-1">Durasi: {course.modules[activeModuleIndex].duration}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
               <div className="flex items-center gap-4 text-white text-sm">
                  <i className="fas fa-expand cursor-pointer hover:text-emerald-500"></i>
                  <i className="fas fa-volume-up cursor-pointer hover:text-emerald-500"></i>
               </div>
               <div className="text-xs text-white/50 font-mono">03:45 / {course.modules[activeModuleIndex].duration}</div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {course.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-slate-400 leading-relaxed mb-8">
              {course.desc} Pelajari langkah demi langkah bagaimana menguasai teknik profesional dalam modul ini. Materi ini dirancang khusus agar mudah dipahami bagi pemula namun tetap berbobot untuk tingkat lanjut.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/5">
              <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-emerald-500/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div>
                  <p className="font-bold text-sm">Panduan PDF</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Download E-Book</p>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-emerald-500/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className="fas fa-download"></i>
                </div>
                <div>
                  <p className="font-bold text-sm">Asset Materi</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Download Source File</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Playlist */}
        <div className="lg:col-span-1">
          <div className="glass rounded-3xl p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-list-ul text-emerald-500"></i> Daftar Materi
            </h3>
            <div className="space-y-3">
              {course.modules.map((mod, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${
                    activeModuleIndex === idx 
                      ? 'bg-emerald-600 border-emerald-500 shadow-lg shadow-emerald-500/20' 
                      : 'bg-slate-900/50 border-white/5 hover:border-emerald-500/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeModuleIndex === idx ? 'bg-white text-emerald-600' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${activeModuleIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                      {mod.title}
                    </p>
                    <p className={`text-[10px] ${activeModuleIndex === idx ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {mod.duration}
                    </p>
                  </div>
                  {activeModuleIndex === idx && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-2">Pencapaian Kamu</p>
              <h4 className="font-bold text-sm mb-4">Dapatkan Sertifikat</h4>
              <p className="text-xs text-slate-400 mb-4">Selesaikan semua modul untuk membuka akses sertifikat kelulusan premium.</p>
              <button disabled className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-500 text-xs font-bold cursor-not-allowed">
                Ambil Sertifikat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gemini AI Assistant integrated into Lesson View */}
      <AIAssistant courseTitle={course.title} />
    </div>
  );
};

export default LessonView;
