
import React from 'react';
import { LocationReview, Region } from '../types';

interface FeedbackWallProps {
  reviews: LocationReview[];
}

const FeedbackWall: React.FC<FeedbackWallProps> = ({ reviews }) => {
  const regionStyles: Record<string, string> = {
    [Region.NORTH_BENGAL]: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800",
    [Region.SOUTH_BENGAL]: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800",
    [Region.KOLKATA]: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-100 dark:border-yellow-800",
    [Region.WESTERN_BENGAL]: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800",
    [Region.CENTRAL_BENGAL]: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800",
    [Region.COASTAL_DELTA]: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800",
  };

  return (
    <div className="space-y-16 py-12">
      <div className="text-center space-y-6">
        <div className="inline-block bg-indigo-50 dark:bg-indigo-900/30 px-6 py-2 rounded-full border border-indigo-100 dark:border-indigo-800">
          <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest">Public Chronicles</span>
        </div>
        <h2 className="text-6xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">Wall of Experience</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light italic transition-colors duration-500">"Stories shared by explorers across the heritage routes of Bengal."</p>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
          <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 transition-colors duration-500">📝</div>
          <h3 className="text-2xl font-heritage text-slate-400 dark:text-slate-500">The Wall is Silent</h3>
          <p className="text-slate-400 dark:text-slate-500 mt-2">Visit a location and be the first to share your story.</p>
        </div>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xs transition-colors duration-500">
                    {review.userName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight transition-colors duration-500">{review.userName}</h4>
                    <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mt-0.5">{review.date}</p>
                  </div>
                </div>
                <span className={`px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${regionStyles[review.region] || 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500'}`}>
                  {review.region.split('(')[0].trim()}
                </span>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-heritage text-indigo-950 dark:text-indigo-300 transition-colors duration-500">{review.locationName}</h5>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic font-light transition-colors duration-500">"{review.comment}"</p>

                <div className="pt-4 border-t border-slate-50 dark:border-slate-800 grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <span className="block text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter mb-1">Heritage</span>
                    <div className="flex justify-center text-[10px] text-amber-400">
                      {Array.from({ length: review.ratings.heritage }).map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1">Beauty</span>
                    <div className="flex justify-center text-[10px] text-amber-400">
                      {Array.from({ length: review.ratings.beauty }).map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1">Vibe</span>
                    <div className="flex justify-center text-[10px] text-amber-400">
                      {Array.from({ length: review.ratings.vibe }).map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackWall;
