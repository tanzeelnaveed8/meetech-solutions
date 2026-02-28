import React from "react";
import {
     Cpu,
     Cloud,
     Share2,
     Database,
     Shield,
     Zap,
     Network,
     Activity,
     CpuIcon,
     Server,
     Layers,
     Brain,
     Binary,
     Microscope
} from "lucide-react";

/**
 * ADVANCED NEURAL CORE ANIMATION v2.1
 * Updated for Theme Compatibility & Hardware Aesthetics
 */
const AiMicrochipAnimation = () => {
     return (
          <div className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden font-sans bg-transparent ">
               {/* 1. ANIMATION KEYFRAMES */}
               <style>{`
        @keyframes draw-loop {
          0% { stroke-dashoffset: 1000; opacity: 0; }
          10% { opacity: 0.8; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          90% { opacity: 0.8; }
          100% { stroke-dashoffset: -1000; opacity: 0; }
        }

        @keyframes orbit-inner {
          from { transform: rotate(0deg) translateX(190px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(190px) rotate(-360deg); }
        }

        @keyframes orbit-outer {
          from { transform: rotate(360deg) translateX(320px) rotate(-360deg); }
          to { transform: rotate(0deg) translateX(320px) rotate(0deg); }
        }

        @keyframes scanning {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        .animate-draw-fast {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-loop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-draw-slow {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-loop 8s linear infinite;
        }

        .inner-orbit { position: absolute; animation: orbit-inner 20s linear infinite; }
        .outer-orbit { position: absolute; animation: orbit-outer 45s linear infinite; }
      `}</style>

               {/* AMBIENT BLOOM (Subtle color tied to accent) */}
               <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-accent/5 blur-[120px] rounded-full" />
               <div className="absolute bottom-1/4 right-1/4 h-64 w-64 bg-accent-secondary/5 blur-[120px] rounded-full" />

               {/* CORE SYSTEM CONTAINER */}
               <div className="relative z-10 flex items-center justify-center scale-90 md:scale-100">

                    {/* HIGH-DENSITY CIRCUIT WEB (Dark Wires for hardware feel) */}
                    <svg
                         className="absolute h-[700px] w-[700px] md:h-[800px] md:w-[800px] opacity-40"
                         viewBox="0 0 400 400"
                    >
                         <defs>
                              {/* Gradient for wire pulses */}
                              <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                   <stop offset="0%" stopColor="#0f172a" stopOpacity="0.2" />
                                   <stop offset="50%" stopColor="#2563eb" stopOpacity="0.9" />
                                   <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
                              </linearGradient>

                              <path id="path_n" d="M200 200 V50 H250" />
                              <path id="path_s" d="M200 200 V350 H150" />
                              <path id="path_e" d="M200 200 H350 V250" />
                              <path id="path_w" d="M200 200 H50 V150" />
                         </defs>

                         {/* SPREADING FILAMENTS - Fixed Dark Color for Hardware Realism */}
                         <g stroke="#1e293b" fill="none" strokeWidth="0.5">
                              <g className="opacity-30">
                                   <path d="M200 200 L300 100 H380" />
                                   <path d="M200 200 L100 300 H20" />
                                   <path d="M200 200 L300 300 H380" />
                                   <path d="M200 200 L100 100 H20" />
                              </g>
                         </g>

                         {/* ACTIVE PULSING LAYER */}
                         <g stroke="url(#mainGrad)" fill="none">
                              <g strokeWidth="1.2">
                                   <path d="M200 200 L300 100 H380" className="animate-draw-fast" style={{ animationDelay: '0s' }} />
                                   <path d="M200 200 L100 300 H20" className="animate-draw-fast" style={{ animationDelay: '1s' }} />
                                   <path d="M200 200 L300 300 H380" className="animate-draw-fast" style={{ animationDelay: '2s' }} />
                                   <path d="M200 200 L100 100 H20" className="animate-draw-fast" style={{ animationDelay: '3s' }} />
                              </g>

                              <g strokeWidth="0.4" opacity="0.4">
                                   {[...Array(12)].map((_, i) => (
                                        <path
                                             key={i}
                                             d={`M200 200 L${200 + Math.cos(i) * 120} ${200 + Math.sin(i) * 120} L${200 + Math.cos(i) * 180} ${200 + Math.sin(i) * 150}`}
                                             className="animate-draw-slow"
                                             style={{ animationDelay: `${i * 0.5}s` }}
                                        />
                                   ))}
                              </g>
                         </g>

                         {/* DATA PACKETS */}
                         <circle r="1.5" fill="var(--accent-primary)">
                              <animateMotion dur="3s" repeatCount="indefinite"><mpath href="#path_n" /></animateMotion>
                         </circle>
                         <circle r="1.5" fill="var(--accent-secondary)">
                              <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#path_e" /></animateMotion>
                         </circle>
                    </svg>

                    {/* THE AI MICROCHIP CORE (Refined Hardware Look) */}
                    <div className="relative group">
                         {/* External Halo */}
                         <div className="absolute -inset-16 animate-[pulse-glow_6s_infinite] rounded-full bg-accent/10 blur-3xl opacity-40" />

                         {/* Chip Body - Dark Silvery Gray for hardware realism */}
                         <div className="relative flex h-40 w-40 items-center justify-center rounded-xl border border-border-strong bg-slate-900 shadow-2xl overflow-hidden">
                              {/* Internal "Scanning" Bar */}
                              <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent z-20 animate-[scanning_3s_linear_infinite]" />

                              <div className="relative z-10 flex flex-col items-center">
                                   <div className="relative">
                                        <Brain className="absolute -top-6 left-1/2 -translate-x-1/2 text-accent-secondary/50 animate-pulse" size={28} />
                                        <span className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                                             AI
                                        </span>
                                   </div>
                                   <div className="mt-2 flex gap-1">
                                        {[...Array(4)].map((_, i) => (
                                             <div key={i} className="h-1 w-2 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                        ))}
                                   </div>
                              </div>

                              {/* Tech Decoration */}
                              <div className="absolute bottom-2 right-2 opacity-30"><Binary size={10} className="text-white" /></div>
                              <div className="absolute top-2 left-2 opacity-30"><Microscope size={10} className="text-white" /></div>
                         </div>

                         {/* Chip Connectors (Pins) - Dark hardware color for all themes */}
                         {[...Array(4)].map((_, side) => (
                              <div key={side} className={`absolute flex gap-1.5 ${side === 0 ? '-top-3.5 left-1/2 -translate-x-1/2 flex-row' :
                                   side === 1 ? '-bottom-3.5 left-1/2 -translate-x-1/2 flex-row' :
                                        side === 2 ? '-left-3.5 top-1/2 -translate-y-1/2 flex-col' :
                                             '-right-3.5 top-1/2 -translate-y-1/2 flex-col'
                                   }`}>
                                   {[...Array(6)].map((_, p) => (
                                        <div key={p} className="h-3.5 w-1.5 rounded-sm bg-slate-800 shadow-sm border-t border-slate-700" />
                                   ))}
                              </div>
                         ))}
                    </div>

                    {/* ORBITAL LAYERS */}
                    <div className="absolute">
                         {[CpuIcon, Zap, Activity, Layers].map((Icon, i) => (
                              <div key={i} className="inner-orbit" style={{ animationDelay: `${-5 * i}s` }}>
                                   <div className="group relative">
                                        <div className="absolute inset-0 bg-accent/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform" />
                                        <div className="relative rounded-full border border-border-default bg-bg-surface p-2.5 text-accent shadow-sm transition-all hover:scale-110 hover:text-accent-hover hover:border-accent">
                                             <Icon size={16} />
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="absolute">
                         {[Network, Shield, Database, Server, Cloud, Share2].map((Icon, i) => (
                              <div key={i} className="outer-orbit" style={{ animationDelay: `${-7.5 * i}s` }}>
                                   <div className="rounded-full border border-border-subtle bg-bg-subtle/80 p-3.5 text-text-muted backdrop-blur-sm transition-all hover:text-accent hover:border-accent hover:bg-bg-surface">
                                        <Icon size={20} />
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* DECORATIVE RINGS */}
                    <div className="absolute h-[500px] w-[500px] rounded-full border border-accent/5 animate-[spin_80s_linear_infinite]" />
                    <div className="absolute h-[505px] w-[505px] rounded-full border border-border-subtle/20 animate-[spin_120s_linear_infinite_reverse]" />
               </div>

               {/* FOOTER SYSTEM TELEMETRY (Cleaned up, no background box) */}
               <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-[float_4s_ease-in-out_infinite]">
                    <div className="flex gap-8 items-center">
                         <div className="flex items-center gap-2.5">
                              <div className="relative">
                                   <div className="h-2 w-2 rounded-full bg-accent animate-ping absolute inset-0" />
                                   <div className="h-2 w-2 rounded-full bg-accent relative" />
                              </div>
                              <div className="flex flex-col">
                                   <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">Neural State</span>
                                   <span className="text-[11px] font-mono text-text-primary">SYNAPTIC_READY</span>
                              </div>
                         </div>

                         <div className="w-[1px] h-6 bg-border-subtle" />

                         <div className="flex items-center gap-2.5">
                              <div className="h-2 w-2 rounded-full bg-accent-secondary animate-pulse" />
                              <div className="flex flex-col">
                                   <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">Processing</span>
                                   <span className="text-[11px] font-mono text-text-primary">1.42 PETAFLOP/S</span>
                              </div>
                         </div>
                    </div>

                    <p className="text-[9px] text-text-disabled font-mono tracking-[0.5em] uppercase mt-4">
                         Autonomous Intelligence Grid 04
                    </p>
               </div>
          </div>
     );
};

export default AiMicrochipAnimation;