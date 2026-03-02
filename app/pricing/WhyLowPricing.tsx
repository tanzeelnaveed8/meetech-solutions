
"use client"
import { motion } from 'framer-motion';
import { Cpu, Users, Zap, BarChart3, Globe, ShieldCheck, ArrowDownCircle } from 'lucide-react';

const reasons = [
     {
          title: "Automation, Not Labor",
          desc: "We use automation wherever possible. This dramatically reduces our overhead costs.",
          icon: <Cpu className="w-6 h-6" />,
     },
     {
          title: "Volume, Not Premium",
          desc: "We target volume customers, focusing on scale rather than expensive, high-maintenance premium clients.",
          icon: <BarChart3 className="w-6 h-6" />,
     },
     {
          title: "Direct Sales",
          desc: "We sell direct to you. No expensive sales teams, middle-men, or bloated agencies involved.",
          icon: <Zap className="w-6 h-6" />,
     },
     {
          title: "Efficient Operations",
          desc: "Our lean 22-person team serves 1000+ customers. That is pure economies of scale in action.",
          icon: <Users className="w-6 h-6" />,
     },
     {
          title: "Global Presence",
          desc: "Operating across 26+ countries allows us to spread fixed costs across a massive user base.",
          icon: <Globe className="w-6 h-6" />,
     }
];

export default function WhyLowPricing() {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.15 }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
     };

     return (
          <section className="pb-24  px-page-x bg-bg-page">
               <div className="max-w-7xl mx-auto">
                    {/* Header Area */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                         <div className="max-w-xl">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-caption font-bold mb-4">
                                   <ArrowDownCircle className="w-4 h-4" />
                                   Efficiency Report
                              </div>
                              <h2 className="text-headline-lg text-3xl uppercase font-black text-text-primary leading-tight">
                                   Why our pricing <br />
                                   <span className="text-accent text-5xl md:text-7xl">is so low</span>
                              </h2>
                         </div>
                         <p className="text-text-muted max-w-sm text-ui leading-relaxed">
                              We’ve re-engineered the business model to pass every cent of operational savings back to you.
                         </p>
                    </div>

                    {/* The Efficiency Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                         {reasons.map((item, idx) => (
                              <motion.div
                                   key={idx}
                                   variants={itemVariants}
                                   whileHover={{ y: -5, backgroundColor: 'var(--bg-surface-hover)' }}
                                   className="relative group p-8 rounded-[2rem] bg-bg-surface border border-border-subtle transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden"
                              >
                                   {/* Subtle accent hover background inside the card */}
                                   <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full transition-transform duration-700 group-hover:scale-[3] pointer-events-none" />

                                   <div className="relative w-12 h-12 rounded-2xl bg-bg-page flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                   </div>

                                   <h3 className="text-ui font-bold text-text-primary mb-3">{item.title}</h3>
                                   <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                              </motion.div>
                         ))}

                         {/* Result Card - High Impact */}
                         <motion.div
                              variants={itemVariants}
                              className="lg:col-span-1 p-8 rounded-[2rem] bg-accent text-text-inverse flex flex-col justify-center relative overflow-hidden group"
                         >
                              <div className="relative z-10">
                                   <h3 className="text-ui font-bold mb-2">The Result</h3>
                                   <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-4xl font-black">70%</span>
                                        <span className="text-sm opacity-80 font-medium">Cheaper than competitors</span>
                                   </div>
                                   <div className="space-y-2 text-sm opacity-90">
                                        <p className="flex items-center gap-2">
                                             <ShieldCheck className="w-4 h-4" /> 70-80% Sustainable Margins
                                        </p>
                                        <p className="flex items-center gap-2">
                                             <ShieldCheck className="w-4 h-4" /> Zero-Debt Growth Model
                                        </p>
                                   </div>
                              </div>

                              {/* Decorative Background Element inside card */}
                              <div className="absolute top-0 right-0 w-36 h-36 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                   <BarChart3 size={160} />
                              </div>
                         </motion.div>
                    </motion.div>
                    
               </div>
          </section>
     );
}