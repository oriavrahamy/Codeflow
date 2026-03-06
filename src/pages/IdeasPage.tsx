import { Link } from 'react-router-dom';

export default function IdeasPage() {
  return (
    <>
      <header className="hero-pattern text-white pt-20 pb-24 px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-4xl lg:text-7xl font-black leading-tight drop-shadow-lg">מה תרצו ליצור היום?</h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            התחילו עם המדריכים הפשוטים שלנו ובנו דברים מדהימים. כל פרויקט הוא הזדמנות ללמוד משהו חדש!
          </p>
        </div>
        <div className="absolute top-10 right-[5%] text-accent-orange/40 hidden lg:block rotate-12">
          <span className="material-symbols-outlined text-8xl">lightbulb</span>
        </div>
        <div className="absolute bottom-10 left-[5%] text-accent-blue/40 hidden lg:block -rotate-12">
          <span className="material-symbols-outlined text-8xl">auto_awesome</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all">הכל</button>
            <button className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all">אנימציה</button>
            <button className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all">משחקים</button>
            <button className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all">סיפורים</button>
            <button className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all">מוזיקה</button>
          </div>
          <div className="text-slate-500 dark:text-slate-400 font-medium">
            מציג 12 מדריכים נבחרים
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-accent-blue/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-accent-blue/60 group-hover:scale-110 transition-transform duration-500">airplanemode_active</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-accent-blue">מתחילים</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">לגרום לו לעוף</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">למדו איך להשתמש בבלוקי תנועה כדי להניע דמויות בשמיים וליצור הרפתקה אווירית.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-accent-green/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-accent-green/60 group-hover:scale-110 transition-transform duration-500">text_fields</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-accent-green">מתחילים</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">הנפישו שם</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">הפכו את האותיות של השם שלכם לצבעוניות, רוקדות ומסתובבות עם בלוקי לחיצה.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-pink-100 dark:bg-pink-900/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-pink-400 group-hover:scale-110 transition-transform duration-500">auto_stories</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-pink-500">בינוני</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">צרו סיפור</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">שלבו דמויות, רקעים ודיאלוגים כדי לספר סיפור אינטראקטיבי משלכם.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-yellow-100 dark:bg-yellow-900/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-yellow-500/60 group-hover:scale-110 transition-transform duration-500">sports_esports</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-yellow-600">מתקדם</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">משחק 'תפוס אותי'</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">בנו משחק שבו השחקן צריך לתפוס חפצים נופלים כדי לצבור נקודות.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-purple-100 dark:bg-purple-900/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-purple-400 group-hover:scale-110 transition-transform duration-500">music_note</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-purple-500">מתחילים</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">עולם של מוזיקה</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">הוסיפו צלילים, תופים וכלי נגינה לפרויקטים שלכם וצרו מופע מוזיקלי.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-orange-100 dark:bg-orange-900/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-orange-400 group-hover:scale-110 transition-transform duration-500">pets</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-orange-500">מתחילים</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">החיה הווירטואלית שלי</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">צרו חיית מחמד שאפשר להאכיל אותה, לשחק איתה ולראות אותה גדלה.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-cyan-100 dark:bg-cyan-900/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-cyan-400 group-hover:scale-110 transition-transform duration-500">brush</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-cyan-500">בינוני</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">ציירו עם קוד</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">השתמשו בבלוקי העט כדי לצייר צורות גאומטריות מורכבות ואמנות מרהיבה.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-red-100 dark:bg-red-900/20 relative flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-8xl text-red-400 group-hover:scale-110 transition-transform duration-500">celebration</span>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-red-500">מתחילים</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">כרטיס ברכה מדבר</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">שלחו איחולים לחברים עם כרטיס ברכה שזז ומדבר כשלוחצים עליו.</p>
              <Link to="/editor" className="w-full bg-accent-orange text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                התחילו ליצור
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary/10 dark:bg-primary/20 text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all text-xl shadow-sm">טען עוד רעיונות</button>
        </div>
      </main>
    </>
  );
}
