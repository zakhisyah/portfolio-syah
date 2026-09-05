import React, { useState, useEffect } from 'react';
import { Github, Cpu, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan group-hover:border-cyber-cyan group-hover:scale-105 transition-all">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono font-bold text-sm tracking-tight text-white block">
              ZAKHI<span className="text-cyber-cyan">.DEV</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">AI AUTOMATION</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-slate-300">
          <a href="#pipeline" className="hover:text-cyber-cyan transition-colors">PIPELINE_EXPLORER</a>
          <a href="#systems" className="hover:text-cyber-cyan transition-colors">SYSTEMS</a>
          <a href="#arsenal" className="hover:text-cyber-cyan transition-colors">AI_ARSENAL</a>
          <a href="#terminal" className="hover:text-cyber-cyan transition-colors">TERMINAL</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>MECHALENS.AI LIVE</span>
          </div>
          
          <a 
            href="https://github.com/zakhisyah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-mono text-slate-200 transition-all hover:border-cyber-cyan/50"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">zakhisyah</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </nav>
  );
};
