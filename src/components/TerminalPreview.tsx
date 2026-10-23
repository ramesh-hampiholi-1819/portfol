import React, { useState } from 'react';
import { Terminal, Play, Check, Copy, Code, Sparkles } from 'lucide-react';

interface TabContent {
  filename: string;
  language: string;
  code: string[];
  output: string[];
}

const TABS: TabContent[] = [
  {
    filename: 'ramesh.py',
    language: 'Python',
    code: [
      '# Ramesh Hampiholi - Profile & Focus',
      'class Developer:',
      '    def __init__(self):',
      '        self.name = "Ramesh Hampiholi"',
      '        self.education = "BCA @ Karnatak University Dharwad"',
      '        self.location = "Gadag, Karnataka, India"',
      '        self.focus_areas = [',
      '            "Python Application Development",',
      '            "Artificial Intelligence & ML",',
      '            "Interactive Data Science (Streamlit)",',
      '            "Modern Full-Stack Engineering"',
      '        ]',
      '        self.status = "Available for Internships & Projects"',
      '',
      '    def build_solution(self, problem):',
      '        return f"Practical solution for {problem} crafted with clean code!"',
      '',
      'dev = Developer()',
      'print(dev.build_solution("Student Analytics"))',
    ],
    output: [
      '$ python ramesh.py',
      '[OK] Initializing Developer profile...',
      '[OK] Focus: Python | AI | Data Science | Web',
      '[RESULT] Practical solution for Student Analytics crafted with clean code!',
      '>>> Status: Ready to collaborate and build.',
    ],
  },
  {
    filename: 'data_pipeline.py',
    language: 'Python / Pandas',
    code: [
      'import pandas as pd',
      'import streamlit as st',
      '',
      '# Student Data Analysis Pipeline',
      'def analyze_cohort(csv_path):',
      '    df = pd.read_csv(csv_path)',
      '    stats = {',
      '        "total_students": len(df),',
      '        "pass_rate": f"{(df[\'score\'] >= 40).mean():.1%}",',
      '        "top_subjects": df.groupby(\'subject\')[\'score\'].mean()',
      '    }',
      '    st.metric("Total Cohort", stats["total_students"])',
      '    st.line_chart(df[\'score\'].rolling(5).mean())',
      '    return stats',
    ],
    output: [
      '$ streamlit run data_pipeline.py',
      'Connecting to local Streamlit engine...',
      'Dataset loaded: 500 records parsed',
      'Pass Rate: 92.4% | Mean Variance: 4.8',
      'Interactive visual dashboard available at localhost:8501',
    ],
  },
  {
    filename: 'tech_stack.sh',
    language: 'Bash',
    code: [
      '#!/bin/bash',
      '# Inspect verified development environment',
      'echo "Checking core runtime environments..."',
      'python3 --version  # Python 3.12+',
      'node --version     # Node.js LTS',
      'git --version      # Git version control',
      'echo "Databases: MySQL, MongoDB, Firebase"',
      'echo "Workflow: 20+ Repositories on GitHub"',
      'echo "All systems operational!"',
    ],
    output: [
      '$ bash tech_stack.sh',
      'Checking core runtime environments...',
      'Python 3.12.x [Active]',
      'Node.js & TypeScript [Active]',
      'Git Version Control [Connected]',
      '20+ Repositories synced with GitHub',
      'All systems operational!',
    ],
  },
];

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [copied, setCopied] = useState(false);

  const currentTab = TABS[activeTab];

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden glass-card border border-slate-700/70 shadow-2xl shadow-cyan-500/10">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-slate-800/90 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>ramesh-hampiholi@workspace</span>
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
            title="Copy Code"
            aria-label="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors focus:outline-none"
            title="Simulate Execution"
            aria-label="Run Code"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>Run</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center bg-[#0a0f1d] border-b border-slate-800/80 px-2 overflow-x-auto scrollbar-none">
        {TABS.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={tab.filename}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono transition-colors border-b-2 whitespace-nowrap ${
                isActive
                  ? 'border-cyan-400 text-cyan-300 bg-slate-900/60 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
              }`}
            >
              <Code className="w-3 h-3 text-cyan-400/80" />
              <span>{tab.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 bg-[#080B16]/95 font-mono text-xs overflow-x-auto max-h-[300px]">
        <table className="w-full text-left border-collapse">
          <tbody>
            {currentTab.code.map((line, i) => {
              // Simple syntax coloring based on keywords
              const isComment = line.trim().startsWith('#') || line.trim().startsWith('//');
              const isDef = line.includes('def ') || line.includes('class ') || line.includes('return ');
              const isString = line.includes('"') || line.includes("'");

              return (
                <tr key={i} className="hover:bg-slate-900/40 group">
                  <td className="w-8 pr-3 text-right text-slate-600 select-none group-hover:text-slate-500">
                    {i + 1}
                  </td>
                  <td className="pl-2 whitespace-pre text-slate-200">
                    {isComment ? (
                      <span className="text-slate-500 italic">{line}</span>
                    ) : isDef ? (
                      <span className="text-cyan-300">{line}</span>
                    ) : isString ? (
                      <span className="text-violet-300">{line}</span>
                    ) : (
                      line
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Terminal Output Panel */}
      {showOutput && (
        <div className="border-t border-slate-800 bg-[#060810] p-3.5 font-mono text-[11px] text-slate-300">
          <div className="flex items-center justify-between text-slate-500 mb-1.5 pb-1 border-b border-slate-800/60">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Sparkles className="w-3 h-3" />
              Terminal Console Output
            </span>
            <span className="text-[10px]">exit code 0</span>
          </div>
          <div className="space-y-0.5">
            {currentTab.output.map((outLine, idx) => (
              <div
                key={idx}
                className={
                  outLine.startsWith('$')
                    ? 'text-cyan-400 font-bold'
                    : outLine.startsWith('[OK]')
                    ? 'text-emerald-400'
                    : outLine.startsWith('[RESULT]')
                    ? 'text-violet-300 font-semibold'
                    : 'text-slate-400'
                }
              >
                {outLine}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
