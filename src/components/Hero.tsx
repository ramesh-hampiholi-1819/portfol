import { ArrowDown, FileText, Mail, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TerminalPreview } from './TerminalPreview';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-slate-300 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-cyan-300 font-semibold">Open for Internships & Projects</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 hidden sm:inline">BCA Student Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building{' '}
              <span className="text-gradient">Practical Solutions</span>{' '}
              Through Code.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-6">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Key Fact Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-8 font-mono">
              <div className="flex items-center gap-1.5 bg-[#101729]/70 border border-slate-800 px-3 py-1.5 rounded-lg">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Karnatak University Dharwad</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#101729]/70 border border-slate-800 px-3 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Gadag, Karnataka, India</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* View Projects CTA */}
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Download / View Resume Button */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <a
                  href={resumeUrl}
                  download="Ramesh_Hampiholi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-200 hover:text-cyan-300 font-medium text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="px-3 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-400 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/40 transition-colors"
                  title="Preview CV Summary"
                  aria-label="Preview CV Summary"
                >
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </button>
              </div>

              {/* Contact Me Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Profiles:
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:underline"
                aria-label="GitHub Profile (external link)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:underline"
                aria-label="LinkedIn Profile (external link)"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Graphic */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <TerminalPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
