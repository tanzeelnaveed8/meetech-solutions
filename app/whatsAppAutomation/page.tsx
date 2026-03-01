

"use client"
import React, { useState, useEffect } from 'react';
import {
     MessageCircle,
     CheckCircle2,
     HelpCircle, ZapOff,
     Zap, ShoppingCart,
     Calendar, ArrowUpRight,
     Users, CheckIcon,
     BarChart3,
     Megaphone,
     Sparkles,
     TrendingUp,
     Store,
     Scissors,
     Building2,
     Stethoscope, Eye,
     Briefcase, Bot,
     CreditCard,
} from 'lucide-react';
import NeuralBackground from '@/components/background/NeuralBackground';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { UseCases } from "./UseCases"
import Problems from './Problems';
import { Pricing } from '@/components/sections/Pricing';
import PricingPlan from './Pricing';
import { FAQs } from './FAQs';
import Reviews from "./Reviews"
import CTA from './CTA';
import { WHATSAPP_SERVICES } from './data';

const Page = () => {
     const [visibleMessages, setVisibleMessages] = useState(0);
     const reduce = Boolean(useReducedMotion());
     const ease = [0.25, 0.46, 0.45, 0.94] as const;
     const duration = 0.5;
     const [selectedServiceId, setSelectedServiceId] = useState<string>("ios");
     const selected = WHATSAPP_SERVICES.find((s) => s.id === selectedServiceId) ?? WHATSAPP_SERVICES[0];
     const { scrollY } = useScroll();
     const opacity = useTransform(scrollY, [0, 400], [1, 0]);
     const scale = useTransform(scrollY, [0, 400], [1, 0.98]);


     const features = [
          {
               icon: <Zap className="w-6 h-6" />,
               tag: "Speed",
               title: "Intelligent Chatbot",
               desc: `
• Responds to customer questions in under 30 seconds  
• Learns your products, services, and pricing  
• Handles FAQs automatically  
• Escalates complex issues to human agents  
• Supports multiple customer languages  

Benefits:
• Faster response vs manual replies  
• Higher trust and engagement  
• More conversions from instant replies
`,
          },
          {
               icon: <ShoppingCart className="w-6 h-6" />,
               tag: "Revenue",
               title: "Order Management",
               desc: `
• Customers place orders directly on WhatsApp  
• Automatic order confirmations  
• Real-time order status tracking  
• Instant payment link generation  
• Seamless payment system integration  

Benefits:
• Faster checkout experience  
• Reduced abandoned carts  
• More monthly orders and revenue growth
`,
          },
          {
               icon: <Calendar className="w-6 h-6" />,
               tag: "Efficiency",
               title: "Appointment Booking",
               desc: `
• Book appointments directly via chat  
• Automatic calendar synchronization  
• Reminder messages 24 hours before  
• Automatic cancellation handling  
• Reduce no-shows by up to 40%  

Benefits:
• Fewer missed appointments  
• Better schedule management  
• Increased monthly bookings
`,
          },
          {
               icon: <Users className="w-6 h-6" />,
               tag: "Data",
               title: "Customer Data Management",
               desc: `
• Save every customer interaction  
• Access complete customer history  
• Automatically record preferences  
• Segment users based on behavior  
• Build your database automatically  

Benefits:
• Personalized communication  
• Stronger customer loyalty  
• Smarter remarketing campaigns
`,
          },
          {
               icon: <Megaphone className="w-6 h-6" />,
               tag: "Growth",
               title: "Broadcast Campaigns",
               desc: `
• Send promotions to selected segments  
• Announce new products and launches  
• Share birthday and anniversary offers  
• Invite customers to events  
• Fully compliant with WhatsApp policies  

Benefits:
• Higher repeat purchases  
• Increased engagement rates  
• Improved customer lifetime value
`,
          },
          {
               icon: <BarChart3 className="w-6 h-6" />,
               tag: "Insight",
               title: "Payment Integration",
               desc: `
• Send secure payment links in chat  
• Multiple payment options supported  
• Instant payment confirmation  
• Automatic digital receipts  
• Secure transaction processing  

Benefits:
• Faster payment completion  
• Better customer convenience  
• Higher successful payment rates
`,
          },
     ];

     const results = [
          { label: "Restaurants", metric: "+20-30", unit: "orders/month", icon: <Store /> },
          { label: "Salons", metric: "40%", unit: "fewer no-shows", icon: <Scissors /> },
          { label: "E-commerce", metric: "15-20%", unit: "conversion lift", icon: <TrendingUp /> },
          { label: "Real Estate", metric: "30%", unit: "more qualified leads", icon: <Building2 /> },
     ];

     const targetIndustries = [
          { name: "Restaurants & Food Delivery", icon: <Store className="w-5 h-5" /> },
          { name: "Salons, Spas & Beauty Clinics", icon: <Scissors className="w-5 h-5" /> },
          { name: "Retail Stores & E-commerce", icon: <TrendingUp className="w-5 h-5" /> },
          { name: "Real Estate Developers", icon: <Building2 className="w-5 h-5" /> },
          { name: "Healthcare Clinics", icon: <Stethoscope className="w-5 h-5" /> },
          { name: "Professional Services", icon: <Briefcase className="w-5 h-5" /> },
     ];

     // Animation logic for the chat container
     useEffect(() => {
          const timer = setInterval(() => {
               setVisibleMessages((prev) => (prev < 3 ? prev + 1 : 1));
          }, 2500);
          return () => clearInterval(timer);
     }, []);
     return (
          <div className="relative min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent selection:text-text-inverse">
               <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-chat { animation: fadeInSlide 0.8s ease-out forwards; }
      `}</style>

               {/* Decorative Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

               <NeuralBackground />
               {/* --- HERO SECTION --- */}
               <section className="relative pt-20 pb-16 px-page-x overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] blur-[120px] rounded-full -z-10" />

                    <motion.div
                         initial="hidden"
                         animate="show"
                         variants={{
                              hidden: {},
                              show: {
                                   transition: { staggerChildren: 0.15 }
                              }
                         }}
                         className="max-w-5xl mx-auto text-center space-y-6"
                    >
                         <motion.p
                              variants={{
                                   hidden: { opacity: 0, y: 30 },
                                   show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                              }}
                              className="text-subheading text-accent font-semibold uppercase tracking-wider text-sm flex items-center justify-center space-x-2"
                         >
                              <MessageCircle size={16} />
                              <span className="ml-1">Your 24/7 Sales & Support Team</span>
                         </motion.p>

                         <motion.h1
                              variants={{
                                   hidden: { opacity: 0, y: 40 },
                                   show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                              }}
                              className="text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4"
                         >
                              WhatsApp<span className="text-accent"> Automation</span>
                         </motion.h1>

                         <motion.p
                              variants={{
                                   hidden: { opacity: 0, y: 30 },
                                   show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                              }}
                              className="max-w-2xl text-lg md:text-xl text-text-body leading-relaxed mx-auto"
                         >
                              Stop missing customer inquiries. Automate 80% of your WhatsApp
                              communication. Get instant responses, more sales, and happier customers.
                         </motion.p>
                         <motion.a
                              variants={{
                                   hidden: { opacity: 0, y: 30 },
                                   show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                              }}
                              href="/contact" className="group w-fit   px-4 md:px-8 py-4 bg-accent hover:bg-card-subtle/80 text-text-primary hover:text-text-inverse rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95 mx-auto">
                              Start Free Trial
                              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </motion.a>
                    </motion.div>
               </section>
               {/* --- PROBLEMS & SOLUTIONS SECTION (RE-DESIGNED) --- */}
               <Problems />
               {/* Features Grid */}

{/* 
               <div className="  relative mx-auto max-w-5xl">

                    <motion.section
                         aria-labelledby="why-heading"
                         className="border-t border-border-default py-12 md:py-16"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, margin: "-40px" }}
                         variants={reduce ? {} : { hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } } }}
                    >
                         <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-text-primary md:text-2xl">
                              Key Features of <span className=' block text-accent text-5xl '> WhatsApp Automation</span>
                         </h2>
                         <motion.p
                              className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-text-body md:text-base"
                              variants={reduce ? {} : { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                              transition={{ duration, ease }}
                         >
                              Powerful automation tools designed to respond instantly, manage orders, book appointments, collect payments, and grow your customer relationships, all directly inside WhatsApp.
                         </motion.p>

                         <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10">
                              <nav
                                   aria-label="Service categories"
                                   className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:grid-rows-6"
                              >
                                   {WHATSAPP_SERVICES.map((s) => {
                                        const isActive = selectedServiceId === s.id;
                                        return (
                                             <motion.button
                                                  key={s.id}
                                                  type="button"
                                                  onClick={() => setSelectedServiceId(s.id)}
                                                  whileHover={reduce ? undefined : { scale: 1.02 }}
                                                  whileTap={reduce ? undefined : { scale: 0.98 }}
                                                  className={`flex items-center justify-center rounded-xl border-2 px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page md:py-4 md:text-base ${isActive
                                                       ? "border-accent bg-accent text-text-inverse shadow-lg"
                                                       : "border-border-default bg-bg-card text-text-primary hover:border-accent/40 hover:bg-bg-subtle hover:shadow-md"
                                                       }`}
                                             >
                                                  {s.title}
                                             </motion.button>
                                        );
                                   })}
                              </nav>

                              <motion.div
                                   layout
                                   className="relative overflow-hidden rounded-2xl border-2 border-border-default border-l-4 border-t-4 border-l-accent border-t-accent bg-bg-card"
                              >
                                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-secondary/5" aria-hidden />
                                   <div className="relative p-6 md:p-8">
                                        <AnimatePresence mode="wait">
                                             <motion.div
                                                  key={selectedServiceId}
                                                  initial={reduce ? undefined : { opacity: 0, x: 16 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                                                  transition={{ duration: 0.3, ease }}
                                                  className="space-y-6"
                                             >
                                                  <h3 className="text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                                                       {selected.title}
                                                  </h3>
                                                  <p className="text-[0.9375rem] leading-relaxed text-text-body md:text-base">
                                                       {selected.boldPhrase ? (
                                                            <>
                                                                 {selected.description.split(selected.boldPhrase)[0]}
                                                                 <strong className="font-semibold text-text-primary">{selected.boldPhrase}</strong>
                                                                 {selected.description.split(selected.boldPhrase)[1]}
                                                            </>
                                                       ) : (
                                                            selected.description
                                                       )}
                                                  </p>
                                                  <ul className="space-y-3" role="list">
                                                       {selected.bullets.map((item, i) => (
                                                            <motion.li
                                                                 key={item}
                                                                 initial={reduce ? undefined : { opacity: 0, x: -8 }}
                                                                 animate={{ opacity: 1, x: 0 }}
                                                                 transition={{ duration: 0.25, delay: i * 0.04, ease }}
                                                                 className="flex items-center gap-3 rounded-lg border border-border-default bg-bg-surface px-4 py-3"
                                                            >
                                                                 <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-text-inverse">
                                                                      <CheckIcon />
                                                                 </span>
                                                                 <span className="text-[0.9375rem] font-medium text-text-body md:text-base">{item}</span>
                                                            </motion.li>
                                                       ))}
                                                  </ul>
                                             </motion.div>
                                        </AnimatePresence>
                                   </div>
                              </motion.div>
                         </div>
                    </motion.section>
               </div> */}
               {/* --- RESULTS BAR --- */}
               <section className="px-page-x py-20 bg-bg-subtle/50 relative">
                    <div className="max-w-7xl mx-auto relative">
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
                              {results.map((item, i) => (
                                   <div key={i} className="group relative">
                                        {/* Vertical Divider for desktop */}
                                        {i !== 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border-default" />}

                                        <div className="px-8 py-6 rounded-3xl transition-all duration-300 hover:bg-bg-surface/80 hover:shadow-xl hover:shadow-accent/5 lg:hover:-translate-y-1">
                                             <div className="flex flex-col items-center lg:items-start space-y-3">
                                                  <div className="w-10 h-10 rounded-xl bg-accent-muted text-accent flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:text-text-inverse">
                                                       {item.icon}
                                                  </div>
                                                  <div>
                                                       <div className="flex items-baseline gap-1 justify-center lg:justify-start">
                                                            <span className="text-3xl font-black text-text-primary tracking-tight">{item.metric}</span>
                                                       </div>
                                                       <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1">
                                                            {item.unit}
                                                       </div>
                                                       <div className="text-ui font-bold text-text-body">
                                                            {item.label}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* --- FEATURES GRID --- */}
               <section className=" relative py-20 px-page-x max-w-7xl mx-auto relative">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 -mr-20 mt-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="mb-20 space-y-4">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent font-bold text-[10px] uppercase tracking-widest border border-accent/10">
                              Platform Capabilities
                         </div>
                         <h2 className="text-headline-lg font-bold text-text-primary tracking-tight text-5xl uppercase">
                              Powerful Key <span className="text-accent block text-7xl">Features</span>
                         </h2>
                         <p className="text-text-muted max-w-xl text-subheading">
                              Everything you need to automate your customer communication flow from start to finish.
                         </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {features.map((feat, i) => (
                              <div
                                   key={i}
                                   className="group relative p-8 rounded-[2rem] bg-bg-surface border border-border-subtle hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] overflow-hidden"
                              >
                                   <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[3] pointer-events-none" />

                                   <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                             <div className="w-14 h-14 rounded-2xl bg-accent text-text-inverse flex items-center justify-center shadow-lg shadow-accent/20 transition-transform duration-300">
                                                  {feat.icon}
                                             </div>
                                             <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent-muted px-3 py-1 rounded-full">
                                                  {feat.tag}
                                             </span>
                                        </div>

                                        <h3 className="text-headline font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                                             {feat.title}
                                        </h3>

                                        <div className="text-text-body leading-relaxed text-body-sm opacity-80 group-hover:opacity-100 transition-opacity whitespace-pre-line">
                                             {feat.desc}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </section>
               {/* Portfolio Content */}


               <UseCases />
               {/* --- WHO IT'S FOR --- */}
               <section className=" relative py-20 px-page-x bg-accent-muted/60 text-text-inverse overflow-hidden relative">
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                         <MessageCircle size={400} />
                    </div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                         <div className="space-y-6">
                              <h2 className="text-text-primary font-bold leading-tight text-4xl">Tailored Solutions for  <span className="text-accent block text-6xl">Every Industry</span></h2>
                              <p className="text-text-primary/70 text-subheading">We build bespoke automation logic that understands the specific needs of your business niche.</p>

                              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                   {targetIndustries.map((ind, i) => (
                                        <div key={i} className=" group flex items-center gap-3 p-4 rounded-xl hover:bg-accent/20 border border-border-default hover:border-accent transition-all duration-300">
                                             <div className="text-accent">{ind.icon}</div>
                                             <span className="text-accent/85 font-medium group-hover:text-accent">{ind.name}</span>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* NEW: Chat Animation Section (Product Demo) */}
                         <section className="max-w-6xl mx-auto px-6 mb-24 grid gap-12 items-center">


                              <div className="relative rounded-3xl overflow-hidden bg-[var(--bg-surface)] p-2 shadow-2xl border border-[var(--border-default)]">
                                   <div className="bg-[var(--bg-subtle)] rounded-2xl p-8 text-[var(--text-body)] min-h-[400px]">
                                        {/* Header */}
                                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--border-subtle)]">
                                             <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white">
                                                  <MessageCircle size={20} />
                                             </div>
                                             <div>
                                                  <p className="font-bold text-[var(--text-primary)]">Meetech AI</p>
                                                  <p className="text-xs text-accent">Online • Typical response 30s</p>
                                             </div>
                                        </div>

                                        {/* Chat Body */}
                                        <div className="space-y-4">
                                             {visibleMessages >= 1 && (
                                                  <div className="bg-[var(--border-subtle)] p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm animate-chat">
                                                       Hello! Welcome to our store. How can I help you today?
                                                  </div>
                                             )}
                                             {visibleMessages >= 2 && (
                                                  <div className="bg-[var(--accent-primary)] text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-sm animate-chat">
                                                       I'd like to book an appointment for a haircut tomorrow.
                                                  </div>
                                             )}
                                             {visibleMessages >= 3 && (
                                                  <div className="bg-[var(--border-subtle)] p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm animate-chat">
                                                       Great! We have slots at 10:00 AM and 2:30 PM. Which one works for you?
                                                  </div>
                                             )}
                                        </div>
                                   </div>
                              </div>
                         </section>

                    </div>
               </section>

               {/* --- PRICING --- */}

               <PricingPlan />

               <FAQs />
               <Reviews />
               {/* --- FOOTER CTA --- */}
               <CTA />
          </div>
     );
};

export default Page;