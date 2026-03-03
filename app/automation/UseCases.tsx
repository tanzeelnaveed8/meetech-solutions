
"use client"
import React, {useState} from 'react'
import ProjectDetail from '../work/ProjectDetail';
import { USE_CASES_DATA } from './data';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Eye } from "lucide-react"


const containerVariants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const UseCases = () => {
     type Project = {
          id: number;
          title: string;
          industry: string;
          built: string;
          timeline: string;
          result: string;
          tags: string[];
          imgUrl: string;
          description: string;
     };

     // then define state like this
     const [selectedProject, setSelectedProject] = useState<Project | null>(null);               const { scrollY } = useScroll();
          const opacity = useTransform(scrollY, [0, 400], [1, 0]);
          const scale = useTransform(scrollY, [0, 400], [1, 0.98]);
     
  return (
     <>
                 <section className=" overflow-hidden mb-40 md:mb-56 py-24 ">
   
                       <div className="mx-auto max-w-7xl px-6 md:px-8">
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                           <div className="max-w-xl space-y-6">
                                <div className="flex items-center gap-4">
                                     <span className="h-[2px] w-12 bg-accent"></span>
                                     <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Use Cases of</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tighter leading-none">
                                     WhatsApp<br />Automation
                                </h2>
                           </div>
                      </div>
   
                            <AnimatePresence mode="wait">
                                 <motion.div
                                      variants={containerVariants}
                                      initial="hidden" animate="visible" exit="hidden"
                                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                                 >
                                {USE_CASES_DATA["WhatsApp Automation"].map((item) => (
                                     <motion.div
                                          key={item.id}
                                          variants={itemVariants}
                                          layoutId={`card-${item.id}`}
                                          className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-border-subtle bg-bg-card shadow-sm hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700"
                                          onClick={() => setSelectedProject(item)}
                                     >
                                          <img
                                               src={item.imgUrl}
                                               alt={item.title}
                                               className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-bg-page via-bg-page/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                          <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full space-y-5">
                                               <div className="flex gap-2">
                                                    {item.tags.slice(0, 2).map((tag, i) => (
                                                         <span
                                                              key={i}
                                                              className="text-[10px] uppercase font-bold tracking-widest text-[#F8FAFC] bg-accent/50 px-3 py-1 rounded"
                                                         >
                                                              {tag}
                                                         </span>
                                                    ))}
                                               </div>

                                               <div>
                                                    <h3 className="text-3xl font-black text-text-primary uppercase leading-tight">{item.title}</h3>
                                                    <p className="text-text-muted font-bold text-xs uppercase tracking-widest mt-2">{item.industry}</p>
                                               </div>

                                               <div className="flex items-center gap-3 text-accent font-black text-[11px] uppercase tracking-[0.3em] translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                                                    View Case Study <ArrowRight size={16} />
                                               </div>
                                          </div>

                                          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                               <div className="bg-accent text-text-inverse p-4 rounded-2xl shadow-2xl shadow-accent/40">
                                                    <Eye size={24} />
                                               </div>
                                          </div>
                                     </motion.div>
                                ))}
                                 </motion.div>
                            </AnimatePresence>
                       </div>
   
   
   
                  </section>
                   {/* Project Detail Modal */}
                                 <AnimatePresence>
                                      {selectedProject && (
                                           <ProjectDetail
                                                project={selectedProject}
                                                close={() => setSelectedProject(null)}
                                           />
                                      )}
                                 </AnimatePresence>
     </>
                  
  )
}

