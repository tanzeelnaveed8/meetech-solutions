import React from 'react';
import { motion } from 'framer-motion';
import {
     ArrowRight,
     ChevronRight,
     Globe,
     Users,
     Zap,
     TrendingUp,
     DollarSign,
     Target,
     Cpu
} from 'lucide-react';

// Content Data
const WHY_MEETECH = [
     {
          title: "Affordable Excellence",
          description: "Global agencies charge $5,000–20,000 per month. We deliver the same quality for $300–2,000 per month. No hidden fees. No long-term contracts. Cancel anytime.",
          icon: <DollarSign className="w-5 h-5" />,
          stat: "70% Cheaper",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
          tag: "Affordability",
     },
     {
          title: "All-in-One Platform",
          description: "Instead of managing five different vendors, get everything from one trusted partner. Seamless integration, single point of contact, and unified reporting.",
          icon: <Target className="w-5 h-5" />,
          stat: "5-in-1 Services",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
          tag: "Convenience",
     },
     {
          title: "Lightning-Fast Deployment",
          description: "Traditional agencies take 2–4 weeks. We get you live in 24–48 hours. Faster results, lower risk, and immediate business impact.",
          icon: <Zap className="w-5 h-5" />,
          stat: "24–48 Hours",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
          tag: "Speed",
     },
     {
          title: "Expert Team",
          description: "Our team includes Google Ads experts, Meta Ads specialists, LinkedIn professionals, blockchain developers, and cybersecurity engineers — each a master of their craft.",
          icon: <Users className="w-5 h-5" />,
          stat: "22 Specialists",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
          tag: "Expertise",
     },
     {
          title: "Proven Results",
          description: "Real customers. Real measurable outcomes. WhatsApp automation delivers 3–4x ROI, AI tools 15–20x ROI, and social media campaigns 5–10x ROI. We focus on results that matter.",
          icon: <TrendingUp className="w-5 h-5" />,
          stat: "3–10x ROI",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
          tag: "Performance",
     },
     {
          title: "Global Presence",
          description: "Operating across UAE, USA, Pakistan, India, Bangladesh, and 21+ additional countries. We combine local expertise with global scale and timezone-aligned support.",
          icon: <Globe className="w-5 h-5" />,
          stat: "26+ Countries",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
          tag: "Global Reach",
     },
];

export default function App() {
     return (
          <div className="min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent/30 selection:text-text-inverse overflow-x-hidden">

               {/* Background Decoration Layer */}
               <div className="fixed inset-0 pointer-events-none z-0">
                    <div
                         className="absolute inset-0 opacity-[0.15]"
                         style={{
                              backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
                              backgroundSize: "48px 48px",
                         }}
                    />
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-lg" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-secondary/10 blur-[150px] rounded-lg" />
               </div>

               <main className="relative z-10">
                    <section className="relative py-20 md:py-32 lg:py-48 border-b border-border-default/5">
                         <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                              {/* LEFT COLUMN - Sticky Header & Metrics */}
                              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20"
                                   >
                                        <Cpu className="w-3.5 h-3.5 text-accent" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                                             Engineering Edge
                                        </span>
                                   </motion.div>

                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                   >
                                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-text-primary mb-8">
                                             WHY <br /> <span className="text-accent">meetech</span>
                                        </h1>

                                        <p className="text-xl leading-relaxed max-w-md text-text-muted mb-12">
                                             We're <span className="text-text-primary font-bold">70% cheaper</span> than competitors while delivering enterprise-quality results. Here's what makes us different.
                                        </p>
                                   </motion.div>
                              </div>

                              {/* RIGHT COLUMN - Masonry Feature Cards */}
                              <div className="lg:col-span-7 space-y-6">
                                   {WHY_MEETECH.map((item, i) => (
                                        <motion.div
                                             key={i}
                                             initial={{ opacity: 0, y: 30 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             viewport={{ once: true, margin: "-100px" }}
                                             transition={{ delay: i * 0.1 }}
                                             className="group relative bg-bg-card/80 backdrop-blur-xl border border-border-default rounded-[2.5rem] overflow-hidden hover:border-accent/40 hover:bg-bg-surface transition-all duration-700 shadow-sm hover:shadow-2xl"
                                        >
                                             <div className="flex flex-col md:flex-row">
                                                  {/* Text Content */}
                                                  <div className="flex-1 p-10 md:p-12 flex flex-col justify-between">
                                                       <div className="flex justify-between items-start mb-10">
                                                            <div className="p-3.5 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-text-inverse transition-all duration-500 shadow-inner">
                                                                 {item.icon}
                                                            </div>
                                                            <div className="text-right">
                                                                 <span className="block text-xs font-black uppercase tracking-widest text-accent">
                                                                      {item.stat}
                                                                 </span>
                                                                 <span className="block text-[9px] font-bold uppercase tracking-tighter text-text-muted mt-1 opacity-60">
                                                                      Current Metric
                                                                 </span>
                                                            </div>
                                                       </div>

                                                       <div className="space-y-4">
                                                            <h3 className="text-2xl md:text-3xl font-black uppercase text-text-primary tracking-tight group-hover:text-accent transition-colors">
                                                                 {item.title}
                                                            </h3>
                                                            <p className="text-text-muted text-base leading-relaxed font-light">
                                                                 {item.description}
                                                            </p>
                                                       </div>

                                                       <div className="mt-12 flex items-center gap-4">
                                                            <div className="h-px flex-1 bg-border-default/20 group-hover:bg-accent/20 transition-colors" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors">
                                                                 {item.tag} <ChevronRight className="w-3 h-3" />
                                                            </span>
                                                       </div>
                                                  </div>

                                                  {/* Image Layer */}
                                                  <div className="md:w-[40%] relative min-h-[300px] md:min-h-full overflow-hidden">
                                                       <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                                                       />
                                                       {/* Gradients to blend image with text area */}
                                                       <div className="absolute inset-0 bg-gradient-to-r from-bg-card via-bg-card/50 to-transparent hidden md:block" />
                                                       <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/50 to-transparent md:hidden" />

                                                       {/* Code Tag */}
                                                       <div className="absolute bottom-6 right-6 bg-bg-surface/80 backdrop-blur-md border border-border-default/20 px-4 py-1.5 rounded-xl text-[9px] font-mono text-text-muted shadow-lg">
                                                            SRV-0{i + 1}.MTCH
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Highlight bar at bottom */}
                                             <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </motion.div>
                                   ))}

                              </div>

                         </div>
                    </section>
               </main>
          </div>
     );
}