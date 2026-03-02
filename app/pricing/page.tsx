"use client"
import React from 'react'
import NeuralBackground from '@/components/background/NeuralBackground';
import { motion, AnimatePresence } from "framer-motion";
import {
     DollarSign,
     ShieldCheck,
     Star, ZapOff,
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
     Briefcase, Layout, Monitor, Smartphone
} from 'lucide-react';
import Services from './Services';
import BundleSection from './Bundles';
import PaymentTermsSection from './PaymentTermsSection';
import WhyLowPricing from './WhyLowPricing';
import { FAQs } from './FAQs';


const page = () => {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2
               }
          }
     };

     const itemVariants = {
          hidden: { y: 20, opacity: 0 },
          visible: {
               y: 0,
               opacity: 1,
               transition: { duration: 0.6, ease: "easeOut" }
          }
     };

     const philosphy = [
          {
               id: 1,
               title: "Our Approach",
               description:
                    "We price 70% cheaper than competitors because we use automation, not expensive labor. We target volume, not premium. We're direct, no agency markup. That's how we can afford to keep prices this low while maintaining 70-80% margins.",
               icon: <Zap size={20} />
          },
          {
               id: 2,
               title: "Our Promise",
               description:
                    "If you see a lower price for the same quality elsewhere, we'll match it or beat it. We're committed to being the best value in the market.",
               icon: <ShieldCheck size={20} />
          }
     ];

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
               {/* Hero Header */}

               <section className=" relative pt-20 pb-24 px-page-x overflow-hidden">
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
                              <DollarSign size={16} />
                              <span className="md:ml-1">Transparent Pricing, No Hidden Fees</span>
                         </motion.p>

                         <motion.h1
                              variants={{
                                   hidden: { opacity: 0, y: 40 },
                                   show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                              }}
                              className="text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4"
                         >
                              Simple,<span className="text-accent"> Transparent Pricing</span>
                         </motion.h1>

                         <motion.p
                              variants={{
                                   hidden: { opacity: 0, y: 30 },
                                   show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                              }}
                              className="max-w-2xl text-lg md:text-xl text-text-body leading-relaxed mx-auto"
                         >
                              Choose the plan that fits your business. Transparent pricing, no hidden fees, and full 24/7 support to help you scale effortlessly. Pay only for what you use and get instant value from day one.
                         </motion.p>
                    </motion.div>
               </section>


               {/* Pricing Philosophy Section */}
               <section className="px-page-x pb-24 overflow-hidden">
                    <div className=" relative pt-24 pb-12 ">
                         <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 rounded-full bg-accent-muted text-accent font-semibold text-[12px] border border-accent/10">
                              <Star size={12} fill="currentColor" /> Trusted by 500+ Global Companies
                         </div>
                         <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4 tracking-tight uppercase">
                              PRICING
                              <span className="text-accent block text-5xl md:text-6xl">PHILOSOPHY</span>
                         </h1>
                         <p className="text-subheading text-text-muted max-w-2xl text-lg leading-relaxed opacity-80">
                              Scaling operations, reducing costs, and increasing revenue with Meetech's integrated tech suite.
                         </p>
                    </div>
                    <motion.div
                         className="max-w-7xl mx-auto"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, margin: "-100px" }}
                         variants={containerVariants}
                    >
                         <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                              {philosphy.map((phil) => (
                                   <div
                                        key={phil.id}
                                        className="group relative p-8 rounded-[2rem] bg-bg-surface border border-border-subtle hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] overflow-hidden"
                                   >
                                        {/* Subtle accent hover background */}
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[3] pointer-events-none" />

                                        <div className="relative z-10">
                                             <div className="flex justify-between items-start mb-8">
                                                  <div className="w-14 h-14 rounded-2xl text-accent bg-bg-page border-accent p-2 flex items-center justify-center shadow-accent/20 transition-all duration-300 group-hover:scale-150">
                                                       {phil.icon}
                                                  </div>
                                             </div>

                                             <h3 className="text-headline font-bold text-text-primary mb-1 group-hover:text-accent transition-colors text-2xl tracking-wide">
                                                  {phil.title}
                                             </h3>
                                             <p className="text-caption text-sm text-text-muted mb-4">{phil.description}</p>


                                        </div>
                                   </div>
                              ))}
                         </div>

                    </motion.div>
               </section>

               {/* Services */}
               <Services />

               {/* BundleSection */}
               <BundleSection />

               {/* {PaymentTermsSection } */}
               <PaymentTermsSection />

               {/* Low Pricing */}
               <WhyLowPricing />

               {/* FAQs */}
               <FAQs />
          </div>
     );
}

export default page
