import { Link } from 'react-router-dom';

export default function ExplorePage() {
  return (
    <>
      <header className="bg-primary text-white py-16 px-6 lg:px-20 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="space-y-6 text-center md:text-right">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight drop-shadow-lg">גלו פרויקטים מדהימים</h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed font-medium">
              ראו מה ילדים אחרים יצרו, שחקו במשחקים שלהם, וקבלו השראה לפרויקט הבא שלכם.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="חפשו פרויקטים, יוצרים או תגיות..." 
                className="w-full md:w-96 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-full py-4 px-6 pr-14 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:bg-white/20 transition-all text-lg"
              />
              <span className="material-symbols-outlined absolute right-5 top-4 text-white/60 text-2xl">search</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-50"></div>
      </header>

      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-8 space-x-reverse min-w-max py-4">
            <button className="text-primary dark:text-blue-400 font-bold border-b-2 border-primary dark:border-blue-400 pb-1 px-2 whitespace-nowrap">הכל</button>
            <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors pb-1 px-2 whitespace-nowrap">אנימציות</button>
            <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors pb-1 px-2 whitespace-nowrap">אמנות</button>
            <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors pb-1 px-2 whitespace-nowrap">משחקים</button>
            <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors pb-1 px-2 whitespace-nowrap">מוזיקה</button>
            <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors pb-1 px-2 whitespace-nowrap">סיפורים</button>
            <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors pb-1 px-2 whitespace-nowrap">מדריכים</button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-orange text-3xl">local_fire_department</span>
              פרויקטים חמים
            </h2>
            <button className="text-primary dark:text-blue-400 font-bold hover:underline text-sm">ראו הכל</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/game1/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">הרפתקאות החתול המעופף</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">SuperCoder99</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 1.2k</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 5.4k</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/art2/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">מכונת הציור האוטומטית</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">ArtisticMind</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 856</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 2.1k</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/music3/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">מנגינת החלל</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">BeatMaker</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 2.3k</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 10.5k</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/story4/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">המסע אל אי המטמון</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">StoryTeller_IL</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 450</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 1.2k</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-green text-3xl">new_releases</span>
              פרויקטים חדשים
            </h2>
            <button className="text-primary dark:text-blue-400 font-bold hover:underline text-sm">ראו הכל</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Project Card 5 */}
             <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/game5/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">מבוך הלייזר</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">NinjaCoder</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 12</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 45</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/art6/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">פרקטלים צבעוניים</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">MathGenius</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 5</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 18</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>

            {/* Project Card 7 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/music7/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">פסנתר וירטואלי</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">Mozart2024</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 8</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 32</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>

            {/* Project Card 8 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img src="https://picsum.photos/seed/story8/400/300" alt="Project thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-white mb-1 truncate">הכלב שמצא בית</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 truncate">על ידי <span className="text-primary dark:text-blue-400 hover:underline cursor-pointer">DogLover</span></p>
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-accent-orange cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">favorite</span> 22</span>
                    <span className="flex items-center gap-1 hover:text-accent-blue cursor-pointer transition-colors"><span className="material-symbols-outlined text-[16px]">visibility</span> 89</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] hover:text-primary cursor-pointer transition-colors">share</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-8">
          <button className="bg-primary/10 dark:bg-primary/20 text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all text-xl shadow-sm">טען עוד פרויקטים</button>
        </div>
      </main>
    </>
  );
}
