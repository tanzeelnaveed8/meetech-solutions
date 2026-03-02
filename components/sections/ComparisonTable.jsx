
"use client"
import React, { useState } from 'react';
import {
     CheckCircle2,
     XCircle,
     Zap,
     Clock,
     Headphones,
     Settings,
     ShieldCheck,
     TrendingUp,
     Globe,
     Layers
} from 'lucide-react';

export const ComparisonTable = () => {
     const [activeTab, setActiveTab] = useState('Meetech');

     const comparisonData = [
          {
               factor: "Price",
               meetech: "$25-700/mo",
               local: "$1,000-5,000/mo",
               saas: "$200-2,000/mo",
               icon: <Zap className="w-5 h-5" />,
               description: "Scalable pricing models for every business size."
          },
          {
               factor: "Setup Time",
               meetech: "24-48 hours",
               local: "2-4 weeks",
               saas: "1-2 weeks",
               icon: <Clock className="w-5 h-5" />,
               description: "Lightning-fast deployment with automated onboarding."
          },
          {
               factor: "Support",
               meetech: "24/7 Dedicated",
               local: "Business hours",
               saas: "Email only",
               icon: <Headphones className="w-5 h-5" />,
               description: "Always-on assistance whenever you need it."
          },
          {
               factor: "Customization",
               meetech: "Highly customized",
               local: "Generic",
               saas: "Limited",
               icon: <Settings className="w-5 h-5" />,
               description: "Tailored solutions built for your specific workflow."
          },
          {
               factor: "Compliance",
               meetech: "Full audit",
               local: "Self-service",
               saas: "Basic",
               icon: <ShieldCheck className="w-5 h-5" />,
               description: "Enterprise-grade security and regulatory adherence."
          },
          {
               factor: "ROI Guarantee",
               meetech: "30-day guarantee",
               local: "No guarantee",
               saas: "90-day guarantee",
               icon: <TrendingUp className="w-5 h-5" />,
               description: "Risk-free partnership focused on your bottom line."
          },
          {
               factor: "Local Support",
               meetech: "Yes (Your Timezone)",
               local: "Yes (Local)",
               saas: "No (Global Only)",
               icon: <Globe className="w-5 h-5" />,
               description: "Localized expertise that speaks your language."
          },
          {
               factor: "All 5 Services",
               meetech: "Yes (Bundled)",
               local: "Pick & choose",
               saas: "Separate vendors",
               icon: <Layers className="w-5 h-5" />,
               description: "Complete ecosystem under one roof."
          }
     ];

     return (
          <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-['Work_Sans',sans-serif] selection:bg-[var(--accent-muted)] py-24">
               {/* Hero Section */}
               <header className="pt-20 pb-12 px-6 text-center mx-auto">
                    
                    <div className=' flex flex-col lg:flex-row justify-center items-center w-full text-left'>

                    <h1 className=" w-full lg:w-1/2 text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
                              <span className=" w-fit block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-[var(--accent-muted)] text-[var(--accent-primary)] rounded-full">
                                   The Competitive Edge
                              </span>
                              How Meetech Compares to <span className="text-[var(--accent-primary)] block">Other Agencies</span>
                    </h1>
                         <p className=" w-full md:w-max-4xl lg:w-1/2 text-lg text-[var(--text-body)] leading-relaxed">
                         We’ve re-engineered the agency model to provide the speed of a SaaS, the customization of a boutique firm, and the pricing of a partner that wants you to grow.
                    </p>
                    </div>
               </header>

               {/* Desktop Comparison Table */}
               <section className="hidden lg:block mx-auto px-6 mb-24">
                    <div className="overflow-hidden rounded-3xl border border-[var(--border-default)] bg-bg-surface shadow-xl shadow-blue-500/5">
                         <table className="w-full border-collapse">
                              <thead>
                                   <tr className="bg-bg-subtle">
                                        <th className="p-8 text-left font-semibold text-text-muted w-1/4">Feature Matrix</th>
                                        <th className="p-8 text-center w-1/4 relative">
                                             <div className="absolute inset-0 bg-accent opacity-[0.03]"></div>
                                             <div className="relative z-10">
                                                  <div className="text-accent font-bold text-xl mb-1">Meetech</div>
                                                  <div className="text-xs uppercase tracking-widest text-accent opacity-70">The Winner</div>
                                             </div>
                                        </th>
                                        <th className="p-8 text-center font-semibold text-[var(--text-body)] w-1/4">Local Agency</th>
                                        <th className="p-8 text-center font-semibold text-[var(--text-body)] w-1/4">Global SaaS</th>
                                   </tr>
                              </thead>
                              <tbody className="divide-y divide-[var(--border-subtle)]">
                                   {comparisonData.map((row, index) => (
                                        <tr key={index} className="group hover:bg-[var(--bg-subtle)] transition-colors">
                                             <td className="p-8">
                                                  <div className="flex items-center gap-4">
                                                       <div className="p-2.5 rounded-xl bg-bg-card text- transition-transform group-hover:scale-110">
                                                            {row.icon}
                                                       </div>
                                                       <div>
                                                            <div className="font-bold text-[var(--text-primary)]">{row.factor}</div>
                                                            <div className="text-xs text-[var(--text-muted)] mt-0.5">{row.description}</div>
                                                       </div>
                                                  </div>
                                             </td>
                                             <td className="p-8 text-center bg-[var(--accent-muted)]/30">
                                                  <div className="inline-flex items-center gap-2 font-bold text-[var(--accent-primary)] text-lg">
                                                       <CheckCircle2 className="w-5 h-5 fill-[var(--accent-primary)] text-white" />
                                                       {row.meetech}
                                                  </div>
                                             </td>
                                             <td className="p-8 text-center text-[var(--text-body)] font-medium">
                                                  {row.local}
                                             </td>
                                             <td className="p-8 text-center text-[var(--text-body)] font-medium">
                                                  {row.saas}
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </section>

               {/* Mobile/Tablet Card Layout */}
               <section className="lg:hidden px-6 mb-20 space-y-6 max-w-2xl mx-auto">
                    {/* Toggle Controls */}
                    <div className="flex p-1 bg-[var(--bg-card)] rounded-2xl mb-8">
                         {['Meetech', 'Local Agency', 'Global SaaS'].map((tab) => (
                              <button
                                   key={tab}
                                   onClick={() => setActiveTab(tab)}
                                   className={`flex-1 py-3 px-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab
                                             ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                                             : 'text-[var(--text-muted)]'
                                        }`}
                              >
                                   {tab}
                              </button>
                         ))}
                    </div>

                    {comparisonData.map((item, idx) => (
                         <div
                              key={idx}
                              className={`p-6 rounded-2xl border transition-all ${activeTab === 'Meetech'
                                        ? 'border-[var(--accent-primary)] bg-[var(--accent-muted)]/10 ring-1 ring-[var(--accent-primary)]/20'
                                        : 'border-[var(--border-default)] bg-[var(--bg-surface)]'
                                   }`}
                         >
                              <div className="flex items-center gap-4 mb-4">
                                   <div className={`p-3 rounded-xl ${activeTab === 'Meetech' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] text-[var(--accent-primary)]'}`}>
                                        {item.icon}
                                   </div>
                                   <h3 className="font-bold text-lg">{item.factor}</h3>
                              </div>
                              <div className="flex items-center justify-between">
                                   <span className="text-[var(--text-muted)] text-sm">{item.description}</span>
                                   <span className={`text-xl font-bold ${activeTab === 'Meetech' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>
                                        {activeTab === 'Meetech' ? item.meetech : activeTab === 'Local Agency' ? item.local : item.saas}
                                   </span>
                              </div>
                         </div>
                    ))}
               </section>

          </div>
     );
};

