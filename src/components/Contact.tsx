import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formCopied, setFormCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Developer Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Ramesh,\n\n${formData.message}\n\nFrom: ${formData.name || 'Anonymous'}\nReply to: ${
        formData.email || 'Not provided'
      }`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${PERSONAL_INFO.email}\nSubject: ${
      formData.subject || 'Portfolio Discussion'
    }\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(draftText);
    setFormCopied(true);
    setTimeout(() => setFormCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let’s Connect & Collaborate
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            I am actively seeking software engineering internship opportunities, collaborative coding projects, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-cyan-500/30 bg-[#101729]/90 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                  Direct Inquiries
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Fast Response
                </span>
              </div>

              <div className="text-sm sm:text-base font-bold text-white break-all mb-4">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Email Client</span>
                </a>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-800 bg-[#101729]/70 hover:border-slate-700 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <GithubIcon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors mb-2" />
                  <div className="text-xs font-mono text-slate-400">GitHub Profile</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    ramesh-hampiholi-1819
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-cyan-400/80 mt-3 pt-2 border-t border-slate-800">
                  <span>Explore Repos</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-800 bg-[#101729]/70 hover:border-slate-700 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <LinkedinIcon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors mb-2" />
                  <div className="text-xs font-mono text-slate-400">LinkedIn Network</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Ramesh Hampiholi
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-blue-400/80 mt-3 pt-2 border-t border-slate-800">
                  <span>Connect Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100">Location:</strong> Gadag, Karnataka, India
                <p className="text-slate-400 mt-1">
                  Available for remote internship opportunities as well as hybrid / on-site roles across Karnataka and India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Drafter */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#101729]/90">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Draft a Message</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Direct mailto</span>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your note or opportunity details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                      title="Copy Draft to Clipboard"
                    >
                      {formCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Draft</span>
                        </>
                      )}
                    </button>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    Direct delivery to {PERSONAL_INFO.email}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
