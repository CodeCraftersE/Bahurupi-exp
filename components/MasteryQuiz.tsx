
import React, { useState, useEffect } from 'react';
import { MasterQuizQuestion } from '../types';

interface MasteryQuizProps {
  onScoreUpdate: (points: number) => void;
}

// API base URL
const API_BASE_URL = "http://localhost:8080/api";

const MOCK_QUESTIONS = [
  {
    id: "mq1",
    question: "Which Bengal town is famously associated with the term 'French Riviera of the East'?",
    options: ["Kolkata", "Chandannagar", "Bandel", "Digha"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "Chandannagar was a French colony until 1950, and its 'Strand' riverside is often compared to French promenades."
  },
  {
    id: "mq2",
    question: "The 'Baluchari' saree, known for its intricate depictions of mythological scenes, originated in which district?",
    options: ["Bankura", "Murshidabad", "Nadia", "Hooghly"],
    correctAnswer: 1,
    difficulty: "Expert",
    factoid: "While Bankura (Bishnupur) is the current hub, Baluchari originally originated in Baluchar village in Murshidabad."
  },
  {
    id: "mq3",
    question: "Which of these is the literal meaning of 'Kolkata'?",
    options: ["The land of Kali", "The field of lime (Chuna)", "Place of the goddess", "The delta mouth"],
    correctAnswer: 1,
    difficulty: "Expert",
    factoid: "It is believed to be derived from 'Kolikata', which likely stems from 'Khal' (canal) and 'Katta' (dug), or linked to the word for lime (Kalikata)."
  },
  {
    id: "mq5",
    question: "Which Nobel Laureate from Bengal founded the 'Visva-Bharati' University?",
    options: ["Amartya Sen", "Rabindranath Tagore", "Mother Teresa", "Abhijit Banerjee"],
    correctAnswer: 1,
    difficulty: "Easy",
    factoid: "Rabindranath Tagore founded Visva-Bharati in Santiniketan as an experimental school in 1901."
  },
  {
    id: "mq6",
    question: "What is the traditional art of floor painting in Bengal called?",
    options: ["Rangoli", "Alpona", "Madhubani", "Pattachitra"],
    correctAnswer: 1,
    difficulty: "Easy",
    factoid: "Alpona is the traditional folk art of Bengal, usually made during festivals like Lakshmi Puja."
  },
  {
    id: "mq7",
    question: "Which iconic bridge in Kolkata is a 'Cantilever' bridge with no pillars in the river bed?",
    options: ["Vidyasagar Setu", "Howrah Bridge", "Vivekananda Setu", "Bally Bridge"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "Howrah Bridge is one of the busiest cantilever bridges in the world, connecting Kolkata and Howrah."
  },
  {
    id: "mq8",
    question: "The Sundarbans, the world's largest mangrove forest, is named after which tree?",
    options: ["Sal", "Sundari", "Teak", "Banyan"],
    correctAnswer: 1,
    difficulty: "Easy",
    factoid: "Sundari (Heritiera fomes) trees provide the forest its name and are vital to its ecosystem."
  },
  {
    id: "mq9",
    question: "Which district in West Bengal is world-famous for its 'Fazli' and 'Himsagar' mangoes?",
    options: ["Malda", "Murshidabad", "Nadia", "Birbhum"],
    correctAnswer: 0,
    difficulty: "Easy",
    factoid: "Malda is the mango capital of Bengal, exporting thousands of tons of high-quality mangoes annually."
  },
  {
    id: "mq10",
    question: "The 'Baul' music of Bengal is recognized by UNESCO as part of what?",
    options: ["World Heritage Site", "Intangible Cultural Heritage", "Memory of the World", "Biosphere Reserve"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "Baul music is a unique folk tradition representing the spiritual and philosophical side of rural Bengal."
  },
  {
    id: "mq11",
    question: "Which place is known as the 'Land of Red Soil' (Lal Matir Desh) in Bengal?",
    options: ["Darjeeling", "Birbhum", "Sundarbans", "Kolkata"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "Birbhum's laterite soil gives it a distinct red appearance, famously celebrated in Santiniketan's culture."
  },
  {
    id: "mq12",
    question: "Which Bengali scientist is known as the 'Father of Radio Science'?",
    options: ["Satyendra Nath Bose", "Jagadish Chandra Bose", "Prafulla Chandra Ray", "Meghnad Saha"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "J.C. Bose pioneered the investigation of radio and microwave optics and was a polymath."
  },
  {
    id: "mq13",
    question: "Which river is known as the 'Sorrow of Bengal' due to its frequent floods?",
    options: ["Hooghly", "Damodar", "Teesta", "Rupnarayan"],
    correctAnswer: 1,
    difficulty: "Easy",
    factoid: "Historically, the Damodar River caused devastating floods, though dams have now controlled it."
  },
  {
    id: "mq14",
    question: "Kolkata's Tram system, started in 1873, holds what distinction in Asia?",
    options: ["Fastest Trams", "Only operating Tram network", "Oldest operating Tram network", "Largest network"],
    correctAnswer: 2,
    difficulty: "Medium",
    factoid: "The Kolkata Tram is the oldest operating electric tram system in Asia and a symbol of heritage."
  },
  {
    id: "mq15",
    question: "Which Bengali author wrote the national song 'Vande Mataram'?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Michael Madhusudan Dutt", "Sarat Chandra"],
    correctAnswer: 1,
    difficulty: "Easy",
    factoid: "Vande Mataram was first published in Bankim Chandra's novel 'Anandamath' in 1882."
  },
  {
    id: "mq16",
    question: "Which city was the capital of British India until 1911?",
    options: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    correctAnswer: 1,
    difficulty: "Easy",
    factoid: "Kolkata served as the center of British administration before the capital moved to New Delhi."
  },
  {
    id: "mq17",
    question: "Which Bengal revolutionary is famously known as 'Bagha Jatin'?",
    options: ["Jatin Das", "Jatindranath Mukherjee", "Surya Sen", "Rash Behari Bose"],
    correctAnswer: 1,
    difficulty: "Expert",
    factoid: "He earned the name after killing a tiger with a dhal (dagger) single-handedly."
  },
  {
    id: "mq18",
    question: "The 'Chhau' dance of Purulia is characterized by the use of what?",
    options: ["Large Masks", "Long Sticks", "Fire", "Puppets"],
    correctAnswer: 0,
    difficulty: "Medium",
    factoid: "Purulia Chhau is a vibrant martial folk dance where performers wear elaborate handcrafted masks."
  },
  {
    id: "mq19",
    question: "Which place is the birthplace of Chaitanya Mahaprabhu?",
    options: ["Mayapur", "Nabadwip", "Tarapith", "Dakshineswar"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "Nabadwip is a sacred town and the 15th-century birthplace of the Vaishnava saint."
  },
  {
    id: "mq20",
    question: "The 'Victoria Memorial' was built using marble from which place?",
    options: ["Italy", "Makrana, Rajasthan", "Jabalpur", "Portugal"],
    correctAnswer: 1,
    difficulty: "Medium",
    factoid: "It was built with the same white Makrana marble used for the Taj Mahal."
  },
  {
    id: "mq21",
    question: "Which forest in North Bengal is famous for the 'Red Panda'?",
    options: ["Gorumara", "Jaldapara", "Singalila National Park", "Buxa Tiger Reserve"],
    correctAnswer: 2,
    difficulty: "Expert",
    factoid: "Singalila is the highest national park in Bengal and a habitat for the rare Red Panda."
  }
];

const MasteryQuiz: React.FC<MasteryQuizProps> = ({ onScoreUpdate }) => {
  const [currentQuestion, setCurrentQuestion] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [serverFactoid, setServerFactoid] = useState("");
  const [seenIds, setSeenIds] = useState<string[]>([]);

  const NAWAB_THRESHOLD = 1500;

  // Fetch a new question from the backend
  const fetchNewQuestion = async () => {
    setLoading(true);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);

    try {
      // Pass seenIds to backend
      const queryParams = seenIds.length > 0 ? `?excludeIds=${seenIds.join(',')}` : '';
      const response = await fetch(`${API_BASE_URL}/master-quiz/random${queryParams}`);

      if (response.ok) {
        const data = await response.json();
        setCurrentQuestion(data);
        setSeenIds(prev => [...prev, data.id]);
      } else {
        throw new Error("Server communication failed");
      }
    } catch (err) {
      console.log("Using Mock Data");
      // Filter mock pool by seenIds
      const availableMocks = MOCK_QUESTIONS.filter(q => !seenIds.includes(q.id));
      const pool = availableMocks.length > 0 ? availableMocks : MOCK_QUESTIONS;

      const picked = pool[Math.floor(Math.random() * pool.length)];

      setTimeout(() => {
        setCurrentQuestion(picked);
        setSeenIds(prev => [...prev, picked.id]);
      }, 800);
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  useEffect(() => {
    fetchNewQuestion();
  }, []);

  // Validate answer with the backend
  const handleOptionSelect = async (idx: number) => {
    if (showResult || loading) return;
    setSelectedOption(idx);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/master-quiz/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          answerIndex: idx
        })
      });

      if (response.ok) {
        const result = await response.json();
        setIsCorrect(result.correct);
        setServerFactoid(result.factoid);
        if (result.correct) {
          const points = 100;
          setScore(prev => prev + points);
          onScoreUpdate(points);
        }
      } else {
        throw new Error("Validation Failed");
      }
    } catch (err) {
      // Logic for mock validation
      const mockQuestion = MOCK_QUESTIONS.find(q => q.id === currentQuestion.id) || currentQuestion;
      const correct = idx === mockQuestion.correctAnswer;

      setIsCorrect(correct);
      setServerFactoid(mockQuestion.factoid || "Bengal's history is full of surprises!");

      if (correct) {
        setScore(prev => prev + 100);
        onScoreUpdate(100);
      }
    } finally {
      setShowResult(true);
      setLoading(false);
      setQuestionsCount(prev => prev + 1);
      // Session progress tracking
      if (questionsCount >= 19) {
        setTimeout(() => setQuizFinished(true), 2000);
      }
    }
  };

  return (
    <div className="bg-indigo-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10 group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        {/* Side Panel: Progress & Branding */}
        <div className="md:w-1/3 text-center md:text-left space-y-6">
          <div className="inline-block bg-indigo-500/20 px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-300 text-[10px] font-black uppercase tracking-widest">
            <i className="fas fa-check-circle mr-2 opacity-50"></i> Live Verification Active
          </div>
          <h2 className="text-5xl md:text-6xl font-heritage leading-tight">
            কত ধানে কত চাল?
          </h2>
          <p className="text-indigo-200 font-light text-lg italic">
            "Prove your deep knowledge of Bengal's rich heritage."
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center md:justify-start items-baseline space-x-2">
              <span className="text-4xl font-bold font-heritage text-amber-400 tabular-nums">{score}</span>
              <span className="text-xs uppercase font-black text-indigo-400 tracking-widest">Mastery Points</span>
            </div>
            {score >= NAWAB_THRESHOLD && (
              <div className="animate-bounce bg-amber-400 text-indigo-950 px-4 py-2 rounded-xl text-sm font-black uppercase tracking-tighter shadow-xl shadow-amber-400/20 flex items-center justify-center md:justify-start space-x-2">
                <i className="fas fa-crown"></i>
                <span>Nawab of Bengal</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Quiz Area */}
        <div className="md:w-2/3 w-full min-h-[400px] flex items-center justify-center">
          {quizFinished ? (
            <div className="w-full bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-12 text-center space-y-8">
              <div className="w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center text-indigo-950 text-4xl mx-auto shadow-2xl shadow-amber-400/20">
                {score >= NAWAB_THRESHOLD ? '👑' : '🏆'}
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-heritage">
                  {score >= NAWAB_THRESHOLD ? 'Nawab of Bengal' : 'Architect of Knowledge'}
                </h4>
                <p className="text-indigo-200 text-xl">Total Score: <span className="text-white font-bold">{score}</span></p>
                {score >= NAWAB_THRESHOLD && (
                  <p className="text-amber-400 text-sm font-black uppercase">You have attained the ultimate title!</p>
                )}
              </div>
              <button
                onClick={() => window.location.reload()}
                className="px-12 py-4 bg-indigo-600 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl"
              >
                Restart Session
              </button>
            </div>
          ) : loading && !showResult ? (
            <div className="text-center space-y-4 animate-pulse">
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-xs font-black uppercase tracking-widest text-indigo-400">Loading live questions...</p>
            </div>
          ) : currentQuestion ? (
            <div className="w-full bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-inner">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Current Question</span>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {currentQuestion.difficulty || 'Expert'}
                </span>
              </div>

              <h3 className="text-2xl font-heritage mb-10 leading-relaxed">
                {currentQuestion.question}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt: string, i: number) => (
                  <button
                    key={i}
                    disabled={showResult || loading}
                    onClick={() => handleOptionSelect(i)}
                    className={`p-6 rounded-2xl text-left font-bold transition-all border-2 flex items-center justify-between group ${showResult
                      ? (i === selectedOption
                        ? (isCorrect ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-rose-500/20 border-rose-500 text-rose-300')
                        : 'bg-white/5 border-transparent opacity-40')
                      : 'bg-white/5 border-transparent hover:border-indigo-400 hover:bg-white/10 active:scale-95'
                      }`}
                  >
                    <span>{opt}</span>
                    {showResult && i === selectedOption && (
                      <i className={`fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                    )}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="mt-10">
                  <div className={`p-6 rounded-2xl border mb-6 transition-colors ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100' : 'bg-rose-500/10 border-rose-500/30 text-rose-100'}`}>
                    <p className="text-sm italic font-light">
                      <i className={`fas ${isCorrect ? 'fa-star text-amber-400' : 'fa-info-circle text-indigo-400'} mr-3`}></i>
                      {serverFactoid}
                    </p>
                  </div>
                  <button
                    onClick={fetchNewQuestion}
                    className="w-full py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl"
                  >
                    Next Challenge
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MasteryQuiz;
