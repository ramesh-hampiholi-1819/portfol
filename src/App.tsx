import React, { useState } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Learning } from './components/Learning';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B16] text-[#F8FAFC] selection:bg-cyan-500/25 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Subtle ambient animated particle canvas */}
      <BackgroundParticles />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
