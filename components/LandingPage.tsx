
import React from 'react';
import { COURSES } from '../constants';
import { Course } from '../types';

interface LandingPageProps {
  onStart: () => void;
  onExplore: () => void;
  onPreviewCourse: (course: Course) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, onExplore, onPreviewCourse }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent leading-[1.1]">
            Kembangkan Skill Digitalmu<br />Tanpa Biaya
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Temukan ratusan kursus, template, dan ebook berkualitas tinggi yang siap kamu akses langsung tanpa perlu registrasi rumit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
            >
              <i className="fas fa-rocket"></i> Mulai Belajar Gratis
            </button>
            <button 
              onClick={onExplore}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold border border-white/5 flex items-center justify-center gap-2 transition-all"
            >
              Eksplorasi Kelas <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto pt-12 border-t border-white/5">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Materi Video</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10rb+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Murid Aktif</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Mentor Ahli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-900/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-slate-400">Sistem pembelajaran pintar untuk masa depan yang berkelanjutan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-infinity', title: 'Akses Tak Terbatas', desc: 'Tidak ada batasan waktu atau akses materi. Belajar kapan saja dan dimana saja sepuasnya.' },
              { icon: 'fa-certificate', title: 'Sertifikat Gratis', desc: 'Dapatkan sertifikat profesional setelah menyelesaikan setiap kurikulum yang tersedia.' },
              { icon: 'fa-users', title: 'Komunitas Global', desc: 'Gabung dengan komunitas pelajar lainnya untuk sharing dan membangun jaringan karir.' },
            ].map((f, i) => (
              <div key={i} className="glass p-8 rounded-3xl group hover:border-emerald-500/50 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  <i className={`fas ${f.icon} text-2xl text-emerald-500 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Materials Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Materi Populer</h2>
              <p className="text-slate-400">Beberapa materi yang paling banyak diakses minggu ini</p>
            </div>
            <button onClick={onExplore} className="text-emerald-500 font-bold hover:underline flex items-center gap-2">
              Lihat Semua Kelas <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <div 
                key={course.id} 
                onClick={() => onPreviewCourse(course)}
                className="group cursor-pointer glass rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-500 transition-colors">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">{course.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <i className="fas fa-play-circle text-emerald-500"></i> {course.modules.length} Materi
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <i className="fas fa-chevron-right text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
