
"use client"
import React from "react";
import { TrendingUp, ShoppingBag, Users, Star, ArrowRight, ShieldCheck, Zap, Percent, MessageSquare, Cpu, Box, Lock, Share2, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Variants, Easing } from "framer-motion";


const Services = () => {

     const easeInOut: Easing = [0.42, 0, 0.58, 1]; // cubic-bezier equivalent of easeInOut

 const itemVariants: Variants = {
          hidden: {
               y: 20,
               opacity: 0,
          },
          visible: {
               y: 0,
               opacity: 1,
               transition: {
                    duration: 0.4,
                    ease: easeInOut, // must be typed Easing or Easing[]
               },
          },
     };
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.1
               }
          }
     };


     const pricingData: Service[] = [
          {
               category: "WhatsApp Automation",
               icon: <MessageSquare className="w-5 h-5" />,
               plans: [
                    { name: "Starter", setup: "25", monthly: "30" },
                    { name: "Professional", setup: "75", monthly: "100", popular: true },
                    { name: "Enterprise", setup: "200", monthly: "250" }
               ]
          },
          {
               category: "AI-Driven Tools",
               icon: <Cpu className="w-5 h-5" />,
               plans: [
                    { name: "Basic", setup: "150", monthly: "150" },
                    { name: "Advanced", setup: "300", monthly: "300", recommended: true },
                    { name: "Enterprise", setup: "600+", monthly: "600+" }
               ]
          },
          {
               category: "Blockchain Integration",
               icon: <Box className="w-5 h-5" />,
               plans: [
                    { name: "Audit", setup: "250", monthly: "0", oneTime: true },
                    { name: "Smart Contracts", setup: "350", monthly: "150" },
                    { name: "Full Integration", setup: "600+", monthly: "300+" }
               ]
          },
          {
               category: "Cybersecurity & Auditing",
               icon: <Lock className="w-5 h-5" />,
               plans: [
                    { name: "Audit", setup: "200", monthly: "0", oneTime: true },
                    { name: "24/7 Monitoring", setup: "150", monthly: "300", popular: true },
                    { name: "Full Protection", setup: "300", monthly: "600+" }
               ]
          },
          {
               category: "Social Media & Meta Ads",
               icon: <Share2 className="w-5 h-5" />,
               plans: [
                    { name: "Starter", monthly: "200" },
                    { name: "Professional", monthly: "400", popular: true },
                    { name: "Elite", monthly: "700+" }
               ]
          }
     ];


     interface Plan {
          name: string;
          setup?: string;
          monthly: string;
          recommended?: boolean;
          popular?: boolean;
          oneTime?: boolean;
     }

     interface Service {
          category: string;
          icon: React.ReactNode;
          plans: Plan[];
     }

     return (
          <section className=" relative px-page-x pb-24 ">
               <div className="max-w-7xl mx-auto">
                    {/* Hero Header */}

                    <div className=" relative pt-24 pb-12 ">
                         <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 rounded-full bg-accent-muted text-accent font-semibold text-[12px] border border-accent/10">
                              <Star size={12} fill="currentColor" /> Trusted by 500+ Global Companies
                         </div>
                         <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4 tracking-tight uppercase">
                              Complete
                              <span className="text-accent block text-5xl md:text-6xl">Service Pricing</span>
                         </h1>
                         <p className="text-subheading text-text-muted max-w-2xl text-lg leading-relaxed opacity-80">
                              Simple, transparent pricing for all our core services.
                         </p>
                    </div>

                    {/* Prices */}
                    <motion.div
                         className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         variants={containerVariants}
                    >
                         {pricingData.map((service, sIdx) => (
                              <motion.div
                                   key={sIdx}
                                   variants={itemVariants}
                                   // --- ADDED HOVER EFFECT ---
                                   whileHover={{ y: -8 }}
                                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                   className=" bg-bg-page/60 border border-border-subtle rounded-[2rem] p-8 flex flex-col hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                              >
                                   <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 bg-accent-muted text-accent rounded-xl">
                                             {service.icon}
                                        </div>
                                        <h3 className="text-ui font-bold text-text-primary">{service.category}</h3>
                                   </div>

                                   <div className="space-y-4">
                                        {service.plans.map((plan, pIdx) => (
                                             <motion.div
                                                  key={pIdx}
                                                  whileHover={{ scale: 1.02 }}
                                                  className={`p-4 rounded-2xl border transition-all cursor-default ${plan.popular || plan.recommended
                                                            ? 'bg-accent/5 border-accent/20'
                                                            : 'bg-bg-subtle border-transparent hover:border-accent/10'
                                                       }`}
                                             >
                                                  <div className="flex justify-between items-start mb-2">
                                                       <span className="text-caption font-bold text-text-primary flex items-center gap-1">
                                                            {plan.name}
                                                            {(plan.popular ?? plan.recommended) && (
                                                                 <span className="text-[8px] bg-accent text-text-inverse px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                                                                      {plan.popular ? 'Popular' : 'Recommended'}
                                                                 </span>
                                                            )}
                                                       </span>
                                                       <div className="text-right">
                                                            <p className="text-ui font-black text-text-primary leading-none">
                                                                 ${plan.monthly}
                                                                 <span className="text-[10px] font-normal text-text-muted">/mo</span>
                                                            </p>
                                                            {plan.setup && (
                                                                 <p className="text-[10px] text-text-muted mt-1">${plan.setup} setup</p>
                                                            )}
                                                       </div>
                                                  </div>
                                                  <div className="flex items-center gap-2 mt-3 opacity-60">
                                                       <Check className="w-3 h-3 text-accent" />
                                                       <span className="text-[10px] font-medium">
                                                            {plan.oneTime ? 'One-time investment' : 'Full access included'}
                                                       </span>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </motion.div>
                         ))}

                       
                    </motion.div>
               </div>
          </section>
     )
}

export default Services
