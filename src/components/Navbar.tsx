import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const willBeDark = !isDark;
    setIsDark(willBeDark);
    if (willBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="bg-primary px-6 py-3 flex items-center justify-between shadow-lg relative z-10 border-b border-white/10">
      <div className="flex items-center space-x-6 space-x-reverse">
        <Link to="/" className="text-white text-3xl font-black italic tracking-tighter flex items-center cursor-pointer">
          <span className="bg-white text-primary px-2 rounded-lg ml-1">CODE</span>FLOW
        </Link>
        <div className="hidden md:flex space-x-4 space-x-reverse">
          <Link to="/editor" className={`nav-link font-semibold px-3 py-1 rounded-md transition-all ${path === '/editor' ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>יצירה</Link>
          <Link to="/explore" className={`nav-link font-semibold px-3 py-1 rounded-md transition-all ${path === '/explore' ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>סיור</Link>
          <Link to="/ideas" className={`nav-link font-semibold px-3 py-1 rounded-md transition-all ${path === '/ideas' ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>רעיונות</Link>
          <Link to="/about" className={`nav-link font-semibold px-3 py-1 rounded-md transition-all ${path === '/about' ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>אודות</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4 space-x-reverse">
        <div className="relative hidden sm:block">
          <input className="bg-white/20 text-white placeholder-white/70 rounded-md py-1 px-3 pr-8 focus:ring-2 focus:ring-white/50 border-0 w-48 lg:w-64 text-right" placeholder="חיפוש" type="text"/>
          <span className="material-symbols-outlined absolute right-2 top-1.5 text-white/70 text-sm">search</span>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <Link to="/auth?mode=signup" className="text-white font-bold hover:underline text-sm">הרשמה</Link>
          <Link to="/auth?mode=login" className="text-white font-bold hover:underline text-sm">התחברות</Link>
        </div>
        <button className="text-white/80 hover:text-white p-1 flex items-center" onClick={toggleDarkMode}>
          <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
        </button>
      </div>
    </nav>
  );
}
