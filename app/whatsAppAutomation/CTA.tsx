
import React from 'react'
import { Zap, ShoppingCart, Calendar, ArrowUpRight} from 'lucide-react';
import Link from 'next/link';


const CTA = () => {
  return (
       <section className="relative py-24 px-6 overflow-hidden mb-20 md:mb-32">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150  rounded-lg -z-10" />

            <div

                 className="mx-auto max-w-6xl relative group"
            >
                 {/* The Card Container */}
                 <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-text-primary border border-border-default/10 p-8 md:p-20 lg:p-24 shadow-2xl">

                      {/* Subtle Mesh Background Overlay */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,#3b82f6,transparent_50%)]" />

                      <div className="relative z-10 flex flex-col items-center text-center space-y-10">

                           {/* Badge / Top Icon */}
                           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-text-primary/10 border border-border-default/20 text-accent text-sm font-medium">
                                <Zap className="w-4 h-4 fill-current" />
                                <span>Limited Availability for Q1</span>
                           </div>

                           {/* Heading with Fluid Typography */}
                           <div className="space-y-4">
                                <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-inverse leading-[1.1]">
                                     <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bg-card leading-[1.1]">
                                          Get WhatsApp Automation <br className="hidden md:block" />
                                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bg-card">
                                               Working in 24 Hours                                                </span>
                                     </h2>

                                </h2>
                                <p className="mx-auto max-w-2xl text-base` md:text-xl text-text-muted leading-relaxed">
                                     Free consultation, no credit card required, 30-day money-back guarantee.
                                </p>
                           </div>

                           {/* Action Buttons */}
                           <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <Link href="/contact" className="group w-full sm:w-auto  px-4 md:px-8 py-4 bg-accent hover:bg-card-subtle/80 text-text-primary hover:text-text-inverse rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95">
                                     Start Free Trial
                                     <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <Link href="/contact" className="group w-full sm:w-auto  px-4 md:px-8 py-4 text-accent hover:text-card-subtle/80 bg-text-primary hover:bg-text-inverse rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-accent active:scale-95">
                                     Schedule Demo
                                     <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>


                           </div>


                      </div>

                      {/* Decorative Corner Element */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl rounded-lg translate-x-10 translate-y-10" />
                 </div>
            </div>
       </section>
  )
}

export default CTA
