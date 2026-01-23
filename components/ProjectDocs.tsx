
import React from 'react';

const ProjectDocs: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <style>{`
        @keyframes flowLine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .data-flow-connector {
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), #818cf8, rgba(99, 102, 241, 0.4), transparent);
          background-size: 200% 100%;
          animation: flowLine 3s linear infinite;
        }
        .node-float {
          animation: nodeFloat 4s ease-in-out infinite;
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="prose prose-indigo max-w-none">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-heritage text-indigo-950 dark:text-white mb-6 transition-colors duration-500">Technical Architecture & System Design</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed transition-colors duration-500">
            An Enterprise-Grade <span className="text-indigo-600 dark:text-indigo-400 font-bold">Hybrid Orchestration Model</span> bridging Java Resilience with TypeScript Precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-200 dark:border-orange-800 transition-colors">Backend: Java Spring Boot 3.x</span>
            <span className="bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-200 dark:border-blue-800 transition-colors">Frontend: React 19 + TypeScript</span>
            <span className="bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 dark:border-indigo-800 transition-colors">Intelligence: Gemini 3 Pro</span>
          </div>
        </header>

        {/* 1. Java Orchestration Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-200 dark:shadow-orange-950/40"><i className="fab fa-java"></i></div>
            <h2 className="text-3xl font-heritage text-indigo-900 dark:text-indigo-300 m-0 transition-colors">The Java Backend Ecosystem</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 leading-relaxed text-slate-700 dark:text-slate-300 relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
            <p className="text-lg mb-8 font-medium text-slate-800 dark:text-white transition-colors">
              The choice of <strong>Java Spring Boot</strong> as the core backend orchestrator is a strategic decision for high-availability, security, and enterprise scalability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-orange-700 dark:text-orange-400 font-black text-xs uppercase tracking-widest">Security & API Masking</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Java acts as a <strong>Secure Proxy Layer</strong>. Instead of exposing sensitive LLM API keys on the client-side, the Java controller encapsulates these as environment variables, providing a "Zero-Exposure" security posture.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-orange-700 dark:text-orange-400 font-black text-xs uppercase tracking-widest">Enterprise Middleware</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Utilizing <strong>Spring WebFlux</strong> or standard MVC controllers allows for complex prompt sanitization, rate-limiting, and the future integration of <strong>Spring AI</strong> for RAG (Retrieval-Augmented Generation) architectures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Technical Architecture (Reframed with Animation) */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950/40"><i className="fas fa-layer-group"></i></div>
            <h2 className="text-3xl font-heritage text-indigo-900 dark:text-indigo-300 m-0 transition-colors">3. Technical Architecture (Reframed)</h2>
          </div>

          <div className="bg-slate-950 p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10">
              {/* Architecture Diagram Flow */}
              <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12 md:gap-4 mb-20">

                {/* Frontend Node */}
                <div className="node-float flex flex-col items-center group">
                  <div className="w-48 h-48 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 flex flex-col items-center justify-center p-8 transition-all group-hover:border-indigo-500/50 group-hover:bg-white/10 shadow-2xl">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-display"></i>
                    </div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-indigo-300 mb-1">Frontend Layer</h5>
                    <p className="text-[10px] text-slate-500 font-mono">React 19 + TS</p>
                  </div>
                </div>

                {/* Connector 1 */}
                <div className="flex-grow h-1 md:h-12 flex items-center justify-center relative min-w-[60px]">
                  <div className="hidden md:block w-full h-[2px] data-flow-connector rounded-full"></div>
                  <div className="md:hidden w-[2px] h-20 data-flow-connector rounded-full"></div>
                  <div className="absolute hidden md:block right-0 text-indigo-400 translate-x-1/2">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </div>
                </div>

                {/* Backend Node */}
                <div className="node-float flex flex-col items-center group" style={{ animationDelay: '0.5s' }}>
                  <div className="w-56 h-56 bg-indigo-600 rounded-[3rem] border border-white/20 flex flex-col items-center justify-center p-8 transition-all group-hover:scale-105 shadow-[0_0_50px_rgba(79,70,229,0.3)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-white text-4xl mb-4 relative z-10">
                      <i className="fab fa-java"></i>
                    </div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-indigo-100 mb-1 relative z-10">Secure Java Hub</h5>
                    <p className="text-[10px] text-indigo-200 font-mono relative z-10">Spring Boot 3.x</p>
                  </div>
                </div>

                {/* Connector 2 */}
                <div className="flex-grow h-1 md:h-12 flex items-center justify-center relative min-w-[60px]">
                  <div className="hidden md:block w-full h-[2px] data-flow-connector rounded-full" style={{ animationDirection: 'reverse' }}></div>
                  <div className="md:hidden w-[2px] h-20 data-flow-connector rounded-full"></div>
                  <div className="absolute hidden md:block right-0 text-indigo-400 translate-x-1/2">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </div>
                </div>

                {/* AI Node */}
                <div className="node-float flex flex-col items-center group" style={{ animationDelay: '1s' }}>
                  <div className="w-48 h-48 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 flex flex-col items-center justify-center p-8 transition-all group-hover:border-rose-500/50 group-hover:bg-white/10 shadow-2xl">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-rose-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-300 mb-1">AI Intelligence</h5>
                    <p className="text-[10px] text-slate-500 font-mono">Gemini 3 Pro</p>
                  </div>
                </div>

              </div>

              {/* Matrix Console UI */}
              <div className="p-10 bg-black/60 rounded-[2.5rem] font-mono text-sm text-indigo-300 border border-white/10 shadow-inner backdrop-blur-md">
                <div className="flex items-center space-x-2 mb-8 border-b border-white/10 pb-6">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="ml-4 opacity-40 text-[10px] uppercase tracking-widest font-bold">System Data Flow Matrix v2.0</span>
                </div>
                <div className="space-y-4">
                  <div className="flex group">
                    <span className="text-emerald-500 mr-4 opacity-50">01</span>
                    <p className="group-hover:text-white transition-colors"><span className="text-indigo-500">INIT:</span> User clicks "Plan My Trip" -- Triggering TypeScript Event Bus</p>
                  </div>
                  <div className="flex group">
                    <span className="text-emerald-500 mr-4 opacity-50">02</span>
                    <p className="group-hover:text-white transition-colors"><span className="text-indigo-500">SEND:</span> Dispatching encrypted POST to <span className="text-orange-400">Java Controller /api/itinerary</span></p>
                  </div>
                  <div className="flex group">
                    <span className="text-emerald-500 mr-4 opacity-50">03</span>
                    <p className="group-hover:text-white transition-colors"><span className="text-indigo-500">HUB:</span> Java Spring interceptor validates JWT -- Injects <span className="text-rose-400">ENV_API_KEY</span></p>
                  </div>
                  <div className="flex group">
                    <span className="text-emerald-500 mr-4 opacity-50">04</span>
                    <p className="group-hover:text-white transition-colors"><span className="text-indigo-500">AI:</span> Gemini processes neural weights -- Returns <span className="text-blue-400">Strict-JSON Schema</span></p>
                  </div>
                  <div className="flex group">
                    <span className="text-emerald-500 mr-4 opacity-50">05</span>
                    <p className="group-hover:text-white transition-colors"><span className="text-indigo-500">RENDER:</span> React reconciler updates Virtual DOM with Type-Safe Objects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950/40"><i className="fas fa-graduation-cap"></i></div>
            <h2 className="text-3xl font-heritage text-indigo-900 dark:text-indigo-300 m-0 transition-colors">4. Value Proposition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-6">01</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Security Pattern</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Demonstrates the <strong>Backend For Frontend (BFF)</strong> pattern, a crucial security standard for production AI apps.</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-6">02</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Modern State Management</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Uses <strong>React 19 hooks</strong> and TypeScript to manage complex, non-deterministic AI data flows.</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-6">03</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cloud-Ready Design</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Architecture is fully containerizable via <strong>Docker</strong>, supporting microservices deployment models.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDocs;
