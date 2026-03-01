
"use client"
import React, { useState, useEffect } from 'react';
import {
     MessageSquare,
     MessageCircle,
     CheckCircle2,
     Clock,
     Zap,ShoppingCart,
     Calendar, ArrowUpRight,
     Users,
     Brain,
     Database,
     Cloud,Landmark,Factory,
     Truck,
     Stethoscope,
     Shield,
     Eye,
     FileCheck,
     Lock,
     AlertTriangle,
     Scale,
     Radar,
     ShieldCheck,
     BadgeCheck,
     HeartHandshake
} from 'lucide-react';
import NeuralBackground from '@/components/background/NeuralBackground';
import Link from 'next/link';
import CybersecurityAnimation from "./CybersecurityAnimation"


const App = () => {
     const [activeTab, setActiveTab] = useState('Restaurants');

     const features = [
          { icon: <Shield className="w-6 h-6" />, tag: "Protection", title: "Security Audits", desc: "Comprehensive vulnerability assessments to identify and eliminate security gaps." },
          { icon: <Eye className="w-6 h-6" />, tag: "Monitoring", title: "24/7 Threat Detection", desc: "Real-time monitoring to detect and stop cyber threats before damage occurs." },
          { icon: <FileCheck className="w-6 h-6" />, tag: "Compliance", title: "Certifications Support", desc: "ISO, GDPR, HIPAA & SOC 2 compliance guidance with audit-ready documentation." },
          { icon: <Lock className="w-6 h-6" />, tag: "Data Security", title: "Encryption & Backup", desc: "End-to-end data encryption and secure backup systems to protect critical assets." },
          { icon: <AlertTriangle className="w-6 h-6" />, tag: "Response", title: "Incident Management", desc: "24/7 rapid response to contain, investigate, and resolve security incidents." },
          { icon: <Users className="w-6 h-6" />, tag: "Awareness", title: "Employee Training", desc: "Security awareness programs to reduce human error and internal vulnerabilities." },
     ];

     const results = [
          { label: "Threat Detection", metric: "100%", unit: "real-time monitoring coverage", icon: <Radar /> },
          { label: "Security Breaches", metric: "Zero", unit: "incidents with active monitoring", icon: <ShieldCheck /> },
          { label: "Compliance Success", metric: "First-Try", unit: "audit approval", icon: <BadgeCheck /> },
          { label: "Business Confidence", metric: "Complete", unit: "peace of mind", icon: <HeartHandshake /> },
     ];

     const targetIndustries = [
          { name: "E-commerce & Payments", icon: <ShoppingCart className="w-5 h-5" /> },
          { name: "SaaS & Tech Companies", icon: <Cloud className="w-5 h-5" /> },
          { name: "Healthcare Networks", icon: <Stethoscope className="w-5 h-5" /> },
          { name: "Finance & Fintech", icon: <Landmark className="w-5 h-5" /> },
          { name: "Data-Driven Businesses", icon: <Database className="w-5 h-5" /> },
          { name: "Regulated Industries", icon: <Scale className="w-5 h-5" /> },
     ];

     return (
          <div className="relative min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent selection:text-text-inverse">
               {/* Decorative Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

<NeuralBackground/>
               {/* --- HERO SECTION --- */}
               <section className="relative pt-20 pb-16 px-page-x overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]  blur-[120px] rounded-full -z-10" />

                    <div className="max-w-5xl mx-auto text-center space-y-6">
                         

                         <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                              Cybersecurity & <span className="text-accent">Auditing</span> 
                         </h1>

                         <p className="text-subheading text-text-secondary font-semibold  uppercase tracking-wider text-sm"/>
                              Protect your business, ensure compliance, prevent breaches
                         <p  className="max-w-2xl text-lg md:text-xl text-text-body leading-relaxed mx-auto">
                                   A data breach costs $1,000,000+ on average. Our 24/7 threat monitoring,
                                   security audits, and compliance certifications ensure your business is protected. Sleep soundly
                                   knowing your data is secure.
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
                                   Cybersecurity & Auditing
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
               <section className="py-20 px-page-x bg-accent-muted/60 text-text-inverse overflow-hidden relative flex my-16">

                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-1/2 mx-auto grid p-6 gap-16 items-center relative z-10">
                         <div className="space-y-6">
                              <h2 className="text-text-primary font-bold leading-tight text-4xl md:text-6xl">
                                   Who It’s For
                              </h2>

                              <p className="text-text-primary/70 text-subheading">
                                   Businesses looking to scale faster using automation, WhatsApp marketing, and performance-driven growth strategies.
                              </p>

                              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                   {[
                                        "E-commerce & DTC brands",
                                        "SaaS & tech startups",
                                        "Restaurants & food delivery",
                                        "Salons & beauty brands",
                                        "Real estate",
                                        "Professional services"
                                   ].map((industry, i) => (
                                        <div
                                             key={i}
                                             className="group flex items-center gap-3 p-4 rounded-xl hover:bg-accent/20 border border-border-default hover:border-accent transition-all duration-300"
                                        >
                                             <div className="text-accent-secondary">
                                                  <CheckCircle2 size={20} />
                                             </div>
                                             <span className="text-accent/85 font-medium group-hover:text-accent">
                                                  {industry}
                                             </span>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* RIGHT SIDE: TYPICAL RESULTS */}
                    <div className="relative group w-full m-6 lg:w-1/2">
                         <div className="absolute inset-0 bg-[var(--accent-primary)] blur-[100px] opacity-10 rounded-full scale-75"></div>
                         <div className="relative p-8 rounded-[2.5rem] bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl">
                              <div className="flex items-center gap-3 mb-8">
                                   <div className="w-2 h-8 bg-[var(--accent-secondary)] rounded-full"></div>
                                   <h3 className="text-2xl font-black tracking-tighter uppercase text-text-primary">
                                        Typical Results
                                   </h3>
                              </div>

                              <div className="space-y-6">
                                   {[
                                        { label: "5–10x Return on Ad Spend", desc: "Maximized ROI through optimized automation & targeting" },
                                        { label: "40–60% Higher WhatsApp Conversions", desc: "Improved engagement with automated messaging flows" },
                                        { label: "20–30% Increase in Repeat Customers", desc: "Retention strategies powered by smart campaigns" },
                                        { label: "2–3x Organic Reach Growth", desc: "Expanded visibility with AI-driven marketing systems" }
                                   ].map((result, idx) => (
                                        <div
                                             key={idx}
                                             className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-subtle)] transition-colors border border-transparent hover:border-[var(--border-subtle)]"
                                        >
                                             <div className="mt-1 bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] p-1 rounded-full">
                                                  <CheckCircle2 size={20} />
                                             </div>
                                             <div>
                                                  <h4 className="font-bold text-[var(--text-primary)] text-lg leading-tight">
                                                       {result.label}
                                                  </h4>
                                                  <p className="text-sm text-[var(--text-muted)] mt-1">
                                                       {result.desc}
                                                  </p>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                             
                         </div>
                    </div>
               </section>
               {/* --- PRICING --- */}
               <section className="py-20 px-page-x max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <h2 className="text-headline-lg font-bold text-text-primary mb-4 text-5xl">
                              Blockchain <span className="text-accent">Security Pricing</span>
                         </h2>
                         <p className="text-text-muted">Transparent protection plans for Web3 projects.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                         {/* Security Audit */}
                         <div className="p-8 rounded-3xl border border-border-default bg-bg-surface flex flex-col hover:border-accent">
                              <div className="mb-8">
                                   <h3 className="text-headline font-bold text-text-primary">Security Audit</h3>
                                   <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-text-primary">$200</span>
                                        <span className="text-text-muted">one-time</span>
                                   </div>
                              </div>
                              <ul className="space-y-4 mb-8 flex-1">
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Smart contract vulnerability scan</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Detailed risk assessment report</span>
                                   </li>
                              </ul>
                              <button className="w-full py-3 rounded-xl border-2 border-accent text-accent font-bold hover:bg-accent-muted transition-colors">
                                   Get Audit
                              </button>
                         </div>

                         {/* 24/7 Monitoring */}
                         <div className="p-8 rounded-3xl border-2 border-accent bg-bg-surface flex flex-col relative shadow-xl scale-105 z-10">
                              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-text-inverse px-4 py-1 rounded-full text-caption font-bold tracking-wide">
                                   MOST POPULAR
                              </div>
                              <div className="mb-8">
                                   <h3 className="text-headline font-bold text-text-primary">24/7 Monitoring</h3>
                                   <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-text-primary">$300</span>
                                        <span className="text-text-muted">/month</span>
                                   </div>
                                   <p className="text-caption text-text-muted mt-2">$150 setup fee</p>
                              </div>
                              <ul className="space-y-4 mb-8 flex-1">
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Real-time blockchain monitoring</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Instant threat alerts</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Incident response support</span>
                                   </li>
                              </ul>
                              <button className="w-full py-3 rounded-xl bg-accent text-text-inverse font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                                   Start Monitoring
                              </button>
                         </div>

                         {/* Full Protection */}
                         <div className="p-8 rounded-3xl border border-border-default bg-bg-surface flex flex-col hover:border-accent">
                              <div className="mb-8">
                                   <h3 className="text-headline font-bold text-text-primary">Full Protection</h3>
                                   <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-text-primary">$600+</span>
                                        <span className="text-text-muted">/month</span>
                                   </div>
                                   <p className="text-caption text-text-muted mt-2">$300 setup fee</p>
                              </div>
                              <ul className="space-y-4 mb-8 flex-1">
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Complete smart contract protection</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Continuous audits & upgrades</span>
                                   </li>
                                   <li className="flex items-start gap-3 text-ui">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Dedicated security engineer</span>
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
                                   {/* Badge / Top Icon */}
                                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-text-primary/10 border border-border-default/20 text-accent text-sm font-medium">
                                        <Zap className="w-4 h-4 fill-current" />
                                        <span>Enterprise-Grade Security</span>
                                   </div>

                                   {/* Heading */}
                                   <div className="space-y-4">
                                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bg-card leading-[1.1] ">
                                             Ready to secure your <br className="hidden md:block" />
                                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bg-card">
                                                  Digital Infrastructure?
                                             </span>
                                        </h2>
                                        <p className="mx-auto max-w-2xl text-base md:text-xl text-bg-page/60 leading-relaxed ">
                                             Protect your business from cyber threats with advanced security audits, real-time monitoring, and enterprise-level protection systems built to keep your data safe.
                                        </p>
                                   </div>

                                   {/* Action Button */}
                                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                        <Link
                                             href="/contact"
                                             className="group w-full sm:w-auto px-4 md:px-8 py-4 bg-accent hover:bg-accent/70 text-text-primary hover:text-text-inverse rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95"
                                        >
                                             Get Security Audit
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