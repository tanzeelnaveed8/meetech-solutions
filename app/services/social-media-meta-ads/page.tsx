
"use client"
import React, { useState, useEffect } from 'react';
import {
     CheckCircle2,
     Clock,
     Zap, ShoppingCart,
     Calendar, ArrowUpRight,
     Cloud, Landmark, Factory,
     Facebook,
     SpaceIcon,
     Linkedin,
     Mail,
     BarChart2,
     Users,
     Coffee,
     Scissors,
     Home,
     Briefcase,
     Radar,
     ShieldCheck,
     BadgeCheck,
     HeartHandshake
} from 'lucide-react';
import NeuralBackground from '@/components/background/NeuralBackground';
import Link from 'next/link';


const App = () => {
     const [activeTab, setActiveTab] = useState('Restaurants');

     const features = [
          { icon: <Facebook className="w-6 h-6" />, tag: "Social Ads", title: "Meta Ads Management", desc: "Create and manage Facebook & Instagram campaigns for maximum engagement." },
          { icon: <SpaceIcon className="w-6 h-6" />, tag: "Search Ads", title: "SpaceIcon Ads Campaigns", desc: "Targeted SpaceIcon Ads to drive traffic and conversions efficiently." },
          { icon: <Linkedin className="w-6 h-6" />, tag: "B2B", title: "LinkedIn Advertising", desc: "Reach the right professional audience with precise LinkedIn campaigns." },
          { icon: <Mail className="w-6 h-6" />, tag: "Email", title: "Email Marketing & Sequences", desc: "Automated email sequences to nurture leads and increase engagement." },
          { icon: <BarChart2 className="w-6 h-6" />, tag: "Analytics", title: "Analytics & ROI Tracking", desc: "Measure campaign performance and optimize for the best return on investment." },
          { icon: <Users className="w-6 h-6" />, tag: "Influencer", title: "Influencer Coordination", desc: "Collaborate with influencers to expand brand reach and visibility." },
     ];

     const results = [
          { label: "Return on Ad Spend", metric: "5-10x", unit: "ROAS achieved", icon: <BarChart2 /> },
          { label: "WhatsApp Conversions", metric: "40-60%", unit: "higher conversion rates", icon: <Users /> },
          { label: "Repeat Customers", metric: "20-30%", unit: "increase in returning clients", icon: <HeartHandshake /> },
          { label: "Organic Reach", metric: "2-3x", unit: "growth in audience", icon: <Radar /> },
     ];

     const targetIndustries = [
          { name: "E-commerce & DTC Brands", icon: <ShoppingCart className="w-5 h-5" /> },
          { name: "SaaS & Tech Startups", icon: <Cloud className="w-5 h-5" /> },
          { name: "Restaurants & Food Delivery", icon: <Coffee className="w-5 h-5" /> },
          { name: "Salons & Beauty Brands", icon: <Scissors className="w-5 h-5" /> },
          { name: "Real Estate", icon: <Home className="w-5 h-5" /> },
          { name: "Professional Services", icon: <Briefcase className="w-5 h-5" /> },
     ];
     return (
          <div className="relative min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent selection:text-text-inverse">
               {/* Decorative Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

               <NeuralBackground />
               {/* --- HERO SECTION --- */}
               <section className="relative pt-20 pb-16 px-page-x overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]  blur-[120px] rounded-full -z-10" />

                    <div className="max-w-5xl mx-auto text-center space-y-6">


                         <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                              Social Media & <span className="text-accent">Meta Ads</span>
                         </h1>

                         <p className="text-subheading text-accent-secondary font-semibold uppercase tracking-wider text-sm" />
                         Grow your audience, generate leads, increase sales                         <p className="max-w-2xl text-lg md:text-xl text-text-body leading-relaxed mx-auto">
                              Social media isn't optional anymore. It's where your customers hang out. We
                              manage your presence, create viral content, and run profitable ad campaigns that generate
                              customers (not just likes).
                         </p>
                         {/* Breadcrumb */}
                         <nav
                              // initial={{ opacity: 0, y: 20 }}
                              // animate={{ opacity: 1, y: 0 }}
                              // transition={{ duration: 0.8, delay: 0.4 }}
                              className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm"
                              aria-label="Breadcrumb"
                         >
                              <Link
                                   href="/"
                                   className="rounded-lg px-3 py-1.5 font-medium text-text-muted transition-all hover:text-accent"
                              >
                                   Home
                              </Link>
                              <span className="text-text-muted">/</span>
                              <Link
                                   href="/services"
                                   className="rounded-lg px-3 py-1.5 font-medium text-text-muted transition-all hover:text-accent"
                              >
                                   Services
                              </Link>
                              <span className="text-text-muted">/</span>
                              <span className="rounded-lg px-3 py-1.5 font-semibold text-accent ">
                                   Social Media & Meta Ads
                              </span>
                         </nav>

                    </div>
               </section>

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
                                                       <div className="text-[10px] font-black text-accent-secondary uppercase tracking-[0.2em] mb-1">
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
               <section className="py-20 px-page-x max-w-7xl mx-auto relative">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 -mr-20 mt-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="text-center mb-20 space-y-4">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent font-bold text-[10px] uppercase tracking-widest border border-accent/10">
                              Platform Capabilities
                         </div>
                         <h2 className="text-headline-lg font-bold text-text-primary tracking-tight text-5xl">
                              Powerful Key <span className="text-accent">Features</span>
                         </h2>
                         <p className="text-text-muted max-w-xl mx-auto text-subheading">
                              Everything you need to automate your customer communication flow from start to finish.
                         </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {features.map((feat, i) => (
                              <div
                                   key={i}
                                   className="group relative p-8 rounded-[2rem] bg-bg-surface border border-border-subtle hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] overflow-hidden"
                              >
                                   {/* Subtle accent hover background */}
                                   <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[3] pointer-events-none" />

                                   <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                             <div className="w-14 h-14 rounded-2xl bg-accent text-text-inverse flex items-center justify-center shadow-lg shadow-accent/20 transition-transform duration-300">
                                                  {feat.icon}
                                             </div>
                                             <span className="text-[10px] font-black uppercase tracking-widest text-accent-secondary bg-accent-muted px-3 py-1 rounded-full">
                                                  {feat.tag}
                                             </span>
                                        </div>

                                        <h3 className="text-headline font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                                             {feat.title}
                                        </h3>

                                        <p className="text-text-body leading-relaxed text-body-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                             {feat.desc}
                                        </p>


                                   </div>
                              </div>
                         ))}
                    </div>
               </section>


               {/* --- WHO IT'S FOR --- */}
               <section className="py-20 px-page-x bg-accent-muted/60 text-text-inverse overflow-hidden relative">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                         {/* LEFT SIDE */}
                         <div className="space-y-6">
                              <h2 className="text-text-primary font-bold leading-tight text-4xl">
                                   Powerful <span className="text-accent-secondary block text-6xl">AI-Driven Tools</span>
                              </h2>

                              <p className="text-text-primary/70 text-subheading">
                                   Smart automation systems that analyze data, predict outcomes, and execute tasks — so your business runs faster, leaner, and smarter.
                              </p>

                              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                   {targetIndustries.map((tool, i) => (
                                        <div
                                             key={i}
                                             className="group flex items-center gap-3 p-4 rounded-xl hover:bg-accent/20 border border-border-default hover:border-accent transition-all duration-300"
                                        >
                                             <div className="text-accent-secondary">{tool.icon}</div>
                                             <span className="text-accent/85 font-medium group-hover:text-accent">
                                                  {tool.name}
                                             </span>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* RIGHT SIDE – AI DASHBOARD PREVIEW */}
                         {/* <div className="relative rounded-3xl overflow-hidden bg-bg-surface p-4 shadow-2xl"> */}
                         {/* <AiMicrochipAnimation/> */}
                         {/* <div className="bg-bg-subtle rounded-2xl p-8 text-text-body">

                                   <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border-subtle">
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-text-primary">
                                             <Brain size={20} />
                                        </div>
                                        <div>
                                             <p className="font-bold text-text-primary">AI Intelligence Engine</p>
                                             <p className="text-caption text-accent-secondary">Live Data • Real-Time Insights</p>
                                        </div>
                                   </div>

                                   <div className="space-y-4 text-ui">

                                        <div className="bg-border-subtle p-4 rounded-2xl">
                                             📊 <span className="font-medium">Predictive Forecast:</span> Sales expected to grow 18% next month based on trend analysis.
                                        </div>

                                        <div className="bg-border-subtle p-4 rounded-2xl">
                                             🤖 <span className="font-medium">Automation Trigger:</span> 124 repetitive tasks completed automatically today.
                                        </div>

                                        <div className="bg-border-subtle p-4 rounded-2xl">
                                             🔎 <span className="font-medium">Customer Insights:</span> 32 high-intent leads identified using behavior scoring.
                                        </div>

                                        <div className="bg-accent/90 text-text-primary p-4 rounded-2xl">
                                             ⚡ System Status: All AI models running at 99.9% efficiency.
                                        </div>

                                   </div>
                              </div> */}
                         {/* </div> */}

                    </div>
               </section>

               {/* --- PRICING --- */}
               <section className="py-20 px-page-x max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <h2 className="text-headline-lg font-bold text-text-primary mb-4 text-5xl">Simple, <span className="text-accent">Transparent Pricing</span></h2>
                         <p className="text-text-muted">Choose the plan that fits your business scale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                         {/* Starter */}
                         <div className="p-8 rounded-3xl border border-border-default bg-bg-surface flex flex-col hover:border-accent">
                              <div className="mb-8">
                                   <h3 className="text-headline font-bold text-text-primary">Starter</h3>
                                   <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-text-primary">$30</span>
                                        <span className="text-text-muted">/month</span>
                                   </div>
                                   <p className="text-caption text-text-muted mt-2">+$25 setup fee</p>
                              </div>
                              <ul className="space-y-4 mb-8 flex-1">
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Basic chatbot automation</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Standard broadcast limits</span>
                                   </li>
                              </ul>
                              <button className="w-full py-3 rounded-xl border-2 border-accent text-accent font-bold hover:bg-accent-muted transition-colors">
                                   Get Started
                              </button>
                         </div>

                         {/* Professional */}
                         <div className="p-8 rounded-3xl border-2 border-accent bg-bg-surface flex flex-col relative shadow-xl scale-105 z-10">
                              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-text-inverse px-4 py-1 rounded-full text-caption font-bold tracking-wide">
                                   MOST POPULAR
                              </div>
                              <div className="mb-8">
                                   <h3 className="text-headline font-bold text-text-primary">Professional</h3>
                                   <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-text-primary">$100</span>
                                        <span className="text-text-muted">/month</span>
                                   </div>
                                   <p className="text-caption text-text-muted mt-2">+$75 setup fee</p>
                              </div>
                              <ul className="space-y-4 mb-8 flex-1">
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Advanced AI Logic</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Full CRM Integration</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Priority Support</span>
                                   </li>
                              </ul>
                              <button className="w-full py-3 rounded-xl bg-accent text-text-inverse font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                                   Go Professional
                              </button>
                         </div>

                         {/* Enterprise */}
                         <div className="p-8 rounded-3xl border border-border-default bg-bg-surface flex flex-col hover:border-accent">
                              <div className="mb-8">
                                   <h3 className="text-headline font-bold text-text-primary">Enterprise</h3>
                                   <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-text-primary">$250</span>
                                        <span className="text-text-muted">/month</span>
                                   </div>
                                   <p className="text-caption text-text-muted mt-2">+$200 setup fee</p>
                              </div>
                              <ul className="space-y-4 mb-8 flex-1">
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Unlimited Broadcasts</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Dedicated Manager</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Custom API Solutions</span>
                                   </li>
                              </ul>
                              <button className="w-full py-3 rounded-xl border-2 border-accent text-accent font-bold hover:bg-accent-muted transition-colors">
                                   Contact Sales
                              </button>
                         </div>
                    </div>
               </section>

               {/* --- FOOTER CTA --- */}
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
                                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bg-card leading-[1.1] ">
                                             Ready to transform your <br className="hidden md:block" />
                                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bg-card">
                                                  WhatsApp communication?
                                             </span>
                                        </h2>
                                        <p className="mx-auto max-w-2xl text-base` md:text-xl text-bg-page/60 leading-relaxed ">
                                             Join 50+ high-growth teams dominating their markets with Meetech's managed Chatbots partnerships.
                                        </p>
                                   </div>

                                   {/* Action Buttons */}
                                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                        <Link href="/contact" className="group w-full sm:w-auto  px-4 md:px-8 py-4 bg-accent hover:bg-accent/70 text-text-primary hover:text-text-inverse rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95">
                                             See WhatsApp Demo
                                             <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>


                                   </div>


                              </div>

                              {/* Decorative Corner Element */}
                              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl rounded-lg translate-x-10 translate-y-10" />
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default App;