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
               question: "How quickly do you respond?",
               answer: "Email within 2 hours. WhatsApp or phone within 30 minutes during business hours."
          },
          {
               question: "Do I need to have a consultation?",
               answer: "No, but we recommend it. We offer a free 20-minute call to understand your needs and recommend solutions. No sales pitch."
          },
          {
               question: "What's the best way to contact you?",
               answer: "WhatsApp or live chat for the quickest response. Email is best for detailed inquiries."
          },
          {
               question: "Are you available on weekends?",
               answer: "Limited weekend support is available. Weekday responses are the fastest."
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
                                        Meetech Solutions Analytics
                                   </div>
                                   <h2 className=" text-4xl  md:text-6xl  uppercase font-bold text-text-primary leading-[1.1] tracking-tight">
                                        Frequently asked <span className=' block text-accent'>questions</span>
                                   </h2>
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

