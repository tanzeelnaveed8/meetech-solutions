"use client";

import React from "react";
import {
     ArrowUpRight,
     Zap,
     UserCheck,
     Users2,
     CalendarClock,
     ChevronRight,
     ShieldCheck,
     Cpu,
     Lock,
     Globe,
     BarChart3,
     TrendingUp,
     Users,
     Target, DollarSign
} from "lucide-react";


// WHY MEETECH DATA
const WHY_MEETECH = [
     {
          title: "Affordable Excellence",
          description:
               "Global agencies charge $5,000–20,000 per month. We deliver the same quality for $300–2,000 per month. No hidden fees. No long-term contracts. Cancel anytime.",
          icon: <DollarSign className="w-5 h-5" />,
          stat: "70% Cheaper",
          image:
               "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
          tag: "Affordability",
     },
     {
          title: "All-in-One Platform",
          description:
               "Instead of managing five different vendors, get everything from one trusted partner. Seamless integration, single point of contact, and unified reporting.",
          icon: <Target className="w-5 h-5" />,
          stat: "5-in-1 Services",
          image:
               "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
          tag: "Convenience",
     },
     {
          title: "Lightning-Fast Deployment",
          description:
               "Traditional agencies take 2–4 weeks. We get you live in 24–48 hours. Faster results, lower risk, and immediate business impact.",
          icon: <Zap className="w-5 h-5" />,
          stat: "24–48 Hours",
          image:
               "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
          tag: "Speed",
     },
     {
          title: "Expert Team",
          description:
               "Our team includes Google Ads experts, Meta Ads specialists, LinkedIn professionals, blockchain developers, and cybersecurity engineers — each a master of their craft.",
          icon: <Users className="w-5 h-5" />,
          stat: "22 Specialists",
          image:
               "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
          tag: "Expertise",
     },
     {
          title: "Proven Results",
          description:
               "Real customers. Real measurable outcomes. WhatsApp automation delivers 3–4x ROI, AI tools 15–20x ROI, and social media campaigns 5–10x ROI. We focus on results that matter.",
          icon: <TrendingUp className="w-5 h-5" />,
          stat: "3–10x ROI",
          image:
               "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
          tag: "Performance",
     },
     {
          title: "Global Presence",
          description:
               "Operating across UAE, USA, Pakistan, India, Bangladesh, and 21+ additional countries. We combine local expertise with global scale and timezone-aligned support.",
          icon: <Globe className="w-5 h-5" />,
          stat: "26+ Countries",
          image:
               "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
          tag: "Global Reach",
     },
];


// MAIN APP
const WhyMeetechh = () => {
     return (
          <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] font-sans selection:bg-[var(--accent-primary)]/30 selection:text-[var(--text-inverse)] mb-40 md:mb-56 xl:px-6">

               {/* BACKGROUND DECORATION */}
               <div className="fixed inset-0 pointer-events-none z-0">
                    <div
                         className="absolute inset-0 opacity-[0.15]"
                         style={{
                              backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
                              backgroundSize: "48px 48px",
                         }}
                    />
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--accent-primary)]/10 blur-[150px] rounded-lg" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-secondary)]/10 blur-[150px] rounded-lg" />
               </div>

               <main className="relative z-10">
                    {/* HERO SECTION */}
                    <section className="relative py-32 md:py-56 border-b border-[var(--border-default)]/5">
                         <div className="mx-auto max-w-7xl px-6  grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                              {/* LEFT - STICKY CONTENT */}
                              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
                                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20">
                                        <Cpu className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent-primary)]">
                                             Engineering Edge
                                        </span>
                                   </div>

                                   <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-[var(--text-primary)]">
                                        WHY <br /> meetech

                                   </h1>

                                   <div className="space-y-6">
                                        <p className="text-xl leading-relaxed max-w-md text-[var(--text-muted)]">
                                             We're 70% cheaper than competitors while delivering enterprise-quality results. Here's what
                                             makes us different.
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 pt-8">
                                             <div className="p-4 rounded-2xl bg-[#1e40af]">
                                                  <div className="text-2xl font-black text-[var(--text-inverse)]">400+</div>
                                                  <div className="text-[10px] uppercase tracking-widest text-[var(--text-primary)]">Deployments</div>
                                             </div>
                                             <div className="p-4 rounded-2xl  bg-[#1e40af]">
                                                  <div className="text-2xl font-black text-[var(--text-inverse)]">99.9%</div>
                                                  <div className="text-[10px] uppercase tracking-widest text-[var(--text-primary)]">Uptime SLA</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* RIGHT - FEATURE CARDS */}
                              <div className=" md:col-span-6 lg:col-span-7 space-y-8 h-fit overflow-y-auto ">
                                   {WHY_MEETECH.map((item, i) => (
                                        <div
                                             key={i}
                                             className="group relative bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border-default)]/10 rounded-[2.5rem] overflow-hidden hover:border-[var(--accent-primary)]/40 hover:bg-[var(--bg-surface)] transition-all duration-500"
                                        >
                                             <div className="flex flex-col md:flex-row">
                                                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-6">
                                                       <div className="flex justify-between items-start">
                                                            <div className="p-3 rounded-2xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--text-inverse)] transition-all duration-300">
                                                                 {item.icon}
                                                            </div>
                                                            <div className="text-right">
                                                                 <span className="block text-[10px] font-black uppercase tracking-widest text-[var(--accent-primary)]">
                                                                      {item.stat}
                                                                 </span>
                                                                 <span className="block text-[9px] font-medium uppercase tracking-tighter text-[var(--text-muted)]">
                                                                      Current Metric
                                                                 </span>
                                                            </div>
                                                       </div>

                                                       <div>
                                                            <h3 className="text-2xl md:text-3xl font-black uppercase text-[var(--text-primary)] tracking-tight mb-3">
                                                                 {item.title}
                                                            </h3>
                                                            <p className="text-[var(--text-muted)] text-base leading-relaxed">{item.description}</p>
                                                       </div>

                                                       <div className="mt-10 flex items-center gap-3">
                                                            <div className="h-[1px] flex-1 bg-[var(--border-default)]/10" />
                                                            <span className="text-[10px] font-bold uppercase flex items-center gap-1 group-hover:text-[var(--accent-primary)] transition-colors">
                                                                 {item.tag} <ChevronRight className="w-3 h-3" />
                                                            </span>
                                                       </div>
                                                  </div>

                                                  <div className="md:w-[40%] relative min-h-[300px] md:min-h-full overflow-hidden">
                                                       <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                                                       />
                                                       <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-card)] via-transparent to-transparent md:block hidden" />
                                                       <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent md:hidden" />

                                                       <div className="absolute bottom-4 right-4 bg-[var(--bg-surface)]/60 backdrop-blur-md border border-[var(--border-default)]/10 px-3 py-1 rounded-lg text-[9px] font-mono text-[var(--text-muted)]">
                                                            SRV-0{i + 1}.MTCH
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                         </div>
                    </section>
               </main>
          </div>
     );
}

export default WhyMeetechh;
