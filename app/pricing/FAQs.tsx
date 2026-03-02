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
               question: "What's the catch? Why are you so cheap?",
               answer: "No catch. We use automation, target volume, and operate direct without agency markups. That’s how we keep prices low while maintaining quality. Check our customer reviews   quality is never sacrificed for price."
          },
          {
               question: "Do you offer annual discounts?",
               answer: "Yes. Pay annually and get 10% off. Pay quarterly and get 2.5% off."
          },
          {
               question: "What if I want a custom package?",
               answer: "We can absolutely create a custom package. Email us for a tailored quote. Enterprise customers often require specialized customization."
          },
          {
               question: "Are there setup fees?",
               answer: "Yes, all services include a one-time setup fee ranging from $25–600 depending on the service. This covers customization and deployment."
          },
          {
               question: "What's included in support?",
               answer: "Email support is included in all plans. WhatsApp and phone support are included in Professional+ plans. 24/7 support is available for Cybersecurity and Enterprise plans."
          },
          {
               question: "Can I switch plans?",
               answer: "Yes. You can upgrade or downgrade anytime. Changes take effect in the next billing cycle."
          }
     ];

     return (
          <div className="min-h-screen  pb-24  text-text-body font-sans selection:bg-accent selection:text-text-inverse">


               {/* --- FAQ SECTION (IMAGE INSPIRED LAYOUT) --- */}
               <section className="px-page-x py-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                         {/* Left Side: Branding & Direct Contact */}
                         <div className="lg:w-5/12 space-y-10">
                              <div className="space-y-4">
                                   <div className="flex items-center gap-2 text-accent font-bold text-[11px] uppercase tracking-widest">
                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        Meetech Solutions Analytics
                                   </div>
                                   <h2 className="  text-4xl  md:text-6xl uppercase font-bold text-text-primary leading-[1.1] tracking-tight">
                                        Frequently asked <span className='block text-accent'>questions</span>
                                   </h2>
                              </div>

                              {/* "Still have questions?" Box - Replicating image style */}
                              <div className="p-10 rounded-[32px] bg-bg-card border border-accent/50 hover:shadow hover:shadow-accent/80 space-y-6 relative overflow-hidden transition-all duration-300">
                                   <div className="relative z-10">
                                        <h3 className="text-headline font-bold text-text-primary mb-3">Still have a questions?</h3>
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

