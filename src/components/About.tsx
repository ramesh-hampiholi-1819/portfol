import React from 'react';
import { User, BookOpen, Target, Sparkles, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { ABOUT_INFO, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Problem Solving with a Student’s Curiosity
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            My academic foundation, development philosophy, and journey into software engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Natural Biography */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            {ABOUT_INFO.paragraphs.map((p, idx) => (
              <p key={idx} className="glass-card p-5 rounded-2xl border border-slate-800/80 bg-[#101729]/60">
                {p}
              </p>
            ))}

            {/* Quick Principles */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Guiding Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong>Code by Doing:</strong> Learning deeply by writing functioning applications rather than passive theory.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong>Clean Architecture:</strong> Writing organized, readable, and well-structured code.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong>Data Insights:</strong> Harnessing data analytics to make informed, evidence-based systems.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong>Continuous Growth:</strong> Actively staying curious and adopting modern software tools.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Verified Profile Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Facts Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-[#101729]/80">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                  <GraduationCap className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Degree & University</div>
                    <div className="text-sm font-semibold text-slate-200">{PERSONAL_INFO.degree}</div>
                    <div className="text-xs text-slate-400">{PERSONAL_INFO.university}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                  <MapPin className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Current Location</div>
                    <div className="text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</div>
                    <div className="text-xs text-slate-400">Karnataka, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                  <Target className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Primary Focus</div>
                    <div className="text-sm font-semibold text-slate-200">
                      Python Development, AI & Web Technologies
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified repository note */}
              <div className="mt-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-cyan-200 leading-relaxed">
                <p className="font-semibold text-cyan-300 mb-1">GitHub Verified Repository Count:</p>
                <p className="text-slate-300">
                  20+ public repositories documenting hands-on projects across Python, Web, C, and Data Science.
                </p>
              </div>
            </div>

            {/* Philosophy quote card */}
            <div className="p-5 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/20 via-slate-900/60 to-slate-900/40">
              <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                “My goal as a student developer is to build applications that are genuinely useful, reliable, and straightforward. Every project is a stepping stone toward solving more complex engineering challenges.”
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-violet-400 rounded-full" />
                <span className="text-xs font-mono text-violet-300 font-medium">Ramesh Hampiholi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
