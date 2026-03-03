 "use client"
 import React, { useState, useEffect } from 'react';
 import {
      AlertCircle,
      CheckCircle2,
      MessageSquare,
      Users,
      TrendingUp,
      Zap,
      ArrowDown,
      Clock,
      ShieldCheck,
      Smartphone,
      ChevronDown
 } from 'lucide-react';
import { motion } from 'framer-motion';

 /**
  * Meetech Solutions - Problems and Solutions Page
  * Designed with a focus on high-conversion UI/UX.
  */

 const App = () => {
      const [activeTab, setActiveTab] = useState('problem');
      const [isMenuOpen, setIsMenuOpen] = useState(false);
const steps = [
     {
          icon: <MessageSquare />,
          title: "Inbound Message",
          desc: "A customer triggers the flow by messaging your business WhatsApp.",
          tag: "Phase 01"
     },
     {
          icon: <Zap />,
          title: "Instant AI Reply",
          desc: "Our engine analyzes intent and responds in <30s with 98% accuracy.",
          tag: "Phase 02"
     },
     {
          icon: <TrendingUp />,
          title: "Automated Conversion",
          desc: "The bot facilitates the purchase, booking, or lead capture on the spot.",
          tag: "Phase 03"
     },
     {
          icon: <Users />,
          title: "Intelligent Handoff",
          desc: "Only high-value, complex queries are routed to your human team.",
          tag: "Phase 04"
     }
];
     //   Intersection Observer for scroll animations
      useEffect(() => {
           const observer = new IntersectionObserver(
                (entries) => {
                     entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                               entry.target.classList.add('opacity-100', 'translate-y-0');
                               entry.target.classList.remove('opacity-0', 'translate-y-10');
                          }
                     });
                },
                { threshold: 0.1 }
           );

           document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
           return () => observer.disconnect();
      }, []);

      return (
           <div className=" relative min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent-muted selection:text-accent">
             

                {/* Hero Section: The Contrast */}
                <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24">
                     <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 opacity-10 blur-[120px] bg-accent"></div>
                     {/* Hero Header */}
                   
                     <div className="mx-auto max-w-7xl px-page-x">
                          <div className="pt-24 pb-12 px-page-x ">
                               <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 rounded-full bg-accent-muted text-accent font-semibold text-[12px] border border-accent/10">
                                    <AlertCircle size={12} fill="currentColor" />  The Reality Check
                               </div>
                               <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4 tracking-tight uppercase">
                                    Stop Losing Sales to<span className="text-accent block text-5xl md:text-6xl">WhatsApp Silence</span>
                               </h1>
                               <p className="text-subheading text-text-muted max-w-2xl text-lg leading-relaxed opacity-80">
                                    Businesses lose 40% of leads due to slow response times. Meetech turns your WhatsApp from a chaotic inbox into a sales-generating machine.
                               </p>
                          </div>

                          <div className="grid gap-8 lg:grid-cols-2">
                               {/* Problem Card */}
                               <div className="group relative flex flex-col rounded-3xl border border-border-subtle bg-bg-surface p-8 shadow-sm transition-all hover:border-red-200 hover:shadow-xl reveal transition-all duration-700 opacity-0 translate-y-10 delay-100">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                                         <AlertCircle size={32} />
                                    </div>
                                    <h2 className="text-headline-lg font-bold text-text-primary mb-4">The WhatsApp Problem</h2>
                                    <p className="text-body text-text-muted mb-8 italic">"We're doing okay, but our team is drowning in messages and customers are complaining about delays."</p>

                                    <ul className="space-y-6">
                                         {[
                                              { t: "Missing Sales", d: "Customers message. You respond later. They've already bought from a competitor." },
                                              { t: "Team Overwhelm", d: "Staff spends 6+ hours/day on manual replies. It’s not scalable or efficient." },
                                              { t: "Scaling Chaos", d: "More customers = More staff = Spiraling costs. Training takes weeks you don't have." }
                                         ].map((item, i) => (
                                              <li key={i} className="flex gap-4">
                                                   <div className="mt-1 flex-shrink-0 text-red-400"><AlertCircle size={20} /></div>
                                                   <div>
                                                        <h4 className="font-bold text-text-primary">{item.t}</h4>
                                                        <p className="text-body-sm text-text-body">{item.d}</p>
                                                   </div>
                                              </li>
                                         ))}
                                    </ul>
                               </div>

                               {/* Solution Card */}
                               <div className="group relative flex flex-col rounded-3xl border border-accent/20 bg-accent-muted p-8 shadow-sm transition-all hover:border-accent hover:shadow-xl reveal transition-all duration-700 opacity-0 translate-y-10 delay-200">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
                                         <CheckCircle2 size={32} />
                                    </div>
                                    <h2 className="text-headline-lg font-bold text-text-primary mb-4 text-accent">WhatsApp Automation Works</h2>
                                    <p className="text-body text-text-muted mb-8 italic">"The bot handles the noise. My team handles the relationship. We've doubled our capacity overnight."</p>

                                    <ul className="space-y-6">
                                         {[
                                              { t: "Instant Response", d: "Intelligent chatbots respond within 30 seconds, 24/7, keeping the lead hot." },
                                              { t: "Focus on Value", d: "80% of FAQs are automated. Your best people only touch complex, high-ticket deals." },
                                              { t: "Frictionless Scale", d: "Handle 10x the volume without hiring a single extra person. Costs stay flat." }
                                         ].map((item, i) => (
                                              <li key={i} className="flex gap-4">
                                                   <div className="mt-1 flex-shrink-0 text-accent-secondary"><CheckCircle2 size={20} /></div>
                                                   <div>
                                                        <h4 className="font-bold text-text-primary">{item.t}</h4>
                                                        <p className="text-body-sm text-text-body">{item.d}</p>
                                                   </div>
                                              </li>
                                         ))}
                                    </ul>
                               </div>
                          </div>
                     </div>
                </section>

                {/* How it Works Section */}
                <section className="py-32 px-page-x bg-bg-page relative">
<div className="max-w-7xl mx-auto">

     {/* Header Section */}
     <div className=" mb-24">
          <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
               The Workflow
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter uppercase leading-[0.8]">
               The <span className="text-accent">Seamless</span> <br /> Process
          </h2>
     </div>

     {/* Process Flow */}
     <div className="relative">
          {/* Central Animated Connector Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle hidden md:block -translate-x-1/2">
               <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-accent via-accent/50 to-transparent origin-top"
               />
          </div>

          <div className="grid gap-12 relative z-10">
               {steps.map((step, i) => (
                    <motion.div
                         key={i}
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ delay: i * 0.1 }}
                         className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                              }`}
                    >
                         {/* Content Side */}
                         <div className="flex-1 text-center md:text-left">
                              <span className="text-accent font-mono text-xs font-bold tracking-widest">{step.tag}</span>
                              <h3 className="text-2xl md:text-3xl font-black text-text-primary mt-2 mb-4">{step.title}</h3>
                              <p className="text-text-muted text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                                   {step.desc}
                              </p>
                         </div>

                         {/* Center Icon Bubble */}
                         <div className="relative flex-shrink-0">
                              <motion.div
                                   whileHover={{ scale: 1.1, rotate: 5 }}
                                   className="w-20 h-20 rounded-[2rem] bg-bg-surface border-2 border-border-subtle shadow-xl flex items-center justify-center text-accent z-20 relative group-hover:border-accent transition-colors"
                              >
                                   {step.icon}
                              </motion.div>
                              {/* Outer Glow */}
                              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full scale-150 -z-10" />
                         </div>

                         {/* Empty Flex-1 to balance the grid */}
                         <div className="flex-1 hidden md:block" />
                    </motion.div>
               ))}
          </div>
     </div>

     {/* Closing CTA Nudge */}
     <div className="mt-24 flex justify-center">
          <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="flex flex-col items-center gap-4 text-text-muted opacity-40"
          >
               <p className="text-[10px] uppercase font-black tracking-widest">End of Flow</p>
               <ArrowDown size={20} />
          </motion.div>
     </div>

</div>
               </section >

                {/* Results / What Happens Section */}
                <section className="py-section">
                     <div className="mx-auto max-w-7xl px-page-x">
                          <div className="rounded-[2.5rem] bg-bg-subtle border border-accent/50 hover:border-accent transition-all duration-300  p-8 md:p-16 text-text-primary overflow-hidden relative">
                               {/* Decorative background circle */}
                               <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>

                               <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center p-4 md:p-0 ">
                                    <div className="reveal transition-all duration-700 opacity-0 translate-x-[-20px]">
                                         <h2 className="text-headline-lg font-bold mb-8">The Result? <br /><span className="text-accent-secondary text-3xl">Operational Excellence.</span></h2>
                                         <div className="space-y-6">
                                              {[
                                                   "80% of incoming messages answered automatically",
                                                   "Customer satisfaction scores soar with instant replies",
                                                   "Team burnout eliminated; staff focuses on high-value work",
                                                   "Exponential scaling without the hiring headache"
                                              ].map((text, i) => (
                                                   <div key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 rounded-full p-1 text-accent-secondary">
                                                             <CheckCircle2 size={18} />
                                                        </div>
                                                        <p className="text-subheading">{text}</p>
                                                   </div>
                                              ))}
                                         </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal transition-all duration-700 opacity-0 -ml-10 md:ml-0 translate-x-[20px]">
                                         <div className="rounded-3xl bg-bg-card/50  p-8 backdrop-blur-sm border border-accent/40 text-center">
                                              <div className="text-headline-xl font-bold text-accent-secondary mb-1">80%</div>
                                              <div className="text-caption uppercase tracking-widest text-text-disabled">Auto-Answered</div>
                                         </div>
                                         <div className="rounded-3xl bg-bg-card/50 p-8 backdrop-blur-sm border  border-accent/40  text-center">
                                              <div className="text-headline-xl font-bold text-accent-secondary mb-1">{"<"}30s</div>
                                              <div className="text-caption uppercase tracking-widest text-text-disabled">Response Time</div>
                                         </div>
                                         <div className="rounded-3xl bg-bg-card/5 p-8 backdrop-blur-sm border  border-accent/40  text-center">
                                              <div className="text-headline-xl font-bold text-accent-secondary mb-1">24/7</div>
                                              <div className="text-caption uppercase tracking-widest text-text-disabled">Availability</div>
                                         </div>
                                         <div className="rounded-3xl bg-bg-card/5 p-8 backdrop-blur-sm border  border-accent/40  text-center">
                                              <div className="text-headline-xl font-bold text-accent-secondary mb-1">0</div>
                                              <div className="text-caption uppercase tracking-widest text-text-disabled">Extra Hires</div>
                                         </div>
                                    </div>
                               </div>
                          </div>
                     </div>
                </section>

             

             

             
           </div>
      );
 };

 export default App;
