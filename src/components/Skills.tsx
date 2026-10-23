import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Compass,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-violet-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories =
    selectedFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Languages, Frameworks & Explorations
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent overview of technologies used in my projects alongside emerging areas under active exploration.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-8 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span>Core / Working Knowledge</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 border border-violet-300" />
            <span>Active Study / Exploring</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const isExploringCat = category.id === 'exploring';
            return (
              <div
                key={category.id}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isExploringCat
                    ? 'border-violet-500/30 bg-gradient-to-br from-violet-950/20 via-[#101729]/80 to-[#101729]/90'
                    : 'border-slate-800 bg-[#101729]/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
                      {getCategoryIcon(category.icon)}
                    </div>
                    {isExploringCat && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-violet-300 bg-violet-950/40 border border-violet-500/30 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-violet-400" />
                        In Progress
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">{category.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.isExploring
                          ? 'bg-violet-500/10 text-violet-200 border border-violet-500/30 hover:border-violet-400'
                          : 'bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.isExploring ? 'bg-violet-400' : 'bg-cyan-400'
                        }`}
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
