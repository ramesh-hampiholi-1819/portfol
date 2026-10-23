import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04 / ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Academic Timeline
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            My formal educational milestones providing foundational computer science and quantitative problem-solving rigor.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080B16] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

              {/* Education Card */}
              <div className="glass-card rounded-2xl border border-slate-800/90 bg-[#101729]/80 p-6 sm:p-7 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-cyan-400/90 mb-4">
                  {edu.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Focus & Rigor:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
