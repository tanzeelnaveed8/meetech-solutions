// import React from 'react';
// import { Star, Quote, ArrowRight, MapPin } from "lucide-react";
// import { TrendingUp, Clock, ThumbsUp } from "lucide-react";


// const Reviews = () => {
//      const testimonials = [
//           {
//                id: 1,
//                quote: "Within 2 weeks, we had 40 more orders per month. Our team isn't drowning in phone calls anymore. Best money we spend.",
//                author: "Ahmed",
//                title: "Restaurant Owner",
//                location: "Dubai, UAE",
//                company: "Dubai Restaurant",
//                metrics: [
//                     { label: "Orders increase", value: "+40/month", icon: <TrendingUp size={16} /> },
//                     { label: "Response time", value: "2h → 30s", icon: <Clock size={16} /> },
//                     { label: "Satisfaction", value: "↑ 35%", icon: <ThumbsUp size={16} /> }
//                ],
//                tags: ["WhatsApp Automation", "F&B"]
//           },
//           {
//                id: 2,
//                quote: "No-shows dropped from 20% to 5%. That's AED 150K extra revenue per year. Patients love the instant confirmation and reminder messages.",
//                author: "Dr. Fatima",
//                title: "Clinic Owner",
//                location: "Abu Dhabi, UAE",
//                company: "Abu Dhabi Clinic",
//                metrics: [
//                     { label: "No-shows reduced", value: "20% → 5%", icon: <TrendingUp size={16} /> },
//                     { label: "Extra Revenue", value: "AED 150K", icon: <TrendingUp size={16} /> },
//                     { label: "Patient Satisfaction", value: "↑ 90%", icon: <ThumbsUp size={16} /> }
//                ],
//                tags: ["WhatsApp Automation", "Healthcare"],
//                featured: true
//           },
//           {
//                id: 3,
//                quote: "Our repeat customer rate went from 35% to 50%. Customers love the personalized recommendations on WhatsApp. Our average order value is up 25%.",
//                author: "Layla",
//                title: "E-Commerce Founder",
//                location: "Sharjah, UAE",
//                company: "Sharjah E-Commerce",
//                metrics: [
//                     { label: "Repeat Customers", value: "35% → 50%", icon: <TrendingUp size={16} /> },
//                     { label: "Average Order Value", value: "+25%", icon: <TrendingUp size={16} /> },
//                     { label: "Customer Engagement", value: "↑ 80%", icon: <ThumbsUp size={16} /> }
//                ],
//                tags: ["WhatsApp Automation", "E-commerce"]
//           }
//      ];

//      return (
//           <section className="bg-bg-page py-24 px-page-x overflow-hidden">
//                <div className="max-w-[1440px] mx-auto">
                
                    

//                     <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                         
//                          {/* Cards Grid Area */}
// <div className="w-full">
//                               <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
//                                    {testimonials.map((t, idx) => (
//                                         <div
//                                                                           key={t.id}
//                                                                           className={` transition-all duration-1000 ease-in-out transform flex flex-col gap-10 p-6  rounded-3xl border border-border-default bg-bg-surface shadow-sm`}
//                                                                      >
                                                                          
                                       
//                                                                           {/* Quote & Metrics Column */}
//                                                                           <div className=" w-full  flex flex-col justify-between">
//                                                   <div className=" w-10  h-10 rounded-2xl flex items-center justify-center text-accent ">
//                                                        <Quote size={24} />
//                                                   </div>
//                                                                                <p className="text-headline font-normal  text-text-primary leading-relaxed mt-6 text-sm">
//                                                                                     "{t.quote}"
//                                                                                </p>
                                       
                                                                               
//                                                                           </div>
//                                              {/* Author Info Column */}
//                                              <div className=" w-full flex items-start space-y-3">
                                                 
//                                                   <div className=' ml-4'>
//                                                        <div className="pt-2">
//                                                             <h3 className="text-headline font-bold text-text-primary">{t.author}</h3>
//                                                             <p className="text-ui font-semibold text-accent">{t.title}</p>
//                                                             <p className="text-caption text-text-muted">{t.company}</p>
//                                                             <p className="text-[10px] font-bold text-text-disabled uppercase tracking-widest mt-1">{t.location}</p>
//                                                        </div>
                                                       

//                                                   </div>
//                                              </div>
//                                                                      </div>
//                                    ))}
//                               </div>
//                          </div>
//                     </div>
//                </div>
//           </section>
//      );
// };

// export default Reviews;


import React from "react";
import { TrendingUp, ShoppingBag, Users, Star, ArrowRight, Quote } from "lucide-react";
import { ReactNode } from "react";

const testimonials = [
     {
          id: 1,
          location: "Dubai Restaurant",
          quote: "Within 2 weeks, we had 40 more orders per month. Our team isn't drowning in phone calls anymore. Best money we spend.",
          author: "Ahmed",
          role: "Restaurant Owner",
          icon: <Quote className="w-6 h-6" />,
          tag: "Hospitality"
     },
     {
          id: 2,
          location: "Abu Dhabi Clinic",
          quote: "No-shows dropped from 20% to 5%. That's AED 150K extra revenue per year. Patients love the instant confirmation and reminder messages.",
          author: "Dr. Fatima",
          role: "Clinic Owner",
          icon: <Quote className="w-6 h-6" />,
          tag: "Healthcare"
     },
     {
          id: 3,
          location: "Sharjah E-Commerce",
          quote: "Our repeat customer rate went from 35% to 50%. Customers love the personalized recommendations on WhatsApp. Our average order value is up 25%.",
          author: "Layla",
          role: "E-Commerce Founder",
          icon: <Quote className="w-6 h-6" />,
          tag: "Retail"
     },
];

interface Testimonial {
     icon: ReactNode;
     tag: string;
     author: string;
     quote: string;
     location: string;
     role: string;
}

interface TestimonialCardProps {
     story: Testimonial;
}

// Explicit return type
const TestimonialCard: React.FC<TestimonialCardProps> = ({ story }) => {
     const feat = {
          icon: story.icon,
          tag: story.tag,
          title: story.author,
          desc: story.quote,
          location: story.location,
          role: story.role,
     };

     return (
          <div className="group relative p-8 rounded-[2rem] bg-bg-surface border border-border-subtle hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] overflow-hidden">
               {/* Subtle accent hover background */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[3] pointer-events-none" />

               <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                         <div className="w-14 h-14 rounded-2xl text-accent bg-transparent flex items-center justify-center scale-95 shadow-accent/20 transition-all duration-300 group-hover:scale-110">
                              {feat.icon}
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent-muted px-3 py-1 rounded-full border border-accent/5">
                              {feat.tag}
                         </span>
                    </div>

                    <h3 className="text-headline font-bold text-text-primary mb-1 group-hover:text-accent transition-colors text-lg">
                         {feat.title}
                    </h3>
                    <p className="text-caption text-sm text-text-muted mb-4">
                         {feat.role} • {feat.location}
                    </p>

                    <p className="text-text-body leading-relaxed text-base opacity-80 group-hover:opacity-100 transition-opacity">
                         {feat.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-1">
                         {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-accent-secondary fill-accent-secondary" />
                         ))}
                    </div>
               </div>
          </div>
     );
};

const Reviews = () => {
     return (
          <div className="min-h-screen bg-bg-page text-text-body font-sans selection:bg-accent-muted selection:text-accent">
               {/* Hero Header */}
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

               {/* Testimonials Grid */}
               <section className="px-page-x pb-24">
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                         {testimonials.map((story) => (
                              <TestimonialCard key={story.id} story={story} />
                         ))}
                    </div>
               </section>

          </div>
     );
};

export default Reviews;