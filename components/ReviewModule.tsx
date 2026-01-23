
import React, { useState } from 'react';
import { Location, CriteriaRatings, LocationReview } from '../types';

interface ReviewModuleProps {
  location: Location;
  onClose: () => void;
  onSubmit: (review: LocationReview) => void;
}

const ReviewModule: React.FC<ReviewModuleProps> = ({ location, onClose, onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [ratings, setRatings] = useState<CriteriaRatings>({
    heritage: 5,
    beauty: 5,
    vibe: 5
  });

  const StarRating = ({
    label,
    value,
    onChange
  }: {
    label: string,
    value: number,
    onChange: (val: number) => void
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors duration-500">{label}</label>
        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs">{value}/5</span>
      </div>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className={`text-xl transition-all hover:scale-125 ${star <= value ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}`}
          >
            <i className={`fa${star <= value ? 's' : 'r'} fa-star`}></i>
          </button>
        ))}
      </div>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim()) return;

    const newReview: LocationReview = {
      id: Date.now().toString(),
      locationId: location.id,
      locationName: location.name,
      region: location.region,
      ratings,
      comment,
      userName: userName.trim(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    onSubmit(newReview);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-indigo-950/40 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 max-w-xl w-full shadow-2xl relative border border-white/20 dark:border-slate-800 overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl -mr-24 -mt-24"></div>

        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="relative z-10 space-y-8">
          <div className="space-y-2">
            <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800 transition-colors">Feedback Module</span>
            <h3 className="text-3xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">Review: {location.name}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light transition-colors duration-500">Share your personal experience with fellow explorers.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StarRating
                label="Heritage (ঐতিহ্য)"
                value={ratings.heritage}
                onChange={(v) => setRatings({ ...ratings, heritage: v })}
              />
              <StarRating
                label="Beauty (সৌন্দর্য)"
                value={ratings.beauty}
                onChange={(v) => setRatings({ ...ratings, beauty: v })}
              />
              <StarRating
                label="Vibe (অনুভূতি)"
                value={ratings.vibe}
                onChange={(v) => setRatings({ ...ratings, vibe: v })}
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors">Your Name</label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Joyonto Mukherjee"
                  className="w-full p-4 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 outline-none transition-all font-bold text-slate-700 dark:text-slate-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors">Your Story</label>
                <textarea
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What made this place special? Any local secrets?"
                  className="w-full p-4 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700 dark:text-slate-300 h-32 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-indigo-100 dark:shadow-indigo-950/20 hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center space-x-3"
            >
              <span>Submit Review</span>
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
            <p className="text-center text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest italic transition-colors">+25 Knowledge Points Reward</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModule;
