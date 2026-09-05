import React from 'react';
import { ArrowRight, Bot, Sparkles, Terminal, Play, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyber-emerald/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text & CTA */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-6 shadow-inner">
              <Bot className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>AI AUTOMATION ENGINEER</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">MECHALENS.AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Autonomous <br className="hidden sm:block" />
              <span className="gradient-text-cyan">Media & Video Pipelines</span> <br />
              Engineered at Scale.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Hai, saya <span className="text-white font-semibold">Ahmad Mützakhisyah (Zakhi)</span>. Saya membangun sistem otomasi konten AI produksi tinggi — mulai dari <span className="text-cyber-cyan font-mono">UGC Clippers</span>, <span className="text-cyber-emerald font-mono">Media Repost Engines</span>, hingga orkestrasi multi-model <span className="text-white font-medium">HeyGen</span>, <span className="text-white font-medium">ElevenLabs</span>, dan <span className="text-white font-medium">Creatomate</span> secara terprogram.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#pipeline"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber-cyan text-obsidian-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 hover:-translate-y-0.5"
              >
                <span>Coba Simulator Pipeline</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#systems"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 text-slate-200 font-mono text-xs uppercase tracking-wider transition-all hover:border-slate-500"
              >
                <Play className="w-4 h-4 text-cyber-emerald" />
                <span>Lihat 4 Sistem Utama</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
                <span>Creatomate 720p Locked</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-cyan" />
                <span>ElevenLabs Voice Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-violet" />
                <span>FastAPI + Redis Queues</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code / Status Card */}
          <div className="w-full lg:w-[480px]">
            <div className="glass-card rounded-2xl p-5 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">mechalens_automation.py</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  READY
                </span>
              </div>

              <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-2">
                <p className="text-slate-500"># Autonomous UGC Video Orchestrator</p>
                <p><span className="text-purple-400">async def</span> <span className="text-cyan-300">dispatch_ugc_clip</span>(video_url: str):</p>
                <p className="pl-4 text-slate-400">scenes = <span className="text-purple-400">await</span> gemini_vision.analyze(video_url)</p>
                <p className="pl-4 text-slate-400">hook_script = <span className="text-purple-400">await</span> llm.craft_dopamine_hook(scenes)</p>
                <p className="pl-4 text-emerald-400"># Green Screen Chroma Isolation (#00FF00)</p>
                <p className="pl-4 text-slate-400">avatar_job = <span className="text-purple-400">await</span> heygen.synthesize(hook_script, bg=<span className="text-emerald-300">"#00FF00"</span>)</p>
                <p className="pl-4 text-slate-400">voice_track = <span className="text-purple-400">await</span> elevenlabs.clone(hook_script)</p>
                <p className="pl-4 text-cyan-400"># Locked 720x1280 @ 30 FPS RenderScript</p>
                <p className="pl-4 text-slate-400">render = <span className="text-purple-400">await</span> creatomate.render(avatar_job, voice_track)</p>
                <p className="pl-4 text-purple-400"><span className="text-purple-400">return</span> <span className="text-slate-300">render.tos_url</span></p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Output: BytePlus TOS CDN</span>
                <span className="text-cyber-emerald font-bold">Status: 200 OK</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
