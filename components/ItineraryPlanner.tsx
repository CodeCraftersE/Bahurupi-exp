
import React, { useState, useRef, useEffect } from 'react';
import { Region, UserPreferences, Itinerary } from '../types';
import { generateItinerary, askItineraryQuestion } from '../services/geminiService';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const FormattedGuideText: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={i} className="text-xl font-heritage text-indigo-400 mt-8 mb-3 border-b border-indigo-500/30 pb-1">
              {trimmed.replace('### ', '').replace(/\*\*/g, '')}
            </h4>
          );
        }
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const content = trimmed.substring(2);
          const parts = content.split('**');
          return (
            <div key={i} className="flex items-start space-x-3 ml-2 group py-1">
              <span className="text-indigo-500 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform text-[8px]">●</span>
              <div className="flex-grow text-inherit">
                {parts.map((part, index) =>
                  index % 2 === 1
                    ? <strong key={index} className="font-bold text-white">{part}</strong>
                    : part
                )}
              </div>
            </div>
          );
        }
        if (!trimmed) return <div key={i} className="h-2" />;
        const parts = line.split('**');
        return (
          <p key={i} className="leading-relaxed">
            {parts.map((part, index) =>
              index % 2 === 1
                ? <strong key={index} className="font-bold text-white">{part}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
};

const ItineraryPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [region, setRegion] = useState<string>(Region.KOLKATA);
  const [customSearch, setCustomSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [duration, setDuration] = useState(3);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [prefs, setPrefs] = useState<UserPreferences>({
    interests: ['Heritage', 'Food'],
    budget: 'Mid-range',
    pace: 'Balanced',
    members: 2,
    month: "October"
  });

  const [chatQuestion, setChatQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'guide', text: string }[]>([]);
  const [isChatting, setIsChatting] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleGenerate = async () => {
    if (loading) return;
    const finalRegion = isSearching ? customSearch : region;
    if (isSearching && !customSearch.trim()) {
      setError("Please whisper a place name to the guide first.");
      return;
    }

    setLoading(true);
    setError(null);
    setItinerary(null);
    setChatHistory([]);
    try {
      const result = await generateItinerary(finalRegion, prefs, duration, isSearching);
      setItinerary(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!itinerary || !itineraryRef.current || downloading) return;

    setDownloading(true);
    try {
      const element = itineraryRef.current;

      // We use a high scale for sharpness, and capture with white background for professionalism
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 1200 // Force a standard desktop width for consistent PDF layout
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth - 20; // 10mm margin on each side
      const pageHeight = pdfHeight - 40; // Allow 20mm for header, 20mm for footer/margin
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 25; // Initial Y position (below header)

      // Function to add the professional branding header to every page
      const addHeader = (p: jsPDF) => {
        p.setFont("times", "bold");
        p.setFontSize(22);
        p.setTextColor(30, 27, 75); // Indigo 950
        p.text("Bohurupi Bangla Tour Guide", pdfWidth / 2, 15, { align: "center" });

        p.setDrawColor(226, 232, 240); // slate-200
        p.line(10, 18, pdfWidth - 10, 18);

        p.setFontSize(8);
        p.setFont("helvetica", "normal");
        p.setTextColor(100);
        p.text(`Personalized Itinerary for ${isSearching ? customSearch : region} | ${duration} Days`, pdfWidth / 2, 22, { align: "center" });
      };

      // Add First Page
      addHeader(pdf);
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Slicing logic for multiple pages
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 25; // Adjusted offset
        pdf.addPage();
        addHeader(pdf);
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileNamePlace = (isSearching ? customSearch : region).replace(/\s+/g, '_').toLowerCase();
      pdf.save(`itinerary_${fileNamePlace}.pdf`);
    } catch (err) {
      console.error("PDF Generation failed", err);
      alert("Could not generate PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuestion.trim() || !itinerary || isChatting) return;
    const userQ = chatQuestion;
    setChatQuestion("");
    setChatHistory(prev => [...prev, { role: 'user', text: userQ }]);
    setIsChatting(true);
    setChatHistory(prev => [...prev, { role: 'guide', text: "" }]);
    await askItineraryQuestion(itinerary, userQ, (chunk) => {
      setChatHistory(prev => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, -1);
        return [...rest, { role: 'guide', text: last.text + chunk }];
      });
    });
    setIsChatting(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-12">
      <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-2xl p-8 md:p-14 border border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 px-6 py-2 rounded-full mb-6 border border-indigo-100 dark:border-indigo-800">
            <i className="fas fa-sparkles text-indigo-500 text-xs animate-pulse"></i>
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">Bohurupi Elite Travel Concierge</span>
          </div>
          <h2 className="text-6xl font-heritage text-slate-900 dark:text-white mb-6">Bengal Odyssey Architect</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Where do you wish to wander? From the mists of Kalimpong to the clay of Bishnupur, the guide awaits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8 bg-slate-50/50 dark:bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 no-print">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Destination Mode</label>
                <div className="flex bg-white dark:bg-slate-900 rounded-full p-1 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <button
                    onClick={() => setIsSearching(false)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${!isSearching ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600'}`}
                  >Region</button>
                  <button
                    onClick={() => setIsSearching(true)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${isSearching ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600'}`}
                  >Search</button>
                </div>
              </div>

              {isSearching ? (
                <div className="relative group">
                  <input
                    type="text"
                    value={customSearch}
                    onChange={(e) => setCustomSearch(e.target.value)}
                    placeholder="E.g. Bishnupur, Mandarmani..."
                    className="w-full p-5 pl-12 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:border-indigo-500 transition-all text-sm group-hover:border-indigo-200 dark:group-hover:border-indigo-900"
                  />
                  <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 transition-colors"></i>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  {Object.values(Region).map(r => (
                    <button
                      key={r} onClick={() => setRegion(r)}
                      className={`text-left px-6 py-4 rounded-2xl font-bold transition-all border-2 ${region === r ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-500 shadow-xl' : 'bg-white/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center justify-between">
                <span>Duration</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">{duration} Days</span>
              </label>
              <input
                type="range" min="1" max="30" value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-indigo-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-500"
              />
              <div className="flex justify-between text-[9px] text-slate-400 dark:text-slate-500 font-bold tracking-widest uppercase">
                <span>Weekend</span>
                <span>Grand Odyssey</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Month</label>
                <select
                  value={prefs.month}
                  onChange={(e) => setPrefs({ ...prefs, month: e.target.value })}
                  className="w-full p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-slate-900 shadow-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
                >
                  {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Party Size</label>
                <input
                  type="number" min="1" max="50" value={prefs.members}
                  onChange={(e) => setPrefs({ ...prefs, members: Math.max(1, parseInt(e.target.value) || 1) })}
                  className="w-full p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-slate-900 shadow-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Comfort Tier</label>
                <select
                  value={prefs.budget}
                  onChange={(e) => setPrefs({ ...prefs, budget: e.target.value as any })}
                  className="w-full p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-slate-900 shadow-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
                >
                  {['Budget', 'Mid-range', 'Luxury'].map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Travel Pace</label>
                <select
                  value={prefs.pace}
                  onChange={(e) => setPrefs({ ...prefs, pace: e.target.value as any })}
                  className="w-full p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-slate-900 shadow-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:border-indigo-500 transition-all text-sm"
                >
                  <option value="Relaxed">1) Relaxed</option>
                  <option value="Balanced">2) Balanced</option>
                  <option value="Fast">3) Fast</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-6 rounded-[2rem] bg-indigo-600 text-white font-black text-lg shadow-2xl shadow-indigo-200 dark:shadow-indigo-950/20 hover:bg-slate-900 dark:hover:bg-indigo-700 transition-all disabled:opacity-50 active:scale-95 flex items-center justify-center space-x-3"
            >
              {loading ? <i className="fas fa-feather-pointed fa-spin"></i> : <i className="fas fa-map-marked-alt"></i>}
              <span>{loading ? 'Consulting the Guide...' : 'Plan Me The Trip'}</span>
            </button>
          </div>

          {/* Results */}
          <div className="lg:col-span-8">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-8 rounded-3xl font-medium animate-in slide-in-from-top-4 duration-500">
                <i className="fas fa-exclamation-circle mr-2"></i> {error}
              </div>
            )}

            {!itinerary && !loading && !error && (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] bg-slate-50/20 dark:bg-slate-900/20">
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full shadow-sm flex items-center justify-center mb-6 text-4xl">🗺️</div>
                <h3 className="text-2xl font-heritage text-slate-400 dark:text-slate-500">The Map of Bengal Awaits</h3>
                <p className="text-slate-400 dark:text-slate-500 mt-2 max-w-xs mx-auto italic font-light">Enter a town or choose a region on the left to start your legacy tour.</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 space-y-8">
                <div className="w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-5xl animate-bounce">✨</div>
                <div>
                  <h3 className="text-3xl font-heritage text-indigo-900 dark:text-indigo-300 mb-2">The Guide is Weaving...</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Connecting heritage dots across the map of your chosen destination.</p>
                </div>
              </div>
            )}

            {itinerary && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {/* Actions Bar */}
                <div className="flex justify-end no-print">
                  <button
                    onClick={handleDownloadPDF}
                    disabled={downloading}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center shadow-lg shadow-amber-200 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {downloading ? <i className="fas fa-spinner fa-spin mr-3"></i> : <i className="fas fa-file-pdf mr-3"></i>}
                    {downloading ? 'Preparing Professional PDF...' : 'Download as PDF'}
                  </button>
                </div>

                <div ref={itineraryRef} className="pdf-container space-y-12 bg-white dark:bg-slate-950 p-4 dark:p-0 rounded-[3.5rem] transition-colors duration-500">
                  {/* Visual Header */}
                  <div className="bg-indigo-950 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 p-12 text-8xl opacity-10 rotate-12">🕉️</div>
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-indigo-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">{prefs.members} Members</span>
                        <span className="bg-amber-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20 text-amber-300">{itinerary.bestSeason}</span>
                        <span className="bg-emerald-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 text-emerald-300">{prefs.pace} Pace</span>
                      </div>
                      <h3 className="text-5xl font-heritage mb-6 leading-tight tracking-tight">{itinerary.title}</h3>
                      <p className="text-indigo-200 italic font-light leading-relaxed mb-10 text-xl border-l-4 border-indigo-500/50 pl-8 whitespace-pre-line">
                        "{itinerary.culturalNote}"
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                          <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">Cost / Head</span>
                          <span className="text-2xl font-bold font-heritage">{itinerary.costPerHead}</span>
                        </div>
                        <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                          <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">Group Max</span>
                          <span className="text-2xl font-bold font-heritage">{itinerary.totalMaxCost}</span>
                        </div>
                        <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md col-span-2">
                          <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">Style Profile</span>
                          <span className="text-2xl font-bold font-heritage">{prefs.budget} • {prefs.month}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Budget Details Section */}
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                    <h4 className="text-2xl font-heritage text-slate-900 dark:text-white mb-6 flex items-center">
                      <i className="fas fa-receipt mr-3 text-indigo-600"></i> Budget Breakdown
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {Object.entries(itinerary.budgetBreakdown).map(([key, val]) => (
                        <div key={key} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                          <span className="block text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{key}</span>
                          <span className="text-sm font-bold text-indigo-900 dark:text-indigo-300">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Day-wise Chapters */}
                  <div className="space-y-16 py-4">
                    {itinerary.days.map((day, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex flex-col md:flex-row gap-10">
                          <div className="md:w-32 flex-shrink-0 text-center md:text-left">
                            <div className="inline-flex w-16 h-16 rounded-[1.75rem] bg-indigo-600 text-white items-center justify-center font-black text-2xl shadow-xl">
                              {day.day}
                            </div>
                            <div className="mt-4">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Day Unit</span>
                            </div>
                          </div>
                          <div className="flex-grow space-y-8">
                            {day.activities.map((act, aidx) => (
                              <div key={aidx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm border-l-8 border-l-indigo-600">
                                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full flex items-center">
                                    <i className="far fa-clock mr-2"></i> {act.time}
                                  </span>
                                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center">
                                    <i className="fas fa-location-dot mr-2 text-rose-400"></i> {act.location}
                                  </span>
                                </div>
                                <h5 className="text-2xl font-heritage text-slate-900 dark:text-white mb-4">{act.title}</h5>
                                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light">{act.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Extended Wanderlust / Nearby Suggestions */}
                  {itinerary.bonusSuggestions && (
                    <div className="bg-amber-50 rounded-[3.5rem] p-12 border-2 border-amber-100 shadow-xl relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-8">
                          <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-200">
                            <i className="fas fa-compass"></i>
                          </div>
                          <div>
                            <h4 className="text-3xl font-heritage text-amber-900">Extended Wanderlust</h4>
                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mt-1">If your journey extends beyond the planned days</p>
                          </div>
                        </div>
                        <div className="text-amber-800 text-xl leading-relaxed font-light italic bg-white/40 p-8 rounded-[2rem] border border-amber-200/50 backdrop-blur-sm shadow-inner">
                          <FormattedGuideText text={itinerary.bonusSuggestions} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Consultation Chat */}
                <div id="itinerary-chat" className="bg-slate-950 rounded-[3.5rem] shadow-2xl overflow-hidden mt-16 border border-white/5 no-print">
                  <div className="bg-white/5 p-10 border-b border-white/5 flex items-center space-x-6">
                    <div className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center text-white text-3xl shadow-lg">
                      <i className="fas fa-comment-dots"></i>
                    </div>
                    <div>
                      <h4 className="text-3xl font-heritage text-white">Consult The Guide</h4>
                      <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mt-1">Ask anything about logistics, food, or secrets of this plan</p>
                    </div>
                  </div>

                  <div className="h-[500px] overflow-y-auto p-10 space-y-8 bg-black/20 scrollbar-thin scrollbar-thumb-white/10">
                    {chatHistory.length === 0 && (
                      <div className="h-full flex flex-col items-center justify-center text-indigo-300/30 italic text-xl font-light text-center px-12">
                        <i className="fas fa-feather-pointed mb-6 text-4xl opacity-10"></i>
                        <p>"Ask me anything from the tour plan. I am here to help you navigate the magic of Bengal."</p>
                      </div>
                    )}
                    {chatHistory.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[90%] p-8 rounded-[2rem] text-lg leading-relaxed shadow-lg ${msg.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-white/5 text-indigo-50 rounded-tl-none border border-white/10 font-light italic shadow-indigo-500/5'
                          }`}>
                          {msg.role === 'guide' ? (
                            msg.text ? <FormattedGuideText text={msg.text} /> : <div className="flex space-x-2 animate-pulse py-4"><div className="w-2 h-2 bg-indigo-400 rounded-full"></div><div className="w-2 h-2 bg-indigo-400 rounded-full delay-150"></div><div className="w-2 h-2 bg-indigo-400 rounded-full delay-300"></div></div>
                          ) : (
                            msg.text
                          )}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>

                  <form onSubmit={handleChat} className="p-8 bg-white/5 flex space-x-4 border-t border-white/5">
                    <input
                      type="text"
                      value={chatQuestion}
                      onChange={(e) => setChatQuestion(e.target.value)}
                      placeholder="Ask your guide about this plan..."
                      className="flex-grow p-5 bg-white/5 rounded-[1.5rem] border-2 border-transparent focus:border-indigo-500 outline-none text-white placeholder:text-white/20 text-lg transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isChatting || !chatQuestion.trim()}
                      className="bg-indigo-600 text-white w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-xl hover:bg-white hover:text-indigo-950 disabled:opacity-50 transition-all active:scale-95 group"
                    >
                      <i className={`fas ${isChatting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-xl group-hover:rotate-12 transition-transform`}></i>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
