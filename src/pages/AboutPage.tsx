import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <header className="hero-pattern text-white pt-20 pb-32 px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight drop-shadow-xl">על CodeFlow</h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            הופכים את עולם התכנות לנגיש, יצירתי ומהנה עבור כל ילד וילדה. המשימה שלנו היא להעניק לדור הבא את הכלים לבנות את העתיד.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background-light dark:bg-background-dark" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)' }}></div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <section className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-black text-primary dark:text-blue-400">החזון שלנו</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              ב-CodeFlow, אנו מאמינים שתכנות הוא הרבה יותר מכתיבת שורות קוד. זוהי שפה חדשה של יצירתיות ופתרון בעיות. הפלטפורמה שלנו עוצבה במיוחד עבור ילדים, עם ממשק בלוקים אינטואיטיבי המאפשר להם להביע את עצמם ולבנות עולמות דיגיטליים מאפס.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              אנחנו שואפים לגשר על הפער הדיגיטלי ולהבטיח שלכל ילד, ללא קשר לרקע שלו, תהיה הזדמנות שווה ללמוד, ליצור ולחלוק את הרעיונות שלו עם העולם.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent-orange/20 rounded-3xl blur-xl group-hover:bg-accent-orange/30 transition-all"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-[12rem] text-accent-orange leading-none">child_care</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-slate-800 dark:text-white">הערכים שמובילים אותנו</h2>
            <div className="w-24 h-2 bg-accent-orange mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-center space-y-6">
              <div className="w-20 h-20 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-accent-blue text-5xl">palette</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">יצירתיות</h3>
              <p className="text-slate-600 dark:text-slate-400">אנחנו מעודדים חשיבה מחוץ לקופסה ונותנים דרור לדמיון של כל משתמש.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-center space-y-6">
              <div className="w-20 h-20 bg-accent-orange/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-accent-orange text-5xl">groups</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">קהילה</h3>
              <p className="text-slate-600 dark:text-slate-400">למידה משותפת, שיתוף פרויקטים ותמיכה הדדית הם הלב הפועם של הפלטפורמה.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-center space-y-6">
              <div className="w-20 h-20 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-accent-green text-5xl">school</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">חינוך</h3>
              <p className="text-slate-600 dark:text-slate-400">הנגשת מושגי תכנות מורכבים בדרך חווייתית ומותאמת אישית לילדים.</p>
            </div>
          </div>
        </section>

        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-slate-800 dark:text-white">הצוות שמאחורי הקלעים</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">קבוצה של מחנכים, מפתחים ומעצבים שמאמינים בשינוי.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto flex items-center justify-center border-4 border-primary/20">
                <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">עידו לוי</h4>
                <p className="text-sm text-primary dark:text-blue-400 font-medium">מייסד ומנכ"ל</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto flex items-center justify-center border-4 border-primary/20">
                <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">מאיה כהן</h4>
                <p className="text-sm text-primary dark:text-blue-400 font-medium">מנהלת פדגוגית</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto flex items-center justify-center border-4 border-primary/20">
                <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">נועם ישראלי</h4>
                <p className="text-sm text-primary dark:text-blue-400 font-medium">מנהל טכנולוגי</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto flex items-center justify-center border-4 border-primary/20">
                <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">דנה שרון</h4>
                <p className="text-sm text-primary dark:text-blue-400 font-medium">מעצבת מוצר</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary rounded-3xl p-12 lg:p-20 text-center text-white space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
          <h2 className="text-4xl lg:text-5xl font-black relative z-10">מוכנים להתחיל את המסע?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">הצטרפו לאלפי ילדים שכבר יוצרים, משתפים ולומדים בכל יום.</p>
          <div className="flex justify-center relative z-10">
            <Link to="/editor" className="bg-accent-orange text-white px-12 py-5 rounded-full font-bold text-2xl flex items-center shadow-2xl hover:scale-105 hover:bg-orange-600 transition-all">
              <span className="material-symbols-outlined ml-3 text-3xl">rocket_launch</span> 
              התחילו ליצור עכשיו
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
