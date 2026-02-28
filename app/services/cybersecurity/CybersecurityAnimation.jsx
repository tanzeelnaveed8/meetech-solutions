import React from 'react';
import {
     Shield,
     Lock,
     User,
     Cloud,
     Database,
     Globe,
     Zap,
     Cpu,
     Fingerprint,
     ShieldCheck,
     Terminal
} from 'lucide-react';

/**
 * CybersecurityAnimation Component - Enhanced Version
 * * A high-end, multi-layered animated UI component.
 * Updates:
 * - Dual-axis rotating data rings.
 * - Intricate PCB trace network with pulsing nodes.
 * - Interactive particle/grid background.
 * - Enhanced shield glow and "breathing" UI elements.
 */

const CybersecurityAnimation = () => {
     return (
          <div className="relative flex h-[700px] w-full items-center justify-center overflow-hidden bg-black font-sans">

               {/* 1. ADVANCED ANIMATION KEYFRAMES */}
               <style>{`
        @keyframes rotate-data {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(0.9); opacity: 0.1; }
        }

        @keyframes circuit-draw {
          0% { stroke-dashoffset: 1200; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { stroke-dashoffset: -1200; opacity: 0; }
        }

        @keyframes node-pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; filter: blur(0px); }
          50% { transform: scale(1.8); opacity: 1; filter: blur(1px); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(260px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(260px) rotate(-360deg); }
        }

        @keyframes scan-line {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        .animate-circuit {
          stroke-dasharray: 600;
          animation: circuit-draw 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .orbit-icon {
          position: absolute;
          animation: orbit 40s linear infinite;
        }
        
        .grid-bg {
          background-image: radial-gradient(var(--accent-primary) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

               {/* 2. BACKGROUND ARCHITECTURE */}
               <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-gray-900/60 blur-[140px] rounded-full animate-pulse" />
               </div>

               {/* 3. ENHANCED CIRCUIT WEB (Multiple Layers) */}
               <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1000 1000">
                    <defs>
                         <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
                              <stop offset="50%" stopColor="#1e293b" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0" />
                         </linearGradient>
                         <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                              <feMerge>
                                   <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                              </feMerge>
                         </filter>
                    </defs>

                    <g stroke="url(#wireGradient)" fill="none" strokeWidth="1.2" filter="url(#glow)">
                         {/* Complex paths radiating out */}
                         <path d="M500 500 L650 350 H850 M850 350 V200" className="animate-circuit" style={{ animationDelay: '0s' }} />
                         <path d="M500 500 L350 650 H150 M150 650 V800" className="animate-circuit" style={{ animationDelay: '2s' }} />
                         <path d="M500 500 L650 650 H850 M850 650 V800" className="animate-circuit" style={{ animationDelay: '4s' }} />
                         <path d="M500 500 L350 350 H150 M150 350 V200" className="animate-circuit" style={{ animationDelay: '6s' }} />

                         {/* Micro-traces */}
                         <path d="M500 500 V150" className="animate-circuit" strokeOpacity="0.5" />
                         <path d="M500 500 V850" className="animate-circuit" strokeOpacity="0.5" style={{ animationDelay: '1s' }} />
                         <path d="M500 500 H150" className="animate-circuit" strokeOpacity="0.5" style={{ animationDelay: '3s' }} />
                         <path d="M500 500 H850" className="animate-circuit" strokeOpacity="0.5" style={{ animationDelay: '5s' }} />
                    </g>

                    {/* Pulsing Hardware Nodes */}
                    <g fill="var(--accent-primary)">
                         {[
                              [850, 350], [150, 650], [850, 650], [150, 350],
                              [500, 150], [500, 850], [150, 500], [850, 500]
                         ].map(([cx, cy], i) => (
                              <circle
                                   key={i} cx={cx} cy={cy} r="4"
                                   className="origin-center"
                                   style={{ animation: `node-pulse 3s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
                              />
                         ))}
                    </g>
               </svg>

               {/* 4. CENTRAL CORE UNIT */}
               <div className="relative z-10 flex flex-col items-center">

                    {/* Layered Pulsing Rings */}
                    <div className="absolute h-[420px] w-[420px] rounded-full border border-gray-800 animate-[pulse-ring_6s_ease-in-out_infinite]" />
                    <div className="absolute h-[380px] w-[380px] rounded-full border border-gray-700 animate-[pulse-ring_4s_ease-in-out_infinite]" />
                    
                    {/* Ring 1: Primary Data (Clockwise) */}
                    <div className="absolute h-[340px] w-[340px] animate-[rotate-data_50s_linear_infinite]">
                         <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
                              <path id="outerPath" d="M 50, 50 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" fill="transparent" />
                              <text className="text-[3px] fill-accent font-mono uppercase tracking-[0.4em]">
                                   <textPath href="#outerPath">
                                        • SYSTEM_ENCRYPTED • THREAT_LEVEL_ZERO • FIREWALL_ACTIVE • BUFFER_SECURE •
                                   </textPath>
                              </text>
                         </svg>
                    </div>

                    {/* Ring 2: Binary Stream (Counter-Clockwise) */}
                    <div className="absolute h-[290px] w-[290px] animate-[rotate-reverse_30s_linear_infinite]">
                         <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                              <path id="innerPath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                              <text className="text-[4px] fill-accent-secondary font-mono tracking-widest">
                                   <textPath href="#innerPath">
                                        101011010100010111101010110101011101010110
                                   </textPath>
                              </text>
                         </svg>
                    </div>

                    {/* Central Shield Hexagon */}
                    <div className="group relative flex h-64 w-64 items-center justify-center transition-all duration-700 hover:scale-110">

                         {/* Intense Core Glow */}
                         <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                         <div className="relative flex h-52 w-52 items-center justify-center">
                              {/* Custom Shield SVG with Clipping and Scan Effect */}
                              <div className="absolute inset-0 overflow-hidden " style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}>
                                   <div className="absolute inset-0 bg-accent/5" />
                                   <div className="absolute w-full h-[2px]  bg-blue-950 shadow-[0_0_15px_var(--accent-primary)] animate-[scan-line_3s_linear_infinite]" />
                              </div>

                              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                   <path
                                        d="M50 5 L15 20 V50 C15 75 50 95 50 95 C50 95 85 75 85 50 V20 L50 5 Z"
                                        className="fill-bg-page/80 stroke-accent stroke-[1.5]"
                                   />
                              </svg>

                              {/* Inner UI Icons */}
                              <div className="relative z-20 flex flex-col items-center">
                                   <Lock className="text-cyan-400 h-16 w-16 mb-2 transition-all group-hover:drop-shadow-[0_0_20px_cyan] group-hover:scale-110 duration-500" />
                                   <div className="flex gap-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Enhanced Typography */}
                    <div className="mt-16 text-center">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-4">
                              <ShieldCheck size={14} className="text-accent" />
                              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Protocol V4.2 Encrypted</span>
                         </div>
                         <h2 className="text-headline-xl font-bold text-text-primary tracking-tighter leading-none">
                              CYBER<span className="text-accent">CORE</span>
                         </h2>
                         <p className="text-body-sm text-text-muted mt-2 max-w-[280px] leading-relaxed">
                              Autonomous threat detection and neural network defense systems active.
                         </p>
                    </div>
               </div>

               {/* 5. MULTI-LAYER ORBITING ICONS */}
               <div className="absolute h-full w-full pointer-events-none">
                    {[
                         { Icon: User, delay: '0s', label: 'Identity' },
                         { Icon: Cloud, delay: '-6.6s', label: 'Cloud' },
                         { Icon: Database, delay: '-13.2s', label: 'Storage' },
                         { Icon: Globe, delay: '-19.8s', label: 'Network' },
                         { Icon: Fingerprint, delay: '-26.4s', label: 'Biometrics' },
                         { Icon: Terminal, delay: '-33s', label: 'Console' },
                    ].map((item, idx) => (
                         <div
                              key={idx}
                              className="orbit-icon left-1/2 top-1/2"
                              style={{ animationDelay: item.delay }}
                         >
                              <div className="group/item relative -translate-x-1/2 -translate-y-1/2">
                                   {/* Label on Hover */}
                                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity bg-accent text-text-inverse text-[10px] px-2 py-0.5 rounded whitespace-nowrap font-mono pointer-events-none">
                                        {item.label}
                                   </div>

                                   <div className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-md shadow-lg text-gray-300 group-hover/item:text-cyan-400 group-hover/item:border-cyan-400 group-hover/item:scale-125 transition-all duration-300">
                                        <item.Icon size={22} />
                                   </div>

                                   {/* Orbit path dot */}
                                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent/20 rounded-full scale-[15]" />
                              </div>
                         </div>
                    ))}
               </div>

               {/* Internal Scanning Animation for the progress bar inside shield */}
               <style>{`
        @keyframes scanning {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
          </div>
     );
};

export default CybersecurityAnimation;