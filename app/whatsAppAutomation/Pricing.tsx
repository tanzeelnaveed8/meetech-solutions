
"use client"
import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Building2, Rocket, Calculator } from 'lucide-react';

const PricingPlan = () => {
     const [isAnnual, setIsAnnual] = useState(true);

     const pricingData = [
          {
               name: "Starter Plan",
               icon: <Rocket className="w-6 h-6 text-accent" />,
               setup: 25,
               monthly: 30,
               annualTotal: 385,
               description: "Best For: Startups, micro-businesses, testing the service",
               features: [
                    "Basic welcome automation",
                    "10-15 FAQ responses",
                    "Order status updates",
                    "Email support",
                    "Single industry focus"
               ],
               cta: "Start for Free",
               highlight: false
          },
          {
               name: "Professional Plan",
               icon: <Zap className="w-6 h-6 text-accent-secondary" />,
               setup: 75,
               monthly: 100,
               annualTotal: 1275,
               tag: "MOST POPULAR",
               description: "Best For: Growing businesses, restaurants, salons, retail, e-commerce",
               features: [
                    "Advanced intelligent chatbot",
                    "50+ customized responses",
                    "Order taking & payment links",
                    "Appointment booking & reminders",
                    "Broadcast campaigns (2/month)",
                    "Customer data storage",
                    "Analytics dashboard",
                    "WhatsApp + Email support",
                    "24-hour setup",
                    "One industry customization"
               ],
               roi: {
                    title: "ROI Example: Restaurant",
                    stat: "+20-30 orders/month",
                    revenue: "+AED 300K-450K revenue",
                    cost: "AED 367/month",
                    payback: "1-2 days"
               },
               cta: "Get Started Now",
               highlight: true
          },
          {
               name: "Enterprise Plan",
               icon: <Building2 className="w-6 h-6 text-accent" />,
               setup: 200,
               monthly: 250,
               annualTotal: 3200,
               description: "Best For: Large businesses, chains, enterprises, government",
               features: [
                    "Everything in Professional +",
                    "Unlimited custom responses",
                    "CRM integration",
                    "Multi-agent support",
                    "API access",
                    "Custom integrations",
                    "Unlimited broadcast campaigns",
                    "Real-time analytics",
                    "Dedicated account manager",
                    "24/7 priority support",
                    "Multiple industry customization",
                    "Custom workflows"
               ],
               cta: "Contact Sales",
               highlight: false
          }
     ];

     return (
          <div className="min-h-screen  py-24 text-text-body selection:bg-accent-muted selection:text-accent">
               {/* Hero Section */}
               <section className="pt-20 pb-12 px-page-x max-w-4xl ">
                    <h1 className="text-headline-xl text-4xl uppercase font-bold text-text-primary tracking-tight mb-4">
                         Transparent Pricing for <span className="text-accent block   md:text-6xl">Measurable Growth</span>
                    </h1>
                    <p className="text-subheading text-text-muted max-w-2xl ">
                         Choose the plan that fits your business stage. No hidden fees, just pure automation efficiency.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="mt-10 flex items-center justify-start gap-4 my-4">
                         <span className={`text-ui font-medium ${!isAnnual ? 'text-text-primary' : 'text-text-muted'}`}>Monthly</span>
                         <button
                              onClick={() => setIsAnnual(!isAnnual)}
                              className="relative w-14 h-7 bg-border-strong rounded-full p-1 transition-colors hover:bg-accent/80 focus:ring-2 focus:ring-accent focus:outline-none"
                              aria-label="Toggle annual billing"
                         >
                              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
                         </button>
                         <span className={`text-ui font-medium ${isAnnual ? 'text-text-primary' : 'text-text-muted'}`}>
                              Annual <span className="text-accent-secondary text-caption ml-1 font-bold">SAVE UP TO 15%</span>
                         </span>
                    </div>
               </section>

               {/* Pricing Grid */}
               <section className="px-page-x pb-section">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:w-3/4 lg:w-full lg:grid-cols-3 gap-8 items-start">
                         {pricingData.map((plan, idx) => (
                              <div
                                   key={idx}
                                   className={`relative flex flex-col h-full rounded-2xl border transition-all duration-300 md:mb-5 lg:my-0 ${plan.highlight
                                             ? 'border-accent ring-1 ring-accent bg-bg-surface shadow-xl scale-105 z-10'
                                             : 'border-border-default bg-bg-subtle hover:border-border-strong'
                                        }`}
                              >
                                   {plan.tag && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-secondary text-text-inverse text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                                             {plan.tag}
                                        </div>
                                   )}

                                   {/* Card Header */}
                                   <div className="p-8 border-b border-border-subtle ">
                                        <div className="flex items-center gap-3 mb-4">
                                             <div className="p-2 rounded-lg bg-accent-muted">
                                                  {plan.icon}
                                             </div>
                                             <h3 className="text-headline font-bold text-text-primary">{plan.name}</h3>
                                        </div>

                                        <div className="mb-2">
                                             <span className="text-4xl font-bold text-text-primary">
                                                  ${isAnnual ? Math.round(plan.annualTotal / 12) : plan.monthly}
                                             </span>
                                             <span className="text-text-muted">/month</span>
                                        </div>

                                        <p className="text-caption text-text-muted font-medium mb-4">
                                             + ${plan.setup} setup fee
                                        </p>

                                        <p className="text-ui text-text-body leading-tight">
                                             {plan.description}
                                        </p>
                                   </div>

                                   {/* Features List */}
                                   <div className="p-8 flex-grow">
                                        <p className="text-caption font-bold text-text-primary uppercase tracking-widest mb-4">What's Included</p>
                                        <ul className="space-y-3">
                                             {plan.features.map((feature, fIdx) => (
                                                  <li key={fIdx} className="flex items-start gap-3 group">
                                                       <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                       <span className="text-body-sm text-text-body">{feature}</span>
                                                  </li>
                                             ))}
                                        </ul>

                                        {/* ROI Highlight for Professional */}
                                        {plan.roi && (
                                             <div className="mt-8 p-4 rounded-xl bg-accent-muted border border-accent/20">
                                                  <div className="flex items-center gap-2 mb-2">
                                                       <Calculator className="w-4 h-4 text-accent" />
                                                       <span className="text-ui font-bold text-accent">{plan.roi.title}</span>
                                                  </div>
                                                  <div className="grid grid-cols-2 gap-2 text-caption font-medium">
                                                       <div className="text-text-primary">{plan.roi.stat}</div>
                                                       <div className="text-text-primary text-right">{plan.roi.payback} payback</div>
                                                  </div>
                                                  <div className="text-accent font-bold mt-1 text-ui">{plan.roi.revenue}</div>
                                             </div>
                                        )}
                                   </div>

                              </div>
                         ))}
                    </div>
               </section>

            

            
          </div>
     );
};

export default PricingPlan;