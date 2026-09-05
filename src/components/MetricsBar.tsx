import React from 'react';
import { Film, Zap, Layers, Clock } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Film,
      value: "120K+",
      label: "Frames Programmatically Rendered",
      desc: "Via Creatomate JSON RenderScript",
      color: "text-cyber-cyan",
      borderColor: "border-cyber-cyan/20"
    },
    {
      icon: Zap,
      value: "720p HD",
      label: "Locked 30 FPS Deterministic Render",
      desc: "Optimized for speed & mobile viral retention",
      color: "text-cyber-emerald",
      borderColor: "border-cyber-emerald/20"
    },
    {
      icon: Layers,
      value: "4+ Core",
      label: "Multi-Model Orchestrations",
      desc: "HeyGen, ElevenLabs, Creatomate, Seedance",
      color: "text-cyber-violet",
      borderColor: "border-cyber-violet/20"
    },
    {
      icon: Clock,
      value: "< 45s",
      label: "Average Pipeline Latency",
      desc: "From ingestion to BytePlus TOS distribution",
      color: "text-cyber-amber",
      borderColor: "border-cyber-amber/20"
    }
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-obsidian-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className={`glass-card rounded-xl p-5 border ${item.borderColor} glass-card-hover relative overflow-hidden group`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${item.color}`}>
                  {item.value}
                </span>
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-slate-100 mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
