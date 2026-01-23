
import React, { useState } from 'react';
import { Region, Location, QuizQuestion, LocationReview } from '../types';
import ReviewModule from './ReviewModule';

interface MapExplorerProps {
  onRegionSelect: (region: Region | null) => void;
  locations: Location[];
  onVisit: (id: string, earnedPoints: number) => void;
  visited: string[];
  onReviewSubmit: (review: LocationReview) => void;
}

const MapExplorer: React.FC<MapExplorerProps> = ({ onRegionSelect, locations, onVisit, visited, onReviewSubmit }) => {
  const [activeQuiz, setActiveQuiz] = useState<{ location: Location, question: QuizQuestion } | null>(null);
  const [activeReviewLocation, setActiveReviewLocation] = useState<Location | null>(null);
  const [quizResult, setQuizResult] = useState<'correct' | 'wrong' | null>(null);
  const [hoveredBtnId, setHoveredBtnId] = useState<string | null>(null);

  const handleGetDirections = (locationName: string) => {
    const query = `${locationName}, West Bengal, India`;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(query)}&travelmode=driving`;
        window.open(url, '_blank');
      }, (error) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
      });
    } else {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    }
  };

  const startQuiz = (loc: Location) => {
    if (loc.quiz) {
      setActiveQuiz({ location: loc, question: loc.quiz });
      setQuizResult(null);
    } else {
      onVisit(loc.id, 10);
    }
  };

  const handleAnswer = (index: number) => {
    if (!activeQuiz) return;
    if (index === activeQuiz.question.correctAnswer) {
      setQuizResult('correct');
      setTimeout(() => {
        onVisit(activeQuiz.location.id, 50);
        setActiveQuiz(null);
      }, 1500);
    } else {
      setQuizResult('wrong');
      setTimeout(() => {
        onVisit(activeQuiz.location.id, 0);
        setActiveQuiz(null);
      }, 1500);
    }
  };

  const regionStyles: Record<string, string> = {
    [Region.NORTH_BENGAL]: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800",
    [Region.SOUTH_BENGAL]: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800",
    [Region.KOLKATA]: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-100 dark:border-yellow-800",
    [Region.WESTERN_BENGAL]: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800",
    [Region.CENTRAL_BENGAL]: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800",
    [Region.COASTAL_DELTA]: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800",
  };

  return (
    <div className="space-y-12">
      {/* Quiz Modal Overlay */}
      {activeQuiz && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden border border-white/20 dark:border-slate-800 transition-colors duration-500">
            {quizResult === 'correct' && (
              <div className="absolute inset-0 bg-green-500/10 flex flex-col items-center justify-center text-green-600 animate-in zoom-in duration-300 z-10">
                <span className="text-6xl mb-2">🎉</span>
                <span className="text-3xl font-bold">Correct! +50 pts</span>
              </div>
            )}
            {quizResult === 'wrong' && (
              <div className="absolute inset-0 bg-red-500/10 flex flex-col items-center justify-center text-red-600 animate-in zoom-in duration-300 z-10">
                <span className="text-6xl mb-2">❌</span>
                <span className="text-3xl font-bold">Incorrect! 0 pts</span>
              </div>
            )}
            <div className="relative">
              <h3 className="text-2xl font-heritage text-indigo-950 dark:text-white mb-6">{activeQuiz.location.name} Heritage Quiz</h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-8 text-lg leading-relaxed">{activeQuiz.question.question}</p>
              <div className="space-y-3">
                {activeQuiz.question.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={!!quizResult}
                    className="w-full p-4 text-left rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all font-medium text-slate-700 dark:text-slate-200 group flex justify-between items-center"
                  >
                    <span>{opt}</span>
                    <i className="fas fa-chevron-right text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 transition-colors"></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal Overlay */}
      {activeReviewLocation && (
        <ReviewModule
          location={activeReviewLocation}
          onClose={() => setActiveReviewLocation(null)}
          onSubmit={(rev) => {
            onReviewSubmit(rev);
            setActiveReviewLocation(null);
          }}
        />
      )}

      <div className="text-center">
        <h2 className="text-5xl font-heritage text-indigo-950 dark:text-white mb-8 transition-colors duration-500">Explore the Wonders of Bengal</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onRegionSelect(null)}
            className="px-8 py-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold transition-all shadow-sm dark:text-slate-300"
          >
            All Destinations
          </button>
          {Object.values(Region).map(r => (
            <button
              key={r}
              onClick={() => onRegionSelect(r)}
              className={`px-8 py-3 rounded-full border text-xs font-black uppercase tracking-widest transition-all shadow-sm ${regionStyles[r] || 'bg-slate-50 text-slate-700'}`}
            >
              {r.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map(loc => (
          <div key={loc.id} className="group bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
            <div className="relative h-72 overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1590050752117-23aae2fc1101?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute top-5 left-5">
                <span className="bg-indigo-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border border-white/20">{loc.category}</span>
              </div>
              {visited.includes(loc.id) && (
                <div className="absolute top-5 right-5">
                  <div className="bg-green-500/90 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/20 animate-in zoom-in duration-500">
                    <i className="fas fa-check"></i>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <div className="space-y-1">
                  <h3 className="text-2xl font-heritage text-indigo-950 dark:text-white leading-tight transition-colors duration-500">{loc.name}</h3>
                  {loc.bengaliName && <p className="text-sm font-bold text-indigo-400 dark:text-indigo-300 font-heritage">{loc.bengaliName}</p>}
                </div>
                {loc.wikiUrl && (
                  <button
                    onClick={() => window.open(loc.wikiUrl, '_blank')}
                    className="text-xs text-indigo-400 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-bold uppercase tracking-tighter transition-colors"
                  >
                    <i className="fas fa-info-circle mr-1"></i> About
                  </button>
                )}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed mt-4">{loc.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {loc.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-800">#{tag}</span>
                ))}
              </div>

              <div className="space-y-4 mt-auto">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onMouseEnter={() => setHoveredBtnId(loc.id)}
                    onMouseLeave={() => setHoveredBtnId(null)}
                    onClick={() => startQuiz(loc)}
                    disabled={visited.includes(loc.id)}
                    className={`py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center space-x-2 ${visited.includes(loc.id)
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 cursor-default'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl active:scale-95'
                      }`}
                  >
                    <i className={`fas ${visited.includes(loc.id) ? 'fa-check-double' : (hoveredBtnId === loc.id ? 'fa-hand-pointer' : 'fa-map-marker-alt')}`}></i>
                    <span className="whitespace-nowrap">
                      {visited.includes(loc.id)
                        ? 'Visited the Place'
                        : (hoveredBtnId === loc.id ? 'Click on me' : 'Visited')}
                    </span>
                  </button>
                  <button
                    onClick={() => handleGetDirections(loc.name)}
                    className="py-4 rounded-2xl font-bold text-sm border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <i className="fas fa-route"></i>
                    <span>Directions</span>
                  </button>
                </div>

                {visited.includes(loc.id) && (
                  <button
                    onClick={() => setActiveReviewLocation(loc)}
                    className="w-full py-3 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <i className="fas fa-star text-[8px]"></i>
                    <span>Leave a Legacy Review</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapExplorer;
