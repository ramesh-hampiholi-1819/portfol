import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl border border-slate-800/90 bg-[#101729]/80 p-6 flex flex-col justify-between group">
      <div>
        {/* Card Header & Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            {project.category}
          </span>
          {project.liveDemoUrl && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Demo
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-cyan-400/90 mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features Quick Preview */}
        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
          {project.keyFeatures.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech Stack & Actions */}
      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-slate-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold transition-colors"
                title="Open Live Web Application"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-medium transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors p-1 focus:outline-none"
            aria-label={`View details for ${project.title}`}
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
