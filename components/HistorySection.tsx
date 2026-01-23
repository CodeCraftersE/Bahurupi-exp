
import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 space-y-24 overflow-hidden transition-all duration-700">
      <style>{`
        @keyframes inkBleed {
          0% { color: #1e1b4b; filter: blur(0px); }
          50% { color: #4338ca; filter: blur(0.5px); }
          100% { color: #1e1b4b; filter: blur(0px); }
        }
        @keyframes inkBleedDark {
          0% { color: #e2e8f0; filter: blur(0px); }
          50% { color: #818cf8; filter: blur(0.5px); }
          100% { color: #e2e8f0; filter: blur(0px); }
        }
        .ink-text {
          animation: inkBleed 8s ease-in-out infinite;
        }
        .dark .ink-text {
          animation: inkBleedDark 8s ease-in-out infinite;
        }
        @keyframes parchmentPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(217, 119, 6, 0.05); border-color: rgba(217, 119, 6, 0.1); }
          50% { box-shadow: 0 0 40px rgba(217, 119, 6, 0.15); border-color: rgba(217, 119, 6, 0.3); }
        }
        .parchment-card {
          animation: parchmentPulse 6s ease-in-out infinite;
          background: linear-gradient(135deg, #ffffff 0%, #fffdf5 100%);
        }
        .dark .parchment-card {
           background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }
        .ancient-float {
          animation: ancientFloat 10s ease-in-out infinite;
        }
        @keyframes ancientFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(0.5deg); }
          66% { transform: translateY(-5px) rotate(-0.5deg); }
        }
        .sepia-vignette {
          position: relative;
        }
        .sepia-vignette::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.3);
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="text-center space-y-8 scroll-reveal">
        <h2 className="text-7xl font-heritage text-indigo-950 dark:text-white ink-text tracking-tight transition-colors duration-500">The Chronicle of Bengal</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed italic font-light transition-colors duration-500">
          "Where the ancient roots of Gangaridai meet the modern spirit of Biswa Bangla."
        </p>
      </section>

      {/* Ancient Map Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group ancient-float">
          <div className="absolute inset-0 bg-amber-900/5 dark:bg-amber-100/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-1000"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl transition-all duration-1000 group-hover:scale-[1.03] bg-amber-50 dark:bg-slate-900 sepia-vignette">
            <img
              src="/assets/history/ancient_bengal.jpg"
              alt="Ancient Bengal Map"
              className="w-full h-auto mix-blend-multiply dark:mix-blend-screen opacity-90 transition-all duration-500"
              style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.95)' }}
            />
          </div>
          <div className="absolute -bottom-10 -right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl z-20 border border-amber-100 dark:border-amber-900/30 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-700">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-3">The Ancient Janapadas</span>
            <p className="text-sm font-heritage text-slate-800 dark:text-slate-200 leading-relaxed">Visualizing the ancient subdivisions: <span className="text-indigo-600 dark:text-indigo-400">Pundravardhana</span>, <span className="text-indigo-600 dark:text-indigo-400">Vanga</span>, <span className="text-indigo-600 dark:text-indigo-400">Samatata</span>, and <span className="text-indigo-600 dark:text-indigo-400">Suhma</span>.</p>
          </div>
        </div>
        <div className="space-y-10">
          <h3 className="text-5xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">Ancient Roots & Empires</h3>
          <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
            <p className="border-l-4 border-amber-200 dark:border-amber-900/50 pl-8">
              The history of Bengal traces back to the powerful kingdom of <span className="font-bold text-slate-900 dark:text-white">Gangaridai</span>, mentioned by Ptolemy. Long before modern borders, the land was a tapestry of riverine states.
            </p>
            <p className="pl-9">
              From the Buddhist learning centers of the <span className="font-bold text-slate-900 dark:text-white">Pala Empire</span> to the architectural finesse of the <span className="font-bold text-slate-900 dark:text-white">Sena Dynasty</span>, Bengal has been a beacon of synthesis.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Treasures Section */}
      <section className="space-y-16 py-12">
        <div className="text-center space-y-6">
          <span className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-amber-100 dark:border-amber-900/50 shadow-sm inline-block">Heritage Treasures</span>
          <h3 className="text-6xl font-heritage text-slate-900 dark:text-white transition-colors duration-500">ঐতিহ্যের মণিমাণিক্য</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light italic transition-colors duration-500">Beyond the popular paths lie architectural marvels that define our royal and spiritual legacy.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hazarduari */}
          <div className="parchment-card group rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700">
            <div className="md:w-1/2 h-96 relative overflow-hidden">
              <img src="/assets/history/hazarduari.jpg" alt="Hazarduari" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-indigo-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">Central Bengal</span>
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
              <h4 className="text-3xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">হাজারদুয়ারি প্রাসাদ</h4>
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em]">The seat of Nawabs</p>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">Built in 1837 by Duncan Macleod, this palace of 1000 doors (900 of which are false) remains the crowning jewel of Murshidabad's history.</p>
            </div>
          </div>

          {/* Cooch Behar */}
          <div className="parchment-card group rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700" style={{ animationDelay: '0.2s' }}>
            <div className="md:w-1/2 h-96 relative overflow-hidden">
              <img src="/assets/history/cooch-behar-palace.jpg" alt="Cooch Behar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-indigo-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">North Bengal</span>
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
              <h4 className="text-3xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">কোচবিহার রাজপ্রাসাদ</h4>
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em]">Royal Koch Majesty</p>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">Modeled after Buckingham Palace, this brick-built marvel represents the grandeur of Maharaja Nripendra Narayan's reign.</p>
            </div>
          </div>

          {/* Bishnupur */}
          <div className="parchment-card group rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700" style={{ animationDelay: '0.3s' }}>
            <div className="md:w-1/2 h-96 relative overflow-hidden">
              <img src="/assets/history/bishnupur.jpg" alt="Bishnupur" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-indigo-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">Western Bengal</span>
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
              <h4 className="text-3xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">বিষ্ণুপুর মন্দির</h4>
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em]">Terracotta Artistry</p>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">Famed for terracotta temples like Rasmancha and Jorebangla, built by Malla kings using burnt clay to tell epic tales.</p>
            </div>
          </div>

          {/* Victoria Memorial */}
          <div className="parchment-card group rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700" style={{ animationDelay: '0.4s' }}>
            <div className="md:w-1/2 h-96 relative overflow-hidden">
              <img src="/assets/history/victoria-meorial-hall.jpg" alt="Victoria Memorial" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-indigo-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">Kolkata</span>
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
              <h4 className="text-3xl font-heritage text-indigo-950 dark:text-white transition-colors duration-500">ভিক্টোরিয়া মেমোরিয়াল</h4>
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em]">Imperial Architecture</p>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">Built with Makrana marble, this iconic monument houses a vast collection of artifacts from the colonial era and Bengal's history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eminent Personalities Section */}
      <section className="space-y-16">
        <div className="text-center space-y-6">
          <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-indigo-100 dark:border-indigo-800 shadow-sm inline-block">The Bengal Renaissance</span>
          <h3 className="text-6xl font-heritage text-slate-900 dark:text-white transition-colors duration-500">মনিষীদের কথা</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light italic transition-colors duration-500">The polymaths, poets, and visionaries who reshaped the modern consciousness of the world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              name: "Rabindranath Tagore",
              bengali: "রবীন্দ্রনাথ ঠাকুর",
              tag: "The Bard of Bengal",
              desc: "Nobel laureate and polymath who reshaped literature, music, and art. The composer of national anthems.",
              img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=600",
              delay: '0.1s'
            },
            {
              name: "Swami Vivekananda",
              bengali: "স্বামী বিবেকানন্দ",
              tag: "Spiritual Giant",
              desc: "Represented India at the 1893 Parliament of Religions, bringing Vedanta and Yoga to the Western world.",
              img: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&q=80&w=600",
              delay: '0.2s'
            },
            {
              name: "Ishwar Chandra Vidyasagar",
              bengali: "ঈশ্বরচন্দ্র বিদ্যাসাগর",
              tag: "Social Reformer",
              desc: "A key figure of the Bengal Renaissance, tireless advocate for widow remarriage and education.",
              img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600",
              delay: '0.3s'
            },
            {
              name: "Satyajit Ray",
              bengali: "সত্যজিৎ রায়",
              tag: "Maestro of Cinema",
              desc: "An Academy Award-winning filmmaker who defined the aesthetics of humanistic world cinema.",
              img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
              delay: '0.4s'
            },
            {
              name: "Jagadish Chandra Bose",
              bengali: "জগদীশচন্দ্র বসু",
              tag: "Pioneer Scientist",
              desc: "Father of radio science and plant physiology. A polymath who proved plants have feelings.",
              img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600",
              delay: '0.5s'
            },
            {
              name: "Kazi Nazrul Islam",
              bengali: "কাজী নজরুল ইসলাম",
              tag: "The Rebel Poet",
              desc: "The 'Bidrohi' poet whose works inspired resistance against oppression and colonial rule.",
              img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600",
              delay: '0.6s'
            },
            {
              name: "Raja Ram Mohan Roy",
              bengali: "রাজা রামমোহন রায়",
              tag: "Father of Modern India",
              desc: "The pioneering reformer who founded Brahmo Samaj and fought against Sati and social ills.",
              img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=600",
              delay: '0.7s'
            },
            {
              name: "Amartya Sen",
              bengali: "অমর্ত্য সেন",
              tag: "Nobel Economist",
              desc: "Global thinker in welfare economics and social choice theory, bringing ethics to economics.",
              img: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?auto=format&fit=crop&q=80&w=600",
              delay: '0.8s'
            }
          ].map((person, idx) => {
            const imgMapping: Record<string, string> = {
              "Rabindranath Tagore": "/assets/history/Rabindranath-Tagore.jpg",
              "Swami Vivekananda": "/assets/history/swami-vivekananda-1.jpg",
              "Ishwar Chandra Vidyasagar": "/assets/history/ishwar-chandra-vidyasagar.jpg",
              "Satyajit Ray": "/assets/history/Satyajit-ray.jpg",
              "Jagadish Chandra Bose": "/assets/history/Jagadis_C._Bose.jpg",
              "Kazi Nazrul Islam": "/assets/history/kazi-nazrul-islam.jpg",
              "Raja Ram Mohan Roy": "/assets/history/raja-rammohan-roy.jpg",
              "Amartya Sen": "/assets/history/amartyo-sen.jpg"
            };
            const personImg = imgMapping[person.name] || person.img;

            return (
              <div key={idx} className="group parchment-card rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-700" style={{ animationDelay: person.delay }}>
                <div className="h-72 relative overflow-hidden sepia-vignette">
                  <img src={personImg} alt={person.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-300">{person.tag}</span>
                  </div>
                </div>
                <div className="p-10 space-y-4">
                  <h4 className="text-2xl font-heritage text-slate-900 dark:text-white leading-tight transition-colors duration-500">{person.name}</h4>
                  <p className="text-base font-bold text-indigo-500 dark:text-indigo-400 font-heritage">{person.bengali}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{person.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Freedom Fighters Section */}
      <section className="bg-slate-950 rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-red-600/10 transition-colors duration-1000"></div>
        <div className="relative z-10 space-y-20">
          <div className="text-center space-y-6">
            <span className="bg-white/5 text-red-400 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-white/10 backdrop-blur-md">Bravehearts of Bengal</span>
            <h3 className="text-6xl font-heritage">বিপ্লবীদের বীরগাথা</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light italic">Remembering the heroes who defied empires to secure our future.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                name: "Netaji Subhas Chandra Bose",
                bengali: "নেতাজি সুভাষচন্দ্র বসু",
                title: "Hero of the INA",
                desc: "The 'Delhi Chalo' call inspired millions. He led the Azad Hind Fauj with indomitable courage against British rule.",
                img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Khudiram Bose",
                bengali: "ক্ষুদিরাম বসু",
                title: "Youngest Revolutionary",
                desc: "Face of the Agni Yuga. He embraced the gallows at just 18 with a smile and 'Vande Mataram' on his lips.",
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Matangini Hazra",
                bengali: "মাতঙ্গিনী হাজরা",
                title: "Gandhi Buri",
                desc: "A veteran of the Quit India movement who marched till her last breath holding the Indian tricolor.",
                img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Masterda Surya Sen",
                bengali: "মাস্টারদা সূর্য সেন",
                title: "Chittagong Armoury Raid Leader",
                desc: "The mastermind behind the daring raid that shook the British administration in Bengal.",
                img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"
              }
            ].map((hero, idx) => {
              const heroImgMapping: Record<string, string> = {
                "Netaji Subhas Chandra Bose": "/assets/history/Subhas_Chandra_Bose.jpg",
                "Khudiram Bose": "/assets/history/khudiram-bose.jpg",
                "Matangini Hazra": "/assets/history/Matangini-Hazra.jpg",
                "Masterda Surya Sen": "/assets/history/Materda-Surya-Sen.jpg"
              };
              const heroImg = heroImgMapping[hero.name] || hero.img;

              return (
                <div key={idx} className="flex flex-col md:flex-row gap-10 bg-white/5 p-12 rounded-[3.5rem] border border-white/5 hover:bg-white/10 transition-all duration-700 group/hero relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-hover/hero:via-red-600/5 transition-all duration-1000"></div>
                  <div className="w-full md:w-56 h-56 rounded-[2.5rem] overflow-hidden flex-shrink-0 border-4 border-white/10 shadow-2xl relative z-10 ancient-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                    <img src={heroImg} alt={hero.name} className="w-full h-full object-cover grayscale opacity-60 group-hover/hero:grayscale-0 group-hover/hero:opacity-100 transition-all duration-1000" />
                  </div>
                  <div className="space-y-6 relative z-10 flex flex-col justify-center">
                    <div className="flex flex-col">
                      <h4 className="text-3xl font-heritage mb-2">{hero.name}</h4>
                      <span className="text-red-400 font-heritage text-xl opacity-80">{hero.bengali}</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{hero.title}</p>
                    <p className="text-base text-slate-300 leading-relaxed font-light">{hero.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cultural Grid Section */}
      <section className="bg-indigo-950 text-white rounded-[4rem] p-16 md:p-24 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10"></div>
        <div className="relative z-10 space-y-20">
          <div className="text-center space-y-6">
            <h3 className="text-6xl font-heritage mb-4 ink-text">আমাদের সংস্কৃতি</h3>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="text-2xl font-light text-indigo-200 italic">"The sweetness of our language is found in our places and people."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { label: "Highlands", name: "দার্জিলিং", desc: "Tea gardens, toy trains, and the mist of the Himalayas." },
              { label: "Renaissance", name: "শান্তিনিকেতন", desc: "The open-air university of Tagore and the soul of red soil." },
              { label: "Mystic", name: "সুন্দরবন", desc: "The wild realm of mangroves and the Royal Bengal Tiger." },
              { label: "Crafts", name: "বিষ্ণুপুর", desc: "A town where every temple brick tells a thousand-year story." },
              { label: "Spiritual", name: "মায়াপুর", desc: "Confluence of rivers and the spiritual center of the world." },
              { label: "City of Joy", name: "কলকাতা", desc: "The cultural heartbeat of India where history lives in every lane." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/15 transition-all duration-700 group/card scroll-reveal" style={{ animationDelay: `${idx * 0.2}s` }}>
                <span className="block text-[10px] uppercase font-black tracking-[0.3em] text-indigo-400 mb-6">{item.label}</span>
                <span className="text-3xl font-heritage block mb-6">{item.name}</span>
                <p className="text-base text-indigo-100/70 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistorySection;
