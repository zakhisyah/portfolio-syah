import React, { useState } from 'react';
import { Download, Brain, Mic, UserCheck, Video, Cloud, CheckCircle2, ChevronRight, Code } from 'lucide-react';

export const PipelineExplorer: React.FC = () => {
  const stages = [
    {
      id: "ingest",
      title: "01. Content Ingestion",
      icon: Download,
      subtitle: "Multi-Source Extraction",
      tech: "yt-dlp + FFmpeg + Webhooks",
      time: "~ 3.2s",
      summary: "Mengunduh dan mengekstraksi stream video/audio dari TikTok, Instagram, atau YouTube secara asinkron tanpa mengunci main thread.",
      code: `// Stage 01: Ingestion & Stream Demuxing
{
  "source_url": "https://tiktok.com/@creator/video/...",
  "audio_codec": "aac_128k",
  "resolution_target": "720x1280",
  "transcode": "h264_nvenc_fast"
}`,
      rule: "Ekstraksi metadata audio terpisah untuk feed langsung ke model speech-to-text."
    },
    {
      id: "analysis",
      title: "02. AI Dopamine Hook Analysis",
      icon: Brain,
      subtitle: "Retention & Scene Scoring",
      tech: "Gemini 2.5 Pro Vision + Prompt DNA",
      time: "~ 4.8s",
      summary: "Menganalisis scene, emosi pembicara, dan menentukan 3 detik pertama dengan skor dopamin tertinggi untuk hook video pendek.",
      code: `// Stage 02: Dopamine Hook Scoring
{
  "hook_timestamp": [14.2, 17.5],
  "dopamine_score": 0.94,
  "caption_headline": "Rahasia Omzet 10x Lipat",
  "pacing_style": "high_energy_reels"
}`,
      rule: "Pacing video dipotong pada transisi emosional tertinggi untuk mencegah swipe-away."
    },
    {
      id: "voice",
      title: "03. Voice Synthesis & Cloning",
      icon: Mic,
      subtitle: "Emotional TTS Pipeline",
      tech: "ElevenLabs API + Audio Sync",
      time: "~ 2.5s",
      summary: "Memproduksi voiceover emosional berbahasa Indonesia/Inggris dengan intonasi natural, napas dinamis, dan sinkronisasi timestamp per kata.",
      code: `// Stage 03: ElevenLabs Audio Track
{
  "voice_id": "syah_avatar_clone_v2",
  "stability": 0.55,
  "similarity_boost": 0.85,
  "word_timestamps": true,
  "output_format": "mp3_44100_128"
}`,
      rule: "Word-level timestamps wajib aktif untuk sinkronisasi caption Creatomate presisi milidetik."
    },
    {
      id: "avatar",
      title: "04. Avatar Generation",
      icon: UserCheck,
      subtitle: "Green Screen Chroma Isolation",
      tech: "HeyGen v2 API",
      time: "~ 18.0s",
      summary: "Merender avatar digital fotorealistis dengan background hijau murni (#00FF00) agar siap di-chroma keying secara sempurna.",
      code: `// Stage 04: HeyGen Payload Enforcement
{
  "video_inputs": [{
    "character": { "type": "avatar", "avatar_id": "Wayne_20240711" },
    "voice": { "type": "audio", "audio_url": "tos://bucket/voice.mp3" },
    "background": { "type": "color", "value": "#00FF00" }
  }]
}`,
      rule: "Hukum Besi: Background #00FF00 wajib mutlak agar chroma-keying Creatomate tidak berbayang abu-abu."
    },
    {
      id: "composite",
      title: "05. Creatomate Compositing",
      icon: Video,
      subtitle: "Locked 720p RenderScript",
      tech: "Creatomate JSON Engine",
      time: "~ 12.0s",
      summary: "Menggabungkan latar belakang video, avatar ter-chroma, kinetic caption bertingkat, dan sound effects dalam format 9:16.",
      code: `// Stage 05: Creatomate RenderScript
{
  "output_format": "mp4",
  "width": 720,
  "height": 1280,
  "frame_rate": 30,
  "elements": [
    { "type": "video", "source": "tos://bg.mp4", "x_alignment": "50%" },
    { "type": "video", "source": "tos://avatar.mp4", "chroma_key": "#00FF00" },
    { "type": "text", "text": "{{caption}}", "background_border_radius": "20%" }
  ]
}`,
      rule: "Border radius teks wajib persentase (%) dan resolusi dikunci 720x1280 @ 30 FPS demi kecepatan rendering."
    },
    {
      id: "distribution",
      title: "06. Cloud Storage & Delivery",
      icon: Cloud,
      subtitle: "Instant TOS Streaming",
      tech: "BytePlus TOS + CDN Edge",
      time: "~ 1.5s",
      summary: "Hasil render video langsung disimpan ke BytePlus TOS bucket dengan CDN Edge caching untuk siap diputar atau di-post otomatis.",
      code: `// Stage 06: BytePlus TOS Object
{
  "bucket": "mechalens-prod-video",
  "object_key": "ugc_renders/clip_20260905_x89a.mp4",
  "cdn_url": "https://cdn.mechalens.ai/ugc_renders/clip_20260905_x89a.mp4",
  "content_type": "video/mp4",
  "status": "READY"
}`,
      rule: "Signed URL dengan TTL terukur untuk menjamin keamanan hak akses aset klien."
    }
  ];

  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <section id="pipeline" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-4">
          <Code className="w-3.5 h-3.5" />
          <span>INTERACTIVE PIPELINE ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Bagaimana Otomasi Media AI Bekerja
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Klik setiap tahap di bawah ini untuk melihat arsitektur teknis, payload data, dan standar hukum besi yang saya terapkan pada sistem produksi MechaLens.ai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Stages Navigation List */}
        <div className="lg:col-span-5 space-y-3">
          {stages.map((stage) => {
            const isActive = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                  isActive
                    ? 'bg-cyber-cyan/10 border-cyber-cyan text-white shadow-lg shadow-cyber-cyan/10 translate-x-1'
                    : 'bg-obsidian-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-cyber-cyan text-obsidian-950 font-bold' : 'bg-slate-800/80 text-slate-400 group-hover:text-cyber-cyan'
                  }`}>
                    <stage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold block text-slate-200">
                      {stage.title}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {stage.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {stage.time}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyber-cyan translate-x-0.5' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Deep Dive Details Panel */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
              <div>
                <span className="text-xs font-mono text-cyber-cyan font-bold tracking-wider uppercase block mb-1">
                  STAGE DETAILS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeStage.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-cyber-cyan border border-cyber-cyan/30">
                  {activeStage.tech}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-emerald-500/30">
                  {activeStage.time}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeStage.summary}
            </p>

            {/* Code / Payload Viewer */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 bg-obsidian-950 px-4 py-2 rounded-t-lg border-t border-x border-slate-800">
                <span>PAYLOAD / LOG DATA</span>
                <span className="text-cyber-emerald flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED IN PROD
                </span>
              </div>
              <pre className="bg-obsidian-950/90 text-slate-200 text-xs font-mono p-4 rounded-b-lg border border-slate-800 overflow-x-auto leading-relaxed">
                <code>{activeStage.code}</code>
              </pre>
            </div>

            {/* Production Law Notice */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-start gap-3">
              <span className="text-amber-400 text-sm font-bold font-mono mt-0.5">⚠️ HUKUM PRODUKSI:</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeStage.rule}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
