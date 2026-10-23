import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Star,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  FileSpreadsheet,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Identify featured project
  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const standardProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);

  // Filter logic
  const filteredProjects =
    selectedCategory === 'all'
      ? standardProjects
      : standardProjects.filter((p) => p.category === selectedCategory);

  const categories = ['all', 'Data & AI', 'Web Applications', 'Systems & Tools'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 / FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Software & Data Engineering
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected academic and self-directed applications backed by authentic GitHub repositories and working deployments.
          </p>
        </div>

        {/* Featured Project Showcase: Student Data Analysis System */}
        {featuredProject && (
          <div className="mb-14 rounded-3xl glass-card border border-cyan-500/30 bg-gradient-to-br from-[#101729]/95 via-[#0c1222] to-[#14122c] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-cyan-500/10">
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Project Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                    <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    Featured Project
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Streamlit Web App
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-cyan-300/90">
                  {featuredProject.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Problem & Key Features */}
                <div className="pt-2 pb-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Key Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {featuredProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-cyan-200 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-4">
                  {featuredProject.liveDemoUrl && (
                    <a
                      href={featuredProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Streamlit Live Demo</span>
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-medium text-xs sm:text-sm border border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}

                  <button
                    onClick={() => setModalProject(featuredProject)}
                    className="px-4 py-2.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    View Architectural Breakdown
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Dashboard Mockup */}
              <div className="lg:col-span-5 w-full">
                <div className="rounded-2xl glass-card border border-slate-700/80 bg-[#080B16]/90 p-5 shadow-inner">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-bold text-slate-200">
                        Streamlit Analytics Visualizer
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE ENGINE
                    </span>
                  </div>

                  {/* Simulated Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Mean Class Score</div>
                      <div className="text-xl font-bold text-cyan-300 mt-1">78.4%</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-3 h-3" /> +4.2% variance
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Records Processed</div>
                      <div className="text-xl font-bold text-violet-300 mt-1">500+</div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <FileSpreadsheet className="w-3 h-3 text-cyan-400" /> CSV Automated
                      </div>
                    </div>
                  </div>

                  {/* Simulated Chart Bars */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                      <span>Subject Performance Distribution</span>
                      <span className="text-cyan-400">Pandas Engine</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 mb-0.5 font-mono">
                          <span>Python Programming</span>
                          <span className="text-cyan-400 font-bold">88%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[88%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 mb-0.5 font-mono">
                          <span>Database Systems (SQL)</span>
                          <span className="text-violet-400 font-bold">82%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-[82%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 mb-0.5 font-mono">
                          <span>Data Structures & C</span>
                          <span className="text-blue-400 font-bold">79%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[79%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Pills for Project Grid */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat === 'all' ? 'All Other Projects' : cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-slate-400">
            Showing {filteredProjects.length} Verified Repositories
          </span>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
};
