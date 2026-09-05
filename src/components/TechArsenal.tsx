import React, { useState } from 'react';
import { Video, Mic, Server, Cpu } from 'lucide-react';

export const TechArsenal: React.FC = () => {
  const categories = [
    {
      id: 'ai-video',
      label: 'AI Video & Avatar Engines',
      icon: Video,
      color: 'text-cyber-cyan',
      skills: [
        { name: 'HeyGen v2 API', desc: 'Avatar generation with strict #00FF00 chroma green background' },
        { name: 'Creatomate JSON Engine', desc: 'Locked 720p HD @ 30 FPS RenderScript with kinetic subtitle overlays' },
        { name: 'ByteDance Seedance 2.5', desc: 'High-fidelity cinematic text-to-video / image-to-video pipelines' },
        { name: 'Google Veo 3 / KIE AI', desc: 'Next-generation video synthesis API integration' },
        { name: 'Seedream / GPT-Image', desc: 'Commercial asset generation for video storyboard layouts' }
      ]
    },
    {
      id: 'audio-vision',
      label: 'Audio, Vision & Reasoning',
      icon: Mic,
      color: 'text-cyber-emerald',
      skills: [
        { name: 'ElevenLabs S2.1 Pro', desc: 'Voice cloning & emotional multilingual voiceover synthesis' },
        { name: 'Gemini 2.5 Pro Vision', desc: 'Multimodal scene understanding & dopamine viral hook detection' },
        { name: 'OpenAI GPT-4o', desc: 'Structured JSON narrative scripting & automated hook copywriting' },
        { name: 'Whisper STT / Word Timestamps', desc: 'Millisecond-accurate speech-to-text for kinetic captions' }
      ]
    },
    {
      id: 'backend',
      label: 'Async Backend & Pipelines',
      icon: Cpu,
      color: 'text-cyber-violet',
      skills: [
        { name: 'FastAPI (Python 3.12)', desc: 'Asynchronous high-concurrency microservices architecture' },
        { name: 'Redis & Celery Queue', desc: 'Distributed task queuing with watchdog zombie reconciliation' },
        { name: 'PostgreSQL & SQLAlchemy 2.0', desc: 'ACID transaction isolation & financial idempotency ledgers' },
        { name: 'BytePlus TOS (Object Storage)', desc: 'Large-scale video storage with global CDN edge streaming' },
        { name: 'FFmpeg & yt-dlp', desc: 'Programmatic media demuxing, audio pitch adjustment & transcoding' }
      ]
    },
    {
      id: 'devops',
      label: 'Cloud & Autonomous DevOps',
      icon: Server,
      color: 'text-cyber-amber',
      skills: [
        { name: 'Coolify Self-Hosted PaaS', desc: 'Git webhook auto-deployments, environment isolation & health checks' },
        { name: 'Docker & Multi-Stage Builds', desc: 'Hardened minimal Alpine containers (<30MB footprint)' },
        { name: 'Traefik Reverse Proxy', desc: 'Automated Let’s Encrypt SSL certificates & dynamic routing' },
        { name: 'Cloudflare Zero-Trust DNS', desc: 'Scoped Bearer Token automated DNS record provisioning' },
        { name: 'Linux Hardening (Ubuntu 24.04)', desc: 'UFW, Fail2ban, and 1.9GB Swap memory optimization' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="arsenal" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-violet text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>PRODUCTION-READY TECH ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Tech Stack & Model AI
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Kombinasi model AI termutakhir, engine rendering video terprogram, dan infrastruktur backend berdaya tahan tinggi yang saya gunakan dalam lingkungan kerja nyata.
        </p>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono transition-all duration-200 ${
                isActive
                  ? 'bg-slate-800 text-white border-cyber-cyan shadow-lg shadow-cyber-cyan/10'
                  : 'bg-obsidian-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <cat.icon className={`w-4 h-4 ${isActive ? cat.color : 'text-slate-400'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Cards Display for Active Category */}
      {categories.map((cat) => {
        if (cat.id !== activeTab) return null;
        return (
          <div key={cat.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.skills.map((skill, sIdx) => (
              <div 
                key={sIdx}
                className="glass-card rounded-xl p-5 border border-slate-800/90 glass-card-hover group"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></div>
                  <h4 className="font-mono font-bold text-sm text-white group-hover:text-cyber-cyan transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};
