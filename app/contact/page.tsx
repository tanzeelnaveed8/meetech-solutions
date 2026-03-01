"use client";

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight,} from "lucide-react";
import NeuralBackground from "@/components/background/NeuralBackground";
import { ContactForm } from "@/components/sections/ContactForm";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { Mail, Phone, MessageSquare, MapPin, Clock, Globe2, ArrowUpRight } from 'lucide-react';
import { FAQs } from "./FAQs";


export default function ContactPage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.98]);
  const reduce = Boolean(useReducedMotion());
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@meetechsolutions.com",
      note: "Response within 2 hours",
      color: "bg-blue-500/10 text-blue-500",
      link: "mailto:hello@meetechsolutions.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+1 (800) 000-0000",
      note: "Best way to reach us",
      color: "bg-success/10 text-success",
      link: "https://wa.me/18000000000"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (800) 000-0000",
      note: "9 AM - 6 PM EST",
      color: "bg-accent/10 text-accent",
      link: "tel:+18000000000"
    }
  ];

  const locations = ["Dubai, UAE", "San Francisco, USA", "Karachi, Pakistan", "Bangalore, India"];
  return (
    <div className="relative min-h-screen w-full bg-bg-page text-text-primary selection:bg-accent selection:text-text-inverse overflow-hidden font-sans transition-colors duration-500 pb-32">

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Hero Interactive Background */}
      <NeuralBackground />

      {/* Atmospheric Radial Blur */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Contact Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 py-20 text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
        >
          Let's Talk About<span className="text-accent"> Your Business </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-text-body leading-relaxed"
        >
          <span className=" text-accent font-semibold">Questions?</span> We're here to help. Free
          consultation, no obligation.
        </motion.p>

        {/* Contact Stats / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6"
        >
          {[
            { icon: <Clock />, label: "Response", val: "Within 24 Hours" },
            { icon: <MessageSquare />, label: "Consultation", val: "Free & Detailed" },
            { icon: <Phone />, label: "Support", val: "Direct Access" },
            { icon: <Mail />, label: "Follow-up", val: "Transparent Process" },
          ].map((item, idx) => (
            <div key={idx} className="px-5 py-3  rounded-xl border border-border-default bg-bg-card text-text-primary shadow-sm hover:shadow-md transition">
              <div className="mb-2 p-2 rounded-full bg-accent-muted text-accent w-fit mx-auto">
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <p className="text-sm font-medium text-text-muted">{item.label}</p>
              <p className="text-base font-bold text-accent">{item.val}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Infinite Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[9px] font-black tracking-[0.4em] uppercase text-text-muted">
          Connect
        </span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 py-16">
        <ContactForm />
      </div>
      {/* Contact Info */}
      <section className="py-24 px-page-x border-t border-border-subtle bg-bg-page overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Side: Communication Channels */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-10"
              >
                <span className="text-accent font-bold tracking-widest uppercase text-xs">Reach Out</span>
                <h2 className="text-6xl font-black text-text-primary mt-2">Get in Touch</h2>
              </motion.div>

              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    key={idx}
                    href={method.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                    // Enhanced hover: scale, shadow, and lift
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center justify-between p-6 rounded-3xl border border-border-subtle bg-bg-surface shadow-sm hover:shadow-xl hover:border-accent/30 group transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">{method.label}</p>
                        <h4 className="text-lg font-bold text-text-primary">{method.value}</h4>
                        <p className="text-[11px] text-success font-medium mt-1 flex items-center gap-1.5 opacity-80">
                          <Clock className="w-3 h-3" /> {method.note}
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-bg-subtle flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4 text-accent" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side: Locations */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-[2rem] border border-border-subtle bg-bg-surface relative group overflow-hidden"
              >
                {/* Subtle Decorative Background Blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Globe2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Global Offices</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {locations.map((loc, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors">
                        {loc}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Divider/Footer */}
                <div className="mt-10 pt-6 border-t border-border-subtle/50 text-[10px] text-text-muted uppercase tracking-widest text-center">
                  Standard Business Hours Apply
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQs />
      <FloatingCTA />
    </div>
  );
}
