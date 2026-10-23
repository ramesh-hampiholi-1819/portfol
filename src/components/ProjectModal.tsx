import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-slate-700 bg-[#0d1322] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Badge & Title */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-cyan-400/90 mt-1">{project.tagline}</p>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">
            Project Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-[#101729]/80 p-4 rounded-xl border border-slate-800">
            {project.description}
          </p>
        </div>

        {/* Problem Solved */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">
            Problem Addressed
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-[#101729]/80 p-4 rounded-xl border border-slate-800">
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">
            Core Functionality & Modules
          </h4>
          <ul className="space-y-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80"
              >
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">
            Technologies Applied
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-200 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
