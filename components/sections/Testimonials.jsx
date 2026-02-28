import React, { useState, useEffect } from 'react';
import {
     Star,
     TrendingUp,
     Clock,
     ThumbsUp,
     DollarSign,
     ShieldCheck,
     ChevronLeft,
     ChevronRight,
     Quote
} from 'lucide-react';

const Testimonials = () => {
     const [activeIndex, setActiveIndex] = useState(0);

     const testimonials = [
          {
               id: 1,
               quote: "We implemented WhatsApp automation and immediately saw 40 more orders per month. Best AED 367/month we spend. Can't imagine going back.",
               author: "Ahmed Al-Maktoum",
               title: "Restaurant Owner",
               location: "Dubai, UAE",
               company: "Taste of Dubai Restaurant",
               metrics: [
                    { label: "Orders increase", value: "+40/month", icon: <TrendingUp size={16} /> },
                    { label: "Response time", value: "2h → 30s", icon: <Clock size={16} /> },
                    { label: "Satisfaction", value: "↑ 35%", icon: <ThumbsUp size={16} /> }
               ],
               tags: ["WhatsApp Automation", "F&B"]
          },
          {
               id: 2,
               quote: "Meetech's AI tools reduced our customer support costs by 60% in the first month. The recommendation engine added AED 500K in extra revenue. This is enterprise-quality at a fraction of the cost.",
               author: "Fatima Khan",
               title: "Founder & CEO",
               location: "Dubai, UAE",
               company: "ModernStyle E-commerce",
               metrics: [
                    { label: "Support Cost", value: "-60%", icon: <DollarSign size={16} /> },
                    { label: "Extra Revenue", value: "AED 500K+", icon: <TrendingUp size={16} /> },
                    { label: "Payback Period", value: "7 Days", icon: <Star size={16} /> }
               ],
               tags: ["AI Tools", "E-commerce"],
               featured: true
          },
          {
               id: 3,
               quote: "As a SaaS company, we needed HIPAA compliance but couldn't afford the enterprise price tags. Meetech delivered SOC 2 certification in 60 days for a fraction of what we budgeted. Our investors were impressed.",
               author: "Raj Patel",
               title: "VP Operations",
               location: "San Francisco, USA",
               company: "HealthTech Startup",
               metrics: [
                    { label: "Certification", value: "60 Days", icon: <ShieldCheck size={16} /> },
                    { label: "Cost Savings", value: "70%", icon: <DollarSign size={16} /> },
                    { label: "Investor Confidence", value: "↑↑↑", icon: <Star size={16} /> }
               ],
               tags: ["Cybersecurity", "SaaS"]
          }
     ];

     // Automatic Slider Logic
     useEffect(() => {
          const interval = setInterval(() => {
               setActiveIndex((prev) => (prev + 1) % testimonials.length);
          }, 5000); // Change every 5 seconds
          return () => clearInterval(interval);
     }, [testimonials.length]);

     const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
     const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

     return (
          <div className="min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent selection:text-text-inverse py-24">

               {/* --- MINIMAL HERO SECTION --- */}
               <section className="pt-24 pb-12 px-page-x ">
                    <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 rounded-full bg-accent-muted text-accent font-semibold text-[12px] border border-accent/10">
                         <Star size={12} fill="currentColor" /> Trusted by 500+ Global Companies
                    </div>
                    <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4 tracking-tight uppercase">
                         Real Results From <span className="text-accent block text-5xl md:text-6xl">Real Customers</span>
                    </h1>
                    <p className="text-subheading text-text-muted max-w-2xl text-lg leading-relaxed opacity-80">
                         Scaling operations, reducing costs, and increasing revenue with Meetech's integrated tech suite.
                    </p>
               </section>

               {/* --- AUTOMATIC SLIDER SECTION --- */}
               <section className="px-page-x pb-24 max-w-5xl mx-auto relative group">

                    {/* Navigation Buttons (Visible on hover) */}
                    <button
                         onClick={prevSlide}
                         className="absolute left-0 top-1/2 md:top-1/3 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 rounded-full bg-bg-surface border border-border-default shadow-sm hover:bg-accent hover:text-text-inverse transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                         <ChevronLeft size={20} />
                    </button>
                    <button
                         onClick={nextSlide}
                         className="absolute right-0 top-1/2 md:top-1/3 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 rounded-full bg-bg-surface border border-border-default shadow-sm hover:bg-accent hover:text-text-inverse transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                         <ChevronRight size={20} />
                    </button>

                    {/* Testimonial Card */}
                    <div className="relative overflow-hidden h-150 md:h-120 lg:h-[300px]">
                         {testimonials.map((t, idx) => (
                              <div
                                   key={t.id}
                                   className={`absolute inset-0 transition-all duration-1000 ease-in-out transform flex flex-col lg:flex-row gap-10 p-6 md:p-10 rounded-3xl border border-border-default bg-bg-surface shadow-sm ${idx === activeIndex
                                             ? 'opacity-100 translate-x-0 scale-100'
                                             : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
                                        }`}
                              >
                                   {/* Author Info Column */}
                                   <div className=" w-full lg:w-1/3 flex lg:flex-col items-start space-y-3">
                                        <div className=" w-14 md:w-20  h-14 md:h-20 rounded-2xl bg-accent-muted flex items-center justify-center text-accent">
                                             <Quote size={30} />
                                        </div>
                                        <div className=' ml-4'>
                                        <div className="pt-4">
                                             <h3 className="text-headline font-bold text-text-primary">{t.author}</h3>
                                             <p className="text-ui font-semibold text-accent">{t.title}</p>
                                             <p className="text-caption text-text-muted">{t.company}</p>
                                             <p className="text-[10px] font-bold text-text-disabled uppercase tracking-widest mt-1">{t.location}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                             {t.tags.map(tag => (
                                                  <span key={tag} className="px-2 py-0.5 bg-bg-subtle text-text-muted text-[9px] font-bold uppercase rounded border border-border-subtle">
                                                       {tag}
                                                  </span>
                                             ))}
                                        </div>

                                        </div>
                                   </div>

                                   {/* Quote & Metrics Column */}
                                   <div className=" w-full lg:w-2/3 flex flex-col justify-between">
                                        <p className="text-headline font-medium italic text-text-primary leading-relaxed mb-8">
                                             "{t.quote}"
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-bg-card rounded-2xl border border-accent/5">
                                             {t.metrics.map((m, i) => (
                                                  <div key={i} className="flex flex-col gap-1">
                                                       <div className="flex items-center gap-2 text-accent-secondary">
                                                            {m.icon}
                                                            <span className="text-[10px] font-bold uppercase tracking-tight opacity-70">{m.label}</span>
                                                       </div>
                                                       <span className="text-headline font-bold text-text-primary tracking-tight">{m.value}</span>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                         {testimonials.map((_, idx) => (
                              <button
                                   key={idx}
                                   onClick={() => setActiveIndex(idx)}
                                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-border-strong hover:bg-text-disabled'
                                        }`}
                              />
                         ))}
                    </div>
               </section>

          </div>
     );
};

export default Testimonials;