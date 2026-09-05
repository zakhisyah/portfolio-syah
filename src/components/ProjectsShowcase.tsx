import React from 'react';
import { Check, Cpu } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      title: "Magic UGC Clipper Engine",
      badge: "PRODUCTION CORE",
      badgeColor: "bg-cyan-950/80 text-cyber-cyan border-cyber-cyan/30",
      description: "Sistem otomasi revolusioner yang memproses video berdurasi panjang menjadi klip video pendek (TikTok, Reels, Shorts) berformat UGC. Dilengkapi narator avatar AI HeyGen yang di-chroma keying mulus ke atas video asli dengan voiceover kloning ElevenLabs yang tersinkronisasi milidetik.",
      image: "/assets/video.png",
      specs: [
        "HeyGen API v2 Green-Screen (#00FF00) Avatar Synthesis",
        "ElevenLabs Emotional Voiceover dengan Word-Level Timestamps",
        "Creatomate 720x1280 @ 30 FPS Dynamic RenderScript Compositing",
        "Gemini 2.5 Pro Vision Dopamine Hook Scoring & Face Tracking"
      ],
      techStack: ["HeyGen", "ElevenLabs", "Creatomate", "Gemini 2.5 Pro", "FastAPI"]
    },
    {
      title: "Multi-Platform Media Repost Engine",
      badge: "GROWTH AUTOMATION",
      badgeColor: "bg-emerald-950/80 text-cyber-emerald border-cyber-emerald/30",
      description: "Pipeline otomasi konten tanpa sentuhan manual: mengunduh konten viral dari TikTok / IG, merekayasa ulang script dan narasi dengan AI, menghapus watermark lama secara cerdas, menambahkan kinetic caption, lalu menjadwalkannya ke berbagai akun media sosial secara simultan.",
      image: "/assets/automation.png",
      specs: [
        "Autonomous Multi-Source Scraping & Stream Demuxing",
        "AI Content Re-framing & Anti-Copyright Audio Pitch Shifting",
        "Kinetic Subtitle & Watermark Overlay Rendering",
        "Webhook Triggered Scheduling via Celery & Redis"
      ],
      techStack: ["Python", "FFmpeg", "yt-dlp", "Creatomate", "Redis Queue"]
    },
    {
      title: "MechaLens Core AI Video Infrastructure",
      badge: "HIGH-THROUGHPUT BACKEND",
      badgeColor: "bg-purple-950/80 text-cyber-violet border-cyber-violet/30",
      description: "Arsitektur backend asinkron berkecepatan tinggi yang menjadi pondasi web MechaLens.ai. Mampu menangani antrian generasi video masif dari berbagai model (Seedance, Veo, Creatomate) dengan sistem task watchdog anti-gantung dan proteksi transaksi kredit idempotency.",
      image: "/assets/image.png",
      specs: [
        "Asynchronous FastAPI Engine dengan Redis Queue Fallback",
        "BytePlus TOS (Tinder Object Storage) + Global CDN Integration",
        "Stateless Task Watchdog & Zombie Job Auto-Reconciliation",
        "Strict Idempotency Ledger untuk Transaksi Koin & Pembayaran"
      ],
      techStack: ["FastAPI", "PostgreSQL", "BytePlus TOS", "Redis", "Xendit"]
    },
    {
      title: "Local-to-Remote Agentic DevOps Hub",
      badge: "INFRASTRUCTURE & OPS",
      badgeColor: "bg-amber-950/80 text-cyber-amber border-cyber-amber/30",
      description: "Arsitektur agen tandem modern: menghubungkan AI Agent lokal (Antigravity di Windows) dengan Senior DevOps Agent jarak jauh (Hermes di Ubuntu VPS Tencent Cloud) untuk orkestrasi PaaS Coolify, Traefik reverse proxy, dan Zero-Trust Cloudflare DNS tanpa intervensi manual yang rumit.",
      image: "/assets/automation.png",
      specs: [
        "Self-Hosted Coolify PaaS dengan Traefik Reverse Proxy & Auto SSL",
        "Tencent Cloud Hardening (UFW, Fail2ban, 1.9GB Swap Anti-OOM)",
        "Zero-Trust Cloudflare DNS API Automation",
        "Paramiko Remote SSH Agent Bridge dengan Base64 Shell Encoding"
      ],
      techStack: ["Coolify", "Docker", "Traefik", "Paramiko", "Cloudflare", "Ubuntu"]
    }
  ];

  return (
    <section id="systems" className="py-24 bg-obsidian-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>SIGNATURE PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Sistem Otomasi yang Telah Dibangun
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Karya nyata dalam memimpin dan merancang arsitektur AI automation di MechaLens.ai dan ekosistem video marketing modern.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 glass-card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Preview */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 group">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-sm border border-white/10">
                      LIVE IN PROD
                    </span>
                    <span className="text-cyber-cyan font-bold">mechalens.ai</span>
                  </div>
                </div>
              </div>

              {/* Text & Specs */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${proj.badgeColor}`}>
                    {proj.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {proj.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2 mb-6">
                  {proj.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {proj.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
