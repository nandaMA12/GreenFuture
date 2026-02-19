
import React, { useState, useEffect } from 'react';
import { COURSES } from './constants';
import { Course, User, ViewState } from './types';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('gfc_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setView('dashboard');
    }
  }, []);

  const handleLogin = (name: string, email: string) => {
    const newUser = { name, email, isLoggedIn: true };
    setUser(newUser);
    localStorage.setItem('gfc_user', JSON.stringify(newUser));
    setAuthModal(null);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('gfc_user');
    setView('landing');
    setSelectedCourse(null);
  };

  const openCourse = (course: Course) => {
    if (!user) {
      setAuthModal('login');
      return;
    }
    setSelectedCourse(course);
    setView('lesson');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        user={user} 
        onNavigate={(v) => {
          if (v === 'dashboard' && !user) {
            setAuthModal('login');
          } else {
            setView(v);
          }
        }} 
        onLogout={handleLogout}
        onOpenAuth={(type) => setAuthModal(type)}
      />

      <main className="flex-grow pt-20">
        {view === 'landing' && (
          <LandingPage 
            onStart={() => setAuthModal('register')} 
            onExplore={() => setView('dashboard')}
            onPreviewCourse={(c) => openCourse(c)}
          />
        )}
        
        {view === 'dashboard' && user && (
          <Dashboard 
            user={user} 
            courses={COURSES} 
            onOpenCourse={openCourse} 
          />
        )}

        {view === 'lesson' && selectedCourse && (
          <LessonView 
            course={selectedCourse} 
            onBack={() => setView('dashboard')} 
          />
        )}
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <p className="font-poppins font-bold text-emerald-500 mb-2">GreenFutureClass</p>
          <p className="text-sm">&copy; 2024 GreenFutureClass. Smart Systems Sustainable Income.</p>
          <div className="mt-4 flex justify-center gap-6 text-xl">
            <a href="#" className="hover:text-emerald-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-emerald-500"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="hover:text-emerald-500"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>

      {authModal && (
        <AuthModal 
          type={authModal} 
          onClose={() => setAuthModal(null)} 
          onSuccess={handleLogin}
          onSwitch={(t) => setAuthModal(t)}
        />
      )}
    </div>
  );
};

export default App;
