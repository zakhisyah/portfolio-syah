import React, { useState } from 'react';
import { Terminal, Copy, Check, ExternalLink, Mail, CornerDownLeft } from 'lucide-react';

export const TerminalContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "whoami",
      output: "Ahmad Mützakhisyah (Zakhi) — AI Automation Engineer @ MechaLens.ai"
    },
    {
      cmd: "cat contact.json",
      output: JSON.stringify({
        name: "Ahmad Mützakhisyah",
        email: "zakhi.boys@gmail.com",
        github: "https://github.com/zakhisyah",
        role: "AI Automation Engineer",
        focus: ["UGC Clipper", "Media Repost", "HeyGen + Creatomate", "FastAPI"]
      }, null, 2)
    }
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    let out = "";
    if (trimmed === "help") {
      out = "Available commands: whoami, cat contact.json, status, clear, help";
    } else if (trimmed === "whoami") {
      out = "Ahmad Mützakhisyah (Zakhi) — AI Automation Engineer @ MechaLens.ai";
    } else if (trimmed === "cat contact.json" || trimmed === "contact") {
      out = JSON.stringify({
        name: "Ahmad Mützakhisyah",
        email: "zakhi.boys@gmail.com",
        github: "https://github.com/zakhisyah",
        role: "AI Automation Engineer",
        focus: ["UGC Clipper", "Media Repost", "HeyGen + Creatomate", "FastAPI"]
      }, null, 2);
    } else if (trimmed === "status") {
      out = "MECHALENS VIDEO QUEUE: HEALTHY | UPTIME: 99.9% | PROD: READY";
    } else if (trimmed === "clear") {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      out = `bash: command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    setHistory([...history, { cmd: inputVal, output: out }]);
    setInputVal('');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("zakhi.boys@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-amber/10 border border-cyber-amber/30 text-cyber-amber text-xs font-mono mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>DIRECT CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Let’s Build Something Autonomous
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Ingin membangun pipeline video otomatis, sistem UGC clipper, atau mendiskusikan arsitektur AI tingkat lanjut? Mari terhubung langsung.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Shell Terminal */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-obsidian-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">zakhi@mechalens-box:~</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">Interactive Shell</span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-slate-300 min-h-[260px] max-h-[360px] overflow-y-auto space-y-3">
              <p className="text-slate-500">Type <span className="text-cyber-cyan font-bold">'help'</span> to see available commands.</p>
              
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyber-emerald">
                    <span>zakhi@mechalens-box:~$</span>
                    <span className="text-white">{h.cmd}</span>
                  </div>
                  <pre className="text-slate-300 whitespace-pre-wrap pl-2 leading-relaxed text-[11px] bg-black/40 p-2 rounded border border-slate-800/60">
                    {h.output}
                  </pre>
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
                <span className="text-cyber-emerald font-bold">zakhi@mechalens-box:~$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type here (e.g. status, whoami, clear)..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-slate-600"
                />
                <button type="submit" className="text-slate-500 hover:text-cyber-cyan">
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Box */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-slate-800/90 space-y-4">
            <h3 className="text-base font-bold text-white font-mono">
              DIRECT REACH
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hubungi saya langsung untuk kolaborasi proyek, konsultasi arsitektur otomasi, atau pembuatan sistem media AI.
            </p>

            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyber-cyan/50 text-xs font-mono text-slate-200 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyber-cyan" />
                <span>zakhi.boys@gmail.com</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-white">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </div>
            </button>

            <a
              href="https://github.com/zakhisyah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyber-emerald/50 text-xs font-mono text-slate-200 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <ExternalLink className="w-4 h-4 text-cyber-emerald" />
                <span>github.com/zakhisyah</span>
              </div>
              <span className="text-[11px] text-slate-400 group-hover:text-white">Visit ↗</span>
            </a>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-slate-800/80 text-center">
            <p className="text-[11px] font-mono text-slate-500">
              Built with React + TypeScript + Tailwind. <br />
              Ready for Coolify on Ubuntu VPS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
