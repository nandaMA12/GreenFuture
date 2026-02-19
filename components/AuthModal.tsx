
import React, { useState } from 'react';

interface AuthModalProps {
  type: 'login' | 'register';
  onClose: () => void;
  onSuccess: (name: string, email: string) => void;
  onSwitch: (type: 'login' | 'register') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ type, onClose, onSuccess, onSwitch }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSuccess(formData.name || 'User', formData.email);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-white/5 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className={`fas ${type === 'login' ? 'fa-fingerprint' : 'fa-user-plus'} text-3xl text-emerald-500`}></i>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              {type === 'login' ? 'Selamat Datang' : 'Mulai Belajar'}
            </h2>
            <p className="text-slate-400 text-sm">
              {type === 'login' 
                ? 'Masuk untuk akses materi lengkap kamu' 
                : 'Buat akun gratis untuk mulai akses materi premium'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {type === 'register' && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white outline-none focus:border-emerald-500 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Alamat Email</label>
              <input 
                type="email" 
                required
                placeholder="name@email.com"
                className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white outline-none focus:border-emerald-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Kata Sandi</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white outline-none focus:border-emerald-500 transition-colors"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-xl font-bold text-white shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                type === 'login' ? 'Masuk Sekarang' : 'Buat Akun Gratis'
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-slate-500">
              {type === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?'}
              <button 
                onClick={() => onSwitch(type === 'login' ? 'register' : 'login')}
                className="ml-2 text-emerald-500 font-bold hover:underline"
              >
                {type === 'login' ? 'Daftar Sekarang' : 'Masuk di sini'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
