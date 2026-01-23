
export enum Region {
  NORTH_BENGAL = 'North Bengal',
  SOUTH_BENGAL = 'South Bengal',
  KOLKATA = 'Kolkata & Greater Kolkata',
  WESTERN_BENGAL = 'Western Bengal (Rarh)',
  CENTRAL_BENGAL = 'Central Bengal',
  COASTAL_DELTA = 'Coastal & Delta Bengal'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface MasterQuizQuestion extends QuizQuestion {
  id: string;
  difficulty: 'Easy' | 'Medium' | 'Expert';
  factoid: string;
}

export interface Location {
  id: string;
  name: string;
  bengaliName?: string;
  region: Region;
  category: 'Heritage' | 'Nature' | 'Urban' | 'Spiritual' | 'Coastal';
  description: string;
  image: string;
  tags: string[];
  wikiUrl?: string;
  quiz?: QuizQuestion;
}

export interface UserPreferences {
  interests: string[];
  budget: 'Budget' | 'Mid-range' | 'Luxury';
  pace: 'Relaxed' | 'Balanced' | 'Fast';
  members: number;
  month: string;
}

export interface BudgetBreakdown {
  travel: string;
  accommodation: string;
  food: string;
  activities: string;
  total: string;
}

export interface Itinerary {
  title: string;
  days: {
    day: number;
    activities: {
      time: string;
      title: string;
      desc: string;
      location: string;
    }[];
  }[];
  culturalNote: string;
  bestSeason: string;
  costPerHead: string;
  totalMaxCost: string;
  budgetBreakdown: BudgetBreakdown;
  bonusSuggestions?: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
  criteria: string;
}

export interface CriteriaRatings {
  heritage: number;
  beauty: number;
  vibe: number;
}

export interface LocationReview {
  id: string;
  locationId: string;
  locationName: string;
  region: Region;
  ratings: CriteriaRatings;
  comment: string;
  userName: string;
  date: string;
}
