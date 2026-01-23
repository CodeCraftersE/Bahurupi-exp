
import React, { useState, useEffect } from 'react';
import { Region, UserPreferences, Badge, Location, LocationReview } from './types';
import { LOCATIONS, INITIAL_BADGES } from './data/bengalData';
import MapExplorer from './components/MapExplorer';
import ItineraryPlanner from './components/ItineraryPlanner';
import BadgeSystem from './components/BadgeSystem';
import ProjectDocs from './components/ProjectDocs';
import HistorySection from './components/HistorySection';
import MasteryQuiz from './components/MasteryQuiz';
import FeedbackWall from './components/FeedbackWall';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'quiz' | 'history' | 'planner' | 'docs' | 'feedback'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [badges, setBadges] = useState<Badge[]>(INITIAL_BADGES);
  const [visited, setVisited] = useState<string[]>([]);
  const [reviews, setReviews] = useState<LocationReview[]>([]);
  const [points, setPoints] = useState<number>(0);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme as 'light' | 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Persist visited locations, points, and reviews
  useEffect(() => {
    const savedVisited = localStorage.getItem('visited_locations');
    const savedPoints = localStorage.getItem('user_points');
    const savedReviews = localStorage.getItem('user_reviews');
    if (savedVisited) setVisited(JSON.parse(savedVisited));
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedReviews) setReviews(JSON.parse(savedReviews));
  }, []);

  // Theme Sync
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleVisit = (id: string, earnedPoints: number) => {
    // Only update points if the location hasn't been visited before
    const isNewVisit = !visited.includes(id);
    const updatedVisited = Array.from(new Set([...visited, id]));

    setVisited(updatedVisited);
    localStorage.setItem('visited_locations', JSON.stringify(updatedVisited));

    if (isNewVisit) {
      const updatedPoints = points + earnedPoints;
      setPoints(updatedPoints);
      localStorage.setItem('user_points', JSON.stringify(updatedPoints));

      // Update badge unlock logic
      if (updatedVisited.length >= 3) {
        setBadges(prev => prev.map(b => b.id === 'heritage-1' ? { ...b, unlocked: true } : b));
      }
    }
  };

  const handleReviewSubmit = (review: LocationReview) => {
    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('user_reviews', JSON.stringify(updatedReviews));

    // Reward for reviewing
    const updatedPoints = points + 25;
    setPoints(updatedPoints);
    localStorage.setItem('user_points', JSON.stringify(updatedPoints));
  };

  const updatePoints = (earnedPoints: number) => {
    const updatedPoints = points + earnedPoints;
    setPoints(updatedPoints);
    localStorage.setItem('user_points', JSON.stringify(updatedPoints));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-500">
      {/* Navigation Header */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl group-hover:rotate-12 transition-transform duration-500">B</div>
              <span className="text-2xl font-heritage tracking-tight text-indigo-950 dark:text-white font-bold">Bohurupi Bangla <span className="text-indigo-600">2.0</span></span>
            </div>

            <div className="hidden lg:flex space-x-6">
              <button onClick={() => setActiveTab('home')} className={`text-xs font-black tracking-widest uppercase border-b-2 transition-all pb-1 ${activeTab === 'home' ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-indigo-500'}`}>Explore</button>
              <button onClick={() => setActiveTab('feedback')} className={`text-xs font-black tracking-widest uppercase border-b-2 transition-all pb-1 ${activeTab === 'feedback' ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-indigo-500'}`}>Feedback</button>
              <button onClick={() => setActiveTab('quiz')} className={`text-xs font-black tracking-widest uppercase border-b-2 transition-all pb-1 ${activeTab === 'quiz' ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-indigo-500'}`}>Mastery</button>
              <button onClick={() => setActiveTab('history')} className={`text-xs font-black tracking-widest uppercase border-b-2 transition-all pb-1 ${activeTab === 'history' ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-indigo-500'}`}>History</button>
              <button onClick={() => setActiveTab('planner')} className={`text-xs font-black tracking-widest uppercase border-b-2 transition-all pb-1 ${activeTab === 'planner' ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-indigo-500'}`}>AI Itinerary</button>
              <button onClick={() => setActiveTab('docs')} className={`text-xs font-black tracking-widest uppercase border-b-2 transition-all pb-1 ${activeTab === 'docs' ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-indigo-500'}`}>Project Docs</button>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <div className="hidden sm:flex bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 px-5 py-2 rounded-2xl items-center space-x-3 shadow-sm">
                <span className="text-xl animate-bounce">✨</span>
                <span className="font-black text-amber-700 dark:text-amber-400 tabular-nums">{points} pts</span>
              </div>
              <BadgeSystem badges={badges} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-all active:scale-90"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-ellipsis-v'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60]">
            {/* Backdrop Blur */}
            <div
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="absolute top-24 right-4 w-[280px] h-fit max-h-[80vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[2.5rem] flex flex-col p-8 space-y-6 border border-white/20 dark:border-slate-800">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-[0_0_10px_rgba(37,99,235,0.4)]">B</div>
                <div className="flex flex-col">
                  <span className="text-sm font-heritage font-bold text-indigo-950 leading-tight">বহুরূপী বাংলা</span>
                  <span className="text-[9px] text-slate-400 font-medium tracking-wide uppercase leading-tight">Bahurupi Bangla</span>
                </div>
              </div>

              <div className="space-y-2 text-left">
                {[
                  { id: 'home', label: 'Explore', icon: 'fa-compass' },
                  { id: 'feedback', label: 'Feedback', icon: 'fa-comments' },
                  { id: 'quiz', label: 'Mastery', icon: 'fa-brain' },
                  { id: 'history', label: 'History', icon: 'fa-landmark' },
                  { id: 'planner', label: 'AI Itinerary', icon: 'fa-magic' },
                  { id: 'docs', label: 'Project Docs', icon: 'fa-file-code' }
                ].map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => {
                      setActiveTab(nav.id as any);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3.5 rounded-xl transition-all duration-300 ${activeTab === nav.id
                      ? 'bg-blue-600 text-white shadow-[0_5_15px_rgba(37,99,235,0.4)] scale-[1.02]'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600'
                      }`}
                  >
                    <i className={`fas ${nav.icon} text-sm`}></i>
                    <span className="font-bold text-sm">{nav.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 active:scale-90 transition-transform"
              >
                <i className="fas fa-times text-sm"></i>
              </button>

              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Developed by</p>
                <a href="https://www.instagram.com/sayantan._.das/" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-950 dark:text-slate-200 font-heritage font-bold hover:text-blue-600 transition-colors">Sayantan Das</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="transition-all duration-1000">
            {/* Main Hero Header Section */}
            <div className="bg-indigo-950 text-white py-32 px-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Kolkata Heritage" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/40 to-transparent"></div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="bg-indigo-500/30 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 inline-block shadow-xl">Cultural Journey Awaits</span>
                <h1 className="text-5xl md:text-8xl font-heritage mb-8 leading-tight drop-shadow-2xl">Discover the Soul of Bengal</h1>
                <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed font-light">Experience a journey where timeless heritage meets cutting-edge AI. Explore, visit sites, and test your knowledge to earn points.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button onClick={() => setActiveTab('planner')} className="bg-white text-indigo-950 px-12 py-5 rounded-3xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center">
                    Plan My Trip <i className="fas fa-sparkles ml-3 text-indigo-500"></i>
                  </button>
                  <button onClick={() => setActiveTab('history')} className="bg-amber-500 text-white px-12 py-5 rounded-3xl font-bold shadow-2xl transition-all hover:bg-amber-600 flex items-center">
                    Explore Bengal's History <i className="fas fa-history ml-3"></i>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"></div>
            </div>

            <div id="explore-section" className="max-w-7xl mx-auto py-24 px-4">
              <MapExplorer
                onRegionSelect={setSelectedRegion}
                locations={LOCATIONS.filter(l => !selectedRegion || l.region === selectedRegion)}
                onVisit={handleVisit}
                visited={visited}
                onReviewSubmit={handleReviewSubmit}
              />
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="py-10 px-4">
            <div className="max-w-7xl mx-auto">
              <FeedbackWall reviews={reviews} />
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <MasteryQuiz onScoreUpdate={updatePoints} />
            </div>
          </div>
        )}

        {activeTab === 'history' && <HistorySection />}
        {activeTab === 'planner' && <ItineraryPlanner />}
        {activeTab === 'docs' && <ProjectDocs />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-24 px-4 border-t border-slate-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-heritage mb-8">Bohurupi Bangla</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">A visionary project dedicated to digitizing and gamifying the rich cultural tapestry of West Bengal. Created for travelers, by architects of the future.</p>
          </div>
          <div>
            <h3 className="font-bold mb-8 text-slate-100 uppercase tracking-widest text-sm border-b border-slate-800 pb-2">Navigation</h3>
            <ul className="text-slate-400 space-y-6">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-indigo-400 transition-colors flex items-center"><i className="fas fa-compass mr-3"></i> Explore Map</button></li>
              <li><button onClick={() => setActiveTab('feedback')} className="hover:text-indigo-400 transition-colors flex items-center"><i className="fas fa-comments mr-3"></i> Experiences</button></li>
              <li><button onClick={() => setActiveTab('quiz')} className="hover:text-indigo-400 transition-colors flex items-center"><i className="fas fa-brain mr-3"></i> Mastery Quiz</button></li>
              <li><button onClick={() => setActiveTab('history')} className="hover:text-indigo-400 transition-colors flex items-center"><i className="fas fa-landmark mr-3"></i> Heritage Timeline</button></li>
              <li><button onClick={() => setActiveTab('planner')} className="hover:text-indigo-400 transition-colors flex items-center"><i className="fas fa-magic mr-3"></i> AI Planner</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-8 text-slate-100 uppercase tracking-widest text-sm border-b border-slate-800 pb-2">Connect</h3>
            <a href="https://www.instagram.com/sayantan._.das/" target="_blank" rel="noopener noreferrer" className="text-slate-400 mb-4 block hover:text-indigo-400 transition-colors">Sayantan Das</a>
            <div className="mt-8 flex space-x-6">
              <a href="https://my-portfolio-dusky-omega-99.vercel.app/" target="_blank" rel="noopener noreferrer" title="My Portfolio">
                <i className="fas fa-user-tie text-3xl hover:text-indigo-400 cursor-pointer transition-colors"></i>
              </a>
              <a href="https://www.linkedin.com/in/sayantan-das07/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin text-3xl hover:text-indigo-400 cursor-pointer transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-900 text-center text-slate-600 text-xs font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Bohurupi Bangla Project. All Cultural Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
