"use client"
import React, { useState } from 'react';
import {
     ChevronDown,
     Mail,
     ArrowRight,
     MessageCircle,
     ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export const FAQs = () => {
     const [openFaq, setOpenFaq] = useState(0);

     const faqs = [
          {
               question: "How long does setup take?",
               answer: "24 hours typically. We gather your information, customize your chatbot, test everything, and go live."
          },
          {
               question: "Will customers mind talking to a bot?",
               answer: "No. Customers expect instant responses. They prefer a 30-second bot response over a 2-hour human response. For complex issues, they get escalated to humans immediately."
          },
          {
               question: "Can I customize the responses?",
               answer: "Absolutely. We work with you to create custom responses for your business. Pricing, products, services, policies – all customized to you."
          },
          {
               question: "What about WhatsApp rules and limits?",
               answer: "We handle all compliance. We stay within WhatsApp limits. Your account is safe."
          },
          {
               question: "Can I integrate with my payment system?",
               answer: "Yes. We integrate with most payment systems (Stripe, JazzCash, Easypaisa, etc.)."
          },
          {
               question: "What happens if I cancel?",
               answer: "No problem. Cancel anytime. Your data is exported to you. No penalties."
          }
     ];

     return (
          <div className="min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent selection:text-text-inverse">


               {/* --- FAQ SECTION (IMAGE INSPIRED LAYOUT) --- */}
               <section className="px-page-x py-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                         {/* Left Side: Branding & Direct Contact */}
                         <div className="lg:w-5/12 space-y-10">
                              <div className="space-y-4">
                                   <div className="flex items-center gap-2 text-accent font-bold text-[11px] uppercase tracking-widest">
                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        Meetech SaaS Analytics
                                   </div>
                                   <h2 className="text-5xl  uppercase font-bold text-text-primary leading-[1.1] tracking-tight">
                                        Frequently asked <span className=' text-7xl block text-accent'>questions</span>
                                   </h2>
                              </div>

                              {/* "Still have questions?" Box - Replicating image style */}
                              <div className="p-10 rounded-[32px] bg-bg-card border border-accent/50 space-y-6 relative overflow-hidden">
                                   <div className="relative z-10">
                                        <h3 className="text-headline font-bold text-text-primary mb-3 text-xl">Still have a questions?</h3>
                                        <p className="text-ui text-text-muted leading-relaxed mb-8">
                                             Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!
                                        </p>
                                        <Link href="/contact" className="bg-accent w-fit  text-center text-text-inverse hover:bg-accent-hover px-7 py-3.5 rounded-xl font-bold transition-all flex items-center gap-3 text-ui shadow-lg shadow-accent/20 active:scale-95">
                                             Contact Us 
                                             {/* <Mail size={18} /> */}
                                        </Link>
                                   </div>
                                   {/* Subtle design element */}
                                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl" />
                              </div>
                         </div>

                         {/* Right Side: Modern Accordion List */}
                         <div className="lg:w-7/12 space-y-4">
                              {faqs.map((faq, index) => {
                                   const isOpen = openFaq === index;
                                   return (
                                        <div
                                             key={index}
                                             className={`group rounded-2xl border transition-all duration-500 ease-in-out ${isOpen
                                                       ? 'bg-bg-surface border-accent/20 shadow-[0_20px_50px_rgba(37,99,235,0.06)]'
                                                       : 'bg-bg-subtle/50 border-border-subtle hover:border-accent/10 hover:bg-bg-surface'
                                                  }`}
                                        >
                                             <button
                                                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                                  className="w-full flex items-center justify-between p-5 text-left outline-none focus:ring-2 focus:ring-accent/20 rounded-2xl"
                                             >
                                                  <span className={`text-ui font-bold transition-colors duration-500 ${isOpen ? 'text-accent text-sm ' : 'text-text-primary  md:text-[18px]'}`}>
                                                       {faq.question}
                                                  </span>
                                                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-500 ${isOpen
                                                            ? 'bg-accent text-text-inverse rotate-180'
                                                            : 'bg-white border border-border-default text-text-disabled group-hover:border-accent/30 group-hover:text-accent'
                                                       }`}>
                                                       <ChevronDown size={18} strokeWidth={2.5} />
                                                  </div>
                                             </button>

                                             <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                                  <div className="overflow-hidden">
                                                       <div className="px-7 pb-8 text-ui md:text-[16px] leading-relaxed text-text-muted">
                                                            <div className="pt-4 border-t border-border-subtle/50">
                                                                 {faq.answer}
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>

                    </div>
               </section>


          </div>
     );
};

