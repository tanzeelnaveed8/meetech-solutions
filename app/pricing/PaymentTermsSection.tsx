
"use client"
import { motion } from 'framer-motion';
import { CreditCard, FileText, ShieldCheck, Headphones, CheckCircle2 } from 'lucide-react';
import { TargetAndTransition } from "framer-motion";


export default function PaymentTermsSection() {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.1 }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
     };

     // Hover animation for the cards
     const cardHover: TargetAndTransition = {
          y: -10,
          transition: {
               type: "spring", // correct type
               stiffness: 300,
               damping: 20,
          },
     };

     return (
          <section className="pb-24  px-page-x ">
               <div className="max-w-7xl mx-auto">

                    <div className=" relative pt-24 pb-12 ">

                         <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4 tracking-tight uppercase">
                              Payment &
                              <span className="text-accent block text-5xl md:text-7xl">Trust</span>
                         </h1>
                         <p className="text-subheading text-text-muted max-w-2xl text-lg leading-relaxed opacity-80">
                              Everything you need to know about our transparent terms.
                         </p>
                    </div>
                    <motion.div
                         className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                    >
                         {/* How to Pay */}
                         <motion.div
                              variants={itemVariants}
                              whileHover={cardHover}
                              className="bg-bg-surface p-8 rounded-[2rem] border border-border-subtle shadow-sm hover:shadow-xl hover:border-accent/30 transition-shadow duration-500"
                         >
                              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                   <CreditCard className="w-6 h-6" />
                              </div>
                              <h3 className="text-ui font-bold mb-4 text-text-primary">How to Pay</h3>
                              <ul className="space-y-4">
                                   <li className="flex justify-between items-center text-sm">
                                        <span className="text-text-muted">Monthly</span>
                                        <span className="font-medium text-text-primary italic opacity-60 text-xs">Auto-renew</span>
                                   </li>
                                   <motion.li
                                        whileHover={{ scale: 1.05 }}
                                        className="flex justify-between items-center text-sm bg-accent/5 p-2 rounded-lg border border-accent/10 cursor-default"
                                   >
                                        <span className="text-text-muted font-medium">Quarterly</span>
                                        <span className="text-accent font-bold">2.5% Off</span>
                                   </motion.li>
                                   <motion.li
                                        whileHover={{ scale: 1.05 }}
                                        className="flex justify-between items-center text-sm bg-success/5 p-2 rounded-lg border border-success/10 cursor-default"
                                   >
                                        <span className="text-text-muted font-medium">Annual</span>
                                        <span className="text-success font-bold">10% Off</span>
                                   </motion.li>
                              </ul>
                         </motion.div>

                         {/* Contract Terms */}
                         <motion.div
                              variants={itemVariants}
                              whileHover={cardHover}
                              className="bg-bg-surface p-8 rounded-[2rem] border border-border-subtle shadow-sm hover:shadow-xl hover:border-orange-500/30 transition-shadow duration-500"
                         >
                              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                                   <FileText className="w-6 h-6" />
                              </div>
                              <h3 className="text-ui font-bold mb-4 text-text-primary">Contract</h3>
                              <div className="space-y-3">
                                   {["No long-term contracts", "Month-to-month flexibility", "Cancel anytime", "No cancellation fees"].map((item, i) => (
                                        <motion.div
                                             key={i}
                                             whileHover={{ x: 5 }}
                                             className="flex items-center gap-3 text-sm text-text-muted"
                                        >
                                             <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                             {item}
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>

                         {/* Refund Policy */}
                         <motion.div
                              variants={itemVariants}
                              whileHover={cardHover}
                              className="bg-bg-surface p-8 rounded-[2rem] border border-border-subtle shadow-sm ring-2 ring-accent/5 hover:ring-success/20 hover:shadow-xl transition-all duration-500"
                         >
                              <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center mb-6">
                                   <ShieldCheck className="w-6 h-6" />
                              </div>
                              <h3 className="text-ui font-bold mb-4 text-text-primary">Refund Policy</h3>
                              <p className="text-sm font-bold text-success mb-2">30-Day Money-Back</p>
                              <p className="text-xs text-text-muted leading-relaxed">
                                   Setup fee refund if not satisfied. Truly "no questions asked" policy to ensure your peace of mind.
                              </p>
                         </motion.div>

                         {/* Support Included */}
                         <motion.div
                              variants={itemVariants}
                              whileHover={cardHover}
                              className="bg-bg-surface p-8 rounded-[2rem] border border-border-subtle shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-shadow duration-500"
                         >
                              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                                   <Headphones className="w-6 h-6" />
                              </div>
                              <h3 className="text-ui font-bold mb-4 text-text-primary">Support</h3>
                              <div className="space-y-3">
                                   {[
                                        { label: "Standard", text: "Email Support", color: "text-text-muted" },
                                        { label: "Pro & Above", text: "WhatsApp + Phone", color: "text-accent" },
                                        { label: "Cybersecurity+", text: "24/7 Priority Access", color: "text-red-500" }
                                   ].map((item, i) => (
                                        <motion.div
                                             key={i}
                                             whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                                             className="pb-2 border-b border-border-subtle/50 last:border-0 rounded-lg transition-colors px-1"
                                        >
                                             <p className={`text-[10px] uppercase tracking-wider font-bold ${item.color}`}>{item.label}</p>
                                             <p className="text-sm text-text-primary">{item.text}</p>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>
                    </motion.div>

                    <div className="mt-12 flex justify-center">
                         <p className="text-sm text-text-muted flex items-center gap-2 group cursor-default">
                              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse group-hover:scale-150 transition-transform" />
                              Billing system active and secure
                         </p>
                    </div>
               </div>
          </section>
     );
}