import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-16 px-6 lg:px-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="text-primary text-2xl font-black italic tracking-tighter mb-6">
            <span className="bg-primary text-white px-2 rounded-lg ml-1">CODE</span>FLOW
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            קהילה גלובלית של יוצרים צעירים הבונים את העתיד דרך קוד.
          </p>
          <div className="flex space-x-3 space-x-reverse">
            <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined text-lg">social_leaderboard</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined text-lg">smart_display</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-slate-800 dark:text-white mb-6">אודות</h5>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/about" className="hover:text-primary transition-colors">אודות CodeFlow</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">למחנכים</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">תומכים</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">קריירה</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">חדשות</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-800 dark:text-white mb-6">קהילה</h5>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary transition-colors">כללי הקהילה</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">פורומים</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">ויקי</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">סטטיסטיקה</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-800 dark:text-white mb-6">משאבים</h5>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary transition-colors">פרויקטים למתחילים</a></li>
            <li><Link to="/ideas" className="hover:text-primary transition-colors">רעיונות</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">הורדות</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">מרכז עזרה</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative inline-block w-48">
          <select className="block appearance-none w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-2 px-4 pl-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>עברית</option>
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-slate-400">
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>
        <p className="text-xs text-slate-400">© 2024 עמותת CodeFlow. פותח באהבה על ידי יוצרים מכל העולם.</p>
      </div>
    </footer>
  );
}
