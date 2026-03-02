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
               question: "How long does it take to get started?",
               answer: "Most services are live in 24-48 hours. First step is a free 20-minute consultation where we understand your needs, then we propose a solution, then we build and deploy. No lengthy onboarding."
          },
          {
               question: "Do you offer a money-back guarantee?",
               answer: "Yes. 30-day money-back guarantee on setup fees if you're not satisfied. No questions asked. We're confident you'll see value immediately."
          },
          {
               question: "Can I combine multiple services?",
               answer: "Absolutely. In fact, we recommend it. Bundling 2-3 services gives you synergies and better ROI. Bundle discounts range from 12-20%."
          },
          {
               question: "What if I only need one service?",
               answer: "You can absolutely start with just one service. Most customers begin with WhatsApp Automation or Social Media, then add AI Tools or Cybersecurity once they see results."
          },
          {
               question: "How much does a typical implementation cost?",
               answer: "It depends on your service and tier: WhatsApp Automation ($100/mo), AI Tools ($300/mo), Social Media ($400/mo), Cybersecurity ($300/mo). Most customers spend $300-600/month initially."
          },
          {
               question: "What if I don't see results?",
               answer: "We monitor everything and optimize continuously. If you don't see results within 30 days, we either refund your setup fee or pivot strategy at no charge."
          },
          {
               question: "Do you work internationally?",
               answer: "Yes. We operate in 26+ countries. Services are available globally with local support in your timezone (UAE, USA, Pakistan, India, and expanding)."
          },
          {
               question: "What about data security?",
               answer: "Data security is critical. All data is encrypted end-to-end, stored securely, never shared with third parties, and compliant with GDPR, HIPAA, and local laws."
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
                                   <h2 className=" text-4xl  md:text-6xl uppercase font-bold text-text-primary leading-[1.1] tracking-tight">
                                        Frequently asked <span className='block text-accent'>questions</span>
                                   </h2>
                              </div>

                              {/* "Still have questions?" Box - Replicating image style */}
                              <div className="p-10 rounded-[32px] bg-bg-card border border-accent/5 space-y-6 relative overflow-hidden">
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

