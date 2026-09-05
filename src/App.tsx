import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { PipelineExplorer } from './components/PipelineExplorer';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechArsenal } from './components/TechArsenal';
import { TerminalContact } from './components/TerminalContact';
import { Cpu } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col justify-between selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <MetricsBar />
        <PipelineExplorer />
        <ProjectsShowcase />
        <TechArsenal />
        <TerminalContact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-obsidian-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Cpu className="w-4 h-4 text-cyber-cyan" />
            <span>Ahmad Mützakhisyah (Zakhi) • AI Automation Engineer</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span>Production Core @ MechaLens.ai</span>
            <span>•</span>
            <a href="https://github.com/zakhisyah" target="_blank" rel="noreferrer" className="hover:text-cyber-cyan transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="mailto:zakhi.boys@gmail.com" className="hover:text-cyber-cyan transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
