import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, MapPin, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PERSONAL_INFO, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-slate-700 bg-[#0d1322] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close resume preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h3 id="resume-modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
                Ramesh Hampiholi — Curriculum Vitae
              </h3>
            </div>
            <p className="text-xs font-mono text-cyan-300">
              {PERSONAL_INFO.professionalTitle}
            </p>
          </div>

          <a
            href={resumeUrl}
            download="Ramesh_Hampiholi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Factual CV Content Preview */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Contact Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>github.com/ramesh-hampiholi-1819</span>
            </div>
          </div>

          {/* Education Block */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h4>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-[#101729] border border-slate-800">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-bold text-white text-xs sm:text-sm">{edu.degree}</span>
                    <span className="text-[11px] font-mono text-cyan-300">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{edu.institution}</div>
                  <div className="text-xs text-slate-400 mt-1">{edu.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Block */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Technical Skill Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-[#101729] border border-slate-800">
                  <div className="text-xs font-bold text-slate-200 mb-1">{cat.title}</div>
                  <div className="text-xs font-mono text-slate-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Repository Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Verified Project Highlights
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Student Data Analysis:</strong> Python, Streamlit, Pandas dashboard with live deployment at student-data-analysis-v2.streamlit.app
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Online Bus Pass System:</strong> Full web-based transit pass issuance and administrative record management.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>ACMS / UCMS Academic Portal:</strong> Role-based college management architecture.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Crack The Code:</strong> Python logic puzzle engine & algorithmic problem solving platform.
                </span>
              </li>
            </ul>
          </div>

          {/* PDF Source & Replacement Note */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-400">
            <span className="text-cyan-300 font-bold">PDF Location:</span> The file is linked to{' '}
            <code className="text-slate-200">public/resume.pdf</code>. To update with your newest PDF export, simply replace that file.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>Open raw PDF file</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
