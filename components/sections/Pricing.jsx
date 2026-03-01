
"use client"
import React, { useState } from 'react';
import {
     Check,
     Zap,
     ShieldCheck,
     MessageSquare,
     Cpu,
     Globe,
     Users,
     ArrowRight,
     Info,
     TrendingUp,
     Star,
} from 'lucide-react';
import Link from 'next/link';

export const Pricing = () => {
     const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

     const pricingData = {
          starter: {
               name: "Starter",
               description: "Ideal for small businesses starting their digital journey.",
               whatsapp: 30,
               ai: 150,
               blockchain: 250, // Note: Content said (1x) for starter, handled in UI
               cyber: 200, // Note: Content said (1x)
               social: 200,
          },
          professional: {
               name: "Professional",
               description: "Perfect for growing companies needing scale and speed.",
               whatsapp: 100,
               ai: 300,
               blockchain: 150,
               cyber: 300,
               social: 400,
               isPopular: true,
          },
          enterprise: {
               name: "Enterprise",
               description: "Custom-tailored solutions for large-scale operations.",
               whatsapp: 250,
               ai: 600,
               blockchain: 300,
               cyber: 600,
               social: 700,
          }
     };

     const bundles = [
          {
               title: "WhatsApp + Social Media",
               price: 420,
               savings: "15%",
               icon: <MessageSquare className="w-5 h-5 text-accent-secondary" />,
               features: ["WhatsApp Automation", "Social Media Management"]
          },
          {
               title: "WhatsApp + Social + AI",
               price: 700,
               savings: "12%",
               icon: <Cpu className="w-5 h-5 text-accent-secondary" />,
               features: ["WhatsApp Automation", "Social Media", "AI Tools"]
          },
          {
               title: "Enterprise Suite",
               price: 1600,
               savings: "20%",
               icon: <ShieldCheck className="w-5 h-5 text-accent-secondary" />,
               features: ["All 5 Core Services", "Priority 24h Support", "Dedicated Manager"]
          }
     ];

     const services = [
          { key: 'whatsapp', label: 'WhatsApp Automation', icon: <MessageSquare size={18} /> },
          { key: 'ai', label: 'AI Tools', icon: <Cpu size={18} /> },
          { key: 'blockchain', label: 'Blockchain', icon: <Globe size={18} /> },
          { key: 'cyber', label: 'Cybersecurity', icon: <ShieldCheck size={18} /> },
          { key: 'social', label: 'Social Media', icon: <Users size={18} /> },
     ];

     return (
          <div className="min-h-screen px-6 text-text-body font-sans selection:text-text-inverse">

               {/* --- HERO SECTION --- */}
               <section className="relative pt-20 pb-16 px--x overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-muted opacity-30 blur-[120px] rounded-full -z-10" />

                    <div className="max-w-4xl">
                        
                         <h1 className="text-headline-xl  text-5xl font-bold text-text-primary leading-tight tracking-tight mb-6 uppercase">
                              Simple, Transparent <span className=' block text-6xl text-accent'>Pricing</span>
                         </h1>
                         <p className="text-lg text-text-muted max-w-2xl  mb-10">
                              No hidden fees. No long-term contracts. Cancel anytime. <br className="hidden md:block" />
                              All plans include <span className="text-text-primary font-semibold">24-hour setup and support</span>.
                         </p>

          
                    </div>
               </section>

               {/* --- PRICING GRID / COMPARISON --- */}
               <section className="px--x pb-24">
                    <div className="max-w-7xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                              {Object.entries(pricingData).map(([key, plan]) => (
                                   <div
                                        key={key}
                                        className={`relative w-full md:w-3/4 lg:w-full mx-auto group flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.isPopular
                                                  ? 'bg-bg-surface border-accent ring-2 ring-accent/20 scale-105 z-10'
                                                  : 'bg-bg-surface border-border-default'
                                             }`}
                                   >
                                        {plan.isPopular && (
                                             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-text-inverse text-caption font-bold py-1 px-4 rounded-full flex items-center gap-1">
                                                  <Star size={12} fill="currentColor" /> MOST POPULAR
                                             </div>
                                        )}

                                        <div className="mb-8">
                                             {/* Plan Name changes color when container (group) is hovered */}
                                             <h3 className="text-headline font-bold text-text-primary mb-2 text-3xl group-hover:text-accent transition-colors duration-200">
                                                  {plan.name}
                                             </h3>
                                             <p className="text-ui text-text-muted leading-tight">{plan.description}</p>
                                        </div>

                                        {/* Service List Breakdown */}
                                        <div className="space-y-4 mb-10">
                                             {services.map((service) => {
                                                  const price = plan[service.key];
                                                  const isOneTime =
                                                       key === 'starter' &&
                                                       (service.key === 'blockchain' || service.key === 'cyber');

                                                  return (
                                                       <div key={service.key} className="flex items-center justify-between group">
                                                            <div className="flex items-center gap-3">
                                                                 <div className="p-2 rounded-lg bg-bg-subtle text-accent group-hover:bg-accent group-hover:text-text-inverse transition-colors duration-200">
                                                                      {service.icon}
                                                                 </div>
                                                                 <span className="text-ui font-medium text-text-body">{service.label}</span>
                                                            </div>
                                                            <div className="text-right">
                                                                 <span className="text-ui font-bold text-text-primary">
                                                                      ${price}
                                                                      {typeof price === 'number' &&
                                                                           plan.name === 'Enterprise' &&
                                                                           ['ai', 'cyber', 'social', 'blockchain'].includes(service.key)
                                                                           ? '+'
                                                                           : ''}
                                                                 </span>
                                                                 <span className="block text-[10px] text-text-muted uppercase tracking-wider font-bold">
                                                                      {isOneTime ? 'Once' : '/mo'}
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  );
                                             })}
                                        </div>

                                        <button
                                             className={`w-full py-4 px-6 rounded-xl font-bold text-ui transition-all flex items-center justify-center gap-2 ${plan.isPopular
                                                       ? 'bg-accent text-text-inverse hover:bg-accent-hover shadow-lg shadow-accent/20'
                                                       : 'bg-accent-muted text-accent hover:bg-accent/10 border border-accent/20'
                                                  }`}
                                        >
                                             Select {plan.name}
                                             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                   </div>
                              ))}

                         </div>
                    </div>
               </section>

               {/* --- POPULAR BUNDLES (High Value Section) --- */}
               <section className="px--x py-section border-y border-border-subtle relative">
                    
                    <div className="max-w-7xl mx-auto">
                         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                              <div>
                                   <h2 className="text-headline-lg text-4xl font-bold text-text-primary mb-3 uppercase">Popular Bundles</h2>
                                   <p className="text-body text-text-muted">Save significantly by combining our most requested services.</p>
                              </div>
                              <div className="hidden  md:flex flex-col items-end justify-end gap-2 text-accent font-semibold text-ui">
                                   <p className="hidden md:flex items-center gap-2 text-accent font-semibold text-ui">
                                   <TrendingUp size={20} />
                                   Save up to 20% with bundles

                                   </p>
                              <Link href='/pricing'
                                   className="w-full flex items-center justify-center sm:w-auto px-3 hover:cursor-pointer hover:text-accent duration-200 rounded-md  text-text-page transition-colors shadow-md border border-accent py-1 text-sm font-light"
                              >
                                        <span className=' mr-2'> View Full Pricing</span>
                                   <ArrowRight size={14} />
                              </Link>
                              </div>
                         </div>

                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              {bundles.map((bundle, idx) => (
                                   <div
                                        key={idx}
                                        className="bg-bg-surface p-6 rounded-2xl border border-border-default shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                                   >
                                        <div>
                                             <div className="flex justify-between items-start mb-4">
                                                  <div className="p-3 bg-accent-muted rounded-xl">
                                                       {bundle.icon}
                                                  </div>
                                                  <span className="bg-accent-secondary/10 text-accent-secondary text-caption font-bold px-3 py-1 rounded-full">
                                                       SAVE {bundle.savings}
                                                  </span>
                                             </div>
                                             <h4 className="text-subheading font-bold text-text-primary mb-4">{bundle.title}</h4>
                                             <ul className="space-y-3 mb-8">
                                                  {bundle.features.map((feat, fIdx) => (
                                                       <li key={fIdx} className="flex items-center gap-2 text-ui text-text-body">
                                                            <Check size={14} className="text-accent-secondary" /> {feat}
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>

                                        <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                                             <div>
                                                  <span className="text-headline font-bold text-text-primary">${bundle.price}+</span>
                                                  <span className="text-caption text-text-muted ml-1">/month</span>
                                             </div>
                                             <button className="text-accent font-bold text-ui hover:underline flex items-center gap-1 group">
                                                  Get Started <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                             </button>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

             
          </div>
     );
};

