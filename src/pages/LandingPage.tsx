import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <div className="bg-blue-900 text-white py-2 px-4 text-center text-sm font-medium relative flex items-center justify-center">
        <span className="ml-2">✨</span>
        <p>פלטפורמת הקוד היא מוסד ללא כוונת רווח. תרומה קטנה עוזרת לנו להישאר פתוחים לכל הילדים.</p>
        <button className="bg-white text-blue-900 px-4 py-1 rounded-full font-bold mr-4 hover:bg-opacity-90 transition-all">תרומה</button>
        <button className="absolute left-4 text-white opacity-80 hover:opacity-100"><span className="material-symbols-outlined text-sm block">close</span></button>
      </div>

      <header className="hero-pattern text-white pt-24 pb-48 px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h1 className="text-5xl lg:text-8xl font-black leading-tight drop-shadow-xl">למדו לתכנת, צרו סיפורים!</h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed font-medium">
            בנו משחקים, אנימציות וסיפורים אינטראקטיביים תוך כדי למידת עקרונות תכנות בסיסיים. פלטפורמה ידידותית, חופשית ופתוחה לכל הילדים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <Link to="/editor" className="bg-accent-orange text-white px-12 py-6 rounded-full font-bold text-2xl flex items-center shadow-[0_10px_40px_rgba(255,143,0,0.4)] hover:scale-105 hover:bg-opacity-95 transition-all group">
              <span className="material-symbols-outlined ml-3 text-3xl group-hover:rotate-12 transition-transform">rocket_launch</span> 
              התחילו ליצור
            </Link>
          </div>
        </div>
        <div className="absolute top-20 right-[10%] bg-accent-blue/30 p-6 rounded-3xl backdrop-blur-sm animate-pulse hidden lg:block border border-white/20">
          <span className="material-symbols-outlined text-4xl text-white">brush</span>
        </div>
        <div className="absolute bottom-40 left-[10%] bg-accent-green/30 p-6 rounded-3xl backdrop-blur-sm animate-pulse hidden lg:block border border-white/20">
          <span className="material-symbols-outlined text-4xl text-white">extension</span>
        </div>
        <div className="absolute top-1/2 left-10 opacity-20 hidden xl:block">
          <span className="material-symbols-outlined text-8xl">code</span>
        </div>
        <div className="absolute top-1/3 right-10 opacity-20 hidden xl:block">
          <span className="material-symbols-outlined text-8xl">bolt</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background-light dark:bg-background-dark" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)' }}></div>
      </header>

      <div className="bg-background-light dark:bg-background-dark py-12 flex justify-center space-x-6 space-x-reverse">
        <Link to="/about" className="bg-primary/10 dark:bg-primary/20 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all text-lg">אודות CodeFlow</Link>
        <button className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-8 py-3 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-lg shadow-sm">להורים</button>
        <button className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-8 py-3 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-lg shadow-sm">למורים</button>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-accent-blue text-4xl">edit_square</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">פשוט ליצור</h3>
            <p className="text-slate-600 dark:text-slate-400">ממשק גרירת בלוקים אינטואיטיבי המאפשר לכל אחד להתחיל לתכנת תוך דקות, ללא צורך בידע קודם.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-accent-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-accent-orange text-4xl">public</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">לשתף עם העולם</h3>
            <p className="text-slate-600 dark:text-slate-400">הצטרפו לקהילה של מיליוני יוצרים. שתפו את הפרויקטים שלכם, קבלו השראה ולמדו מאחרים.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-accent-green text-4xl">auto_awesome</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">דמיון ללא גבולות</h3>
            <p className="text-slate-600 dark:text-slate-400">מספרים אינטראקטיביים ועד משחקים מורכבים - הכל אפשרי עם הכלים היצירתיים שלנו.</p>
          </div>
        </div>
      </main>
    </>
  );
}
