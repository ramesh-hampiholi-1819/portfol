import { Compass, BookMarked, Sparkles, Brain, Cpu, Database, Layout, Binary } from 'lucide-react';
import { CURRENT_LEARNING } from '../data/portfolioData';

export const Learning: React.FC = () => {
  const getIconForLearning = (id: string) => {
    switch (id) {
      case 'py-data':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'ml-fundamentals':
        return <Brain className="w-5 h-5 text-violet-400" />;
      case 'ai-apps':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'dsa':
        return <Binary className="w-5 h-5 text-amber-400" />;
      default:
        return <BookMarked className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="learning" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>05 / LEARNING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Current Learning & Exploration Areas
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Technologies and disciplines I am actively studying through practical coding, coursework, and personal experiments.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENT_LEARNING.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-slate-800/90 bg-[#101729]/70 p-6 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getIconForLearning(item.id)}
                  </div>
                  <span className="text-[11px] font-mono text-violet-300 bg-violet-950/40 border border-violet-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-violet-400" />
                    Active Focus
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-3">{item.focus}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
