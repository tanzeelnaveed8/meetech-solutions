import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight, CheckCircle2, Users } from 'lucide-react';

/**
 * MeetechCTA Component
 * * Design Philosophy:
 * 1. Visual Anchoring: Using a dark surface with an accent-glow to draw the eye at the end of a scroll.
 * 2. High-Conversion UX: Reducing friction by adding "No credit card required" / "15-min call" micro-copy.
 * 3. Modern Tech Aesthetic: Utilizing a rounded-3xl container with a subtle background mesh.
 */

const fadeIn = {
     initial: { opacity: 0, y: 30 },
     whileInView: { opacity: 1, y: 0 },
     viewport: { once: true, margin: "-100px" },
     transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
     },
};
const MeetechCTA = () => {
     return (
          <section className="relative py-24 px-6 overflow-hidden mb-20 md:mb-32">
               {/* Background Ambient Glows */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-lg -z-10" />

               <motion.div
                    {...fadeIn}
                    className="mx-auto max-w-6xl relative group"
               >
                    <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-slate-950 border border-white/10 p-8 md:p-20 lg:p-24 shadow-2xl">
                         <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,#3b82f6,transparent_50%)]" />

                         <div className="relative z-10 flex flex-col items-center text-center space-y-10">

                              {/* Badge / Top Icon */}
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                                   <Zap className="w-4 h-4 fill-current" />
                                   <span>Limited Availability</span>
                              </div>

                              {/* Heading */}
                              <div className="space-y-4">
                                   <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
                                        Ready to Transform Your <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                             Business?
                                        </span>
                                   </h2>
                                   <p className="mx-auto max-w-2xl text-base md:text-xl text-slate-400 leading-relaxed">
                                        Join 1000+ businesses that are automating, growing, and securing their operations with Meetech Solutions.
                                   </p>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                   <Link href="/signup" className="group w-full sm:w-auto px-4 md:px-8 py-4 bg-blue-600 hover:bg-blue-500 text-[#F8FAFC] rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95">
                                        Start Free Trial
                                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                   </Link>

                                   <Link href="https://calendly.com/your-booking-link" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-[#F8FAFC] border border-white/10 rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 active:scale-95">
                                        Schedule Demo
                                   </Link>
                              </div>

                              {/* Trust Indicators */}
                              <div className="pt-6 border-t border-white/5 w-full max-w-md">
                                   <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 text-sm">
                                        {[
                                             "✓ 1000+ Happy Customers",
                                             "✓ 95%+ Retention Rate",
                                             "✓ 26+ Countries",
                                             "✓ 24-Hour Deployment",
                                             "✓ 30-Day Money-Back Guarantee"
                                        ].map((trust) => (
                                             <div key={trust} className="flex items-center gap-1.5">
                                                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                                  <span>{trust}</span>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                         </div>

                         {/* Decorative Corner Element */}
                         <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl rounded-lg translate-x-10 translate-y-10" />
                    </div>
               </motion.div>
          </section>
     );
};

export default MeetechCTA;