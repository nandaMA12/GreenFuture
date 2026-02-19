
import React, { useState } from 'react';
import { Course, User } from '../types';

interface DashboardProps {
  user: User;
  courses: Course[];
  onOpenCourse: (course: Course) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, courses, onOpenCourse }) => {
  const [filter, setFilter] = useState<'all' | 'learning' | 'completed'>('all');

  const filteredCourses = courses.filter(c => {
    if (filter === 'all') return true;
    if (filter === 'learning') return c.progress > 0 && c.progress < 100;
    if (filter === 'completed') return c.progress === 100;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Selamat Datang, <span className="text-emerald-500">{user.name}</span></h2>
          <p className="text-slate-400">Siap untuk melanjutkan perjalanan belajarmu hari ini?</p>
        </div>
        
        <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-white/5 overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'all' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
          >
            Semua Kelas
          </button>
          <button 
            onClick={() => setFilter('learning')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'learning' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
          >
            Diproses
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'completed' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
          >
            Selesai
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div 
            key={course.id}
            onClick={() => onOpenCourse(course)}
            className="group glass rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col cursor-pointer"
          >
            <div className="h-40 relative">
              <img src={course.imageUrl} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              {course.progress === 100 && (
                <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-lg">
                  COMPLETED
                </div>
              )}
              <div className="absolute bottom-3 left-3 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                {course.category}
              </div>
            </div>

            <div className="p-5 flex-grow">
              <h3 className="font-bold text-lg mb-2 leading-tight group-hover:text-emerald-500 transition-colors">{course.title}</h3>
              <p className="text-slate-400 text-xs line-clamp-2 mb-4">{course.desc}</p>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  <span>Progres Belajar</span>
                  <span className="text-emerald-500">{course.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-1000" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="px-5 py-4 border-t border-white/5 bg-slate-900/40 flex justify-between items-center">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <i className="fas fa-play-circle text-emerald-500"></i> {course.modules.length} Materi
              </span>
              <button className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                Lanjut <i className="fas fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600 text-3xl">
              <i className="fas fa-folder-open"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Belum ada kelas ditemukan</h3>
            <p className="text-slate-500">Ayo mulai cari kelas baru di Beranda!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
