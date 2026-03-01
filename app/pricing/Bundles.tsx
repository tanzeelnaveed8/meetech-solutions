"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Zap, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

const bundles = [
     {
          title: "Quick Start Growth",
          subtitle: "WhatsApp Starter + Social Starter",
          normal: 230,
          bundle: 180,
          save: 50,
          percent: "22%",
          icon: <Zap className="w-6 h-6" />,
          popular: false,
     },
     {
          title: "Complete Growth",
          subtitle: "WhatsApp Professional + Social Professional + Email",
          normal: 530,
          bundle: 420,
          save: 110,
          percent: "21%",
          icon: <Rocket className="w-6 h-6" />,
          popular: true,
     },
     {
          title: "Security & Growth",
          subtitle: "WhatsApp Professional + Social Professional + Cybersecurity 24/7",
          normal: 700,
          bundle: 560,
          save: 140,
          percent: "20%",
          icon: <ShieldCheck className="w-6 h-6" />,
          popular: false,
     },
     {
          title: "Enterprise Transformation",
          subtitle: "The Full Tech Suite + Blockchain & AI",
          normal: 2000,
          bundle: 1600,
          save: 400,
          percent: "20%",
          icon: <Tag className="w-6 h-6" />,
          plus: true,
          popular: false,
     }
];

export default function BundleSection() {
     return (
          <section className="pb-24  px-page-x bg-bg-page overflow-hidden">
          <div className="max-w-7xl mx-auto">
                    <div className=" relative pt-24 pb-12 ">
                         
                         <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4 tracking-tight uppercase">
                              Unlock Massive Value
                              <span className="text-accent block text-5xl md:text-6xl">with Bundles</span>
                         </h1>
                         <p className="text-subheading text-text-muted max-w-2xl text-lg leading-relaxed opacity-80">
                              Combine our core services to streamline your business operations while reducing your monthly overhead.
                         </p>
                    </div>
                  

                    <div className="grid gap-6">
                         {bundles.map((bundle, idx) => (
                              <motion.div
                                   key={idx}
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ delay: idx * 0.1 }}
                                   whileHover={{ scale: 1.01 }}
                                   className={`relative group flex flex-col lg:flex-row lg:items-center justify-between p-8 rounded-[2rem] border transition-all ${bundle.popular
                                             ? 'bg-bg-surface border-accent shadow-xl shadow-accent/5'
                                             : 'bg-bg-surface border-border-subtle hover:border-accent/30'
                                        }`}
                              >
                                   {bundle.popular && (
                                        <span className="absolute -top-3 left-8 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                             Most Popular
                                        </span>
                                   )}

                                   <div className="flex items-start gap-5 lg:flex-1">
                                        <div className={`p-4 rounded-2xl ${bundle.popular ? 'bg-accent text-white' : 'bg-accent-muted text-accent'}`}>
                                             {bundle.icon}
                                        </div>
                                        <div>
                                             <h3 className="text-xl font-bold text-text-primary">{bundle.title}</h3>
                                             <p className="text-text-muted text-sm mt-1 max-w-md">{bundle.subtitle}</p>
                                        </div>
                                   </div>

                                   <div className="flex flex-wrap items-center gap-8 mt-6 lg:mt-0">
                                        <div className="text-left lg:text-right">
                                             <p className="text-text-muted text-sm line-through opacity-60">
                                                  Normal: ${bundle.normal}{bundle.plus && '+'}
                                             </p>
                                             <div className="flex items-baseline gap-2">
                                                  <span className="text-3xl font-black text-text-primary">
                                                       ${bundle.bundle}{bundle.plus && '+'}
                                                  </span>
                                                  <span className="text-text-muted text-xs">/month</span>
                                             </div>
                                        </div>

                                        <div className="flex flex-col items-center">
                                             <div className="bg-success-muted text-success px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2">
                                                  Save ${bundle.save}{bundle.plus && '+'}/mo
                                                  <span className="bg-success text-white px-1.5 py-0.5 rounded text-[10px]">
                                                       {bundle.percent}
                                                  </span>
                                             </div>
                                        </div>

                                        <button className={`p-4 rounded-2xl transition-all ${bundle.popular
                                                  ? 'bg-accent text-white hover:bg-accent/90'
                                                  : 'bg-bg-subtle text-text-primary hover:bg-accent/10'
                                             }`}>
                                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                   </div>
                              </motion.div>
                         ))}
                    </div>

                    <p className="text-center text-text-muted text-xs mt-12 italic">
                         *All bundle prices are subject to 12-month commitment. Custom configurations available upon request.
                    </p>
               </div>
          </section>
     );
}