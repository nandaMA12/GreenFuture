
import React from 'react';
import { User, ViewState } from '../types';

interface NavbarProps {
  user: User | null;
  onNavigate: (view: ViewState) => void;
  onLogout: () => void;
  onOpenAuth: (type: 'login' | 'register') => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onNavigate, onLogout, onOpenAuth }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate('landing')}
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <i className="fas fa-leaf text-white text-xl"></i>
          </div>
          <span className="font-poppins font-bold text-xl tracking-tight">
            GreenFuture<span className="text-emerald-500">Class</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('landing')} className="text-slate-400 hover:text-white font-medium transition-colors">Beranda</button>
          <button onClick={() => onNavigate('dashboard')} className="text-slate-400 hover:text-white font-medium transition-colors">Kelas</button>
          <button className="text-slate-400 hover:text-white font-medium transition-colors">Tentang</button>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-semibold">{user.name}</span>
                <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">Premium Student</span>
              </div>
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <button 
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                title="Logout"
              >
                <i className="fas fa-sign-out-alt text-xl"></i>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2 text-sm font-semibold hover:text-emerald-500 transition-colors"
              >
                Masuk
              </button>
              <button 
                onClick={() => onOpenAuth('register')}
                className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all"
              >
                Daftar
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
