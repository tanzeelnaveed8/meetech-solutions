"use client";

import { useReducedMotion, motion } from "framer-motion";
import {
  UserCheck,
  Target,
  PackageCheck,
  RefreshCcw,
} from "lucide-react"; // Lucide icons
import { EASE, DURATION, STAGGER_DELAY, STAGGER_DELAY_CHILDREN } from "@/lib/constants";

const PROCESS_STEPS = [
  {
    id: "consultation",
    order: 1,
    name: "Initial Consultation (Free)",
    description:
      "We understand your business, your goals, and your challenges. No sales pitch. Just an honest assessment of what you need. Duration: 20 minutes",
    icon: "consultation",
  },
  {
    id: "strategy",
    order: 2,
    name: "Customized Strategy",
    description:
      "We recommend which services will give you the best ROI. You choose what makes sense for your business. Duration: 24 hours",
    icon: "strategy",
  },
  {
    id: "deployment",
    order: 3,
    name: "Rapid Deployment",
    description:
      "We set everything up and go live. Most services go live in 24-48 hours. Duration: 24-48 hours",
    icon: "deployment",
  },
  {
    id: "optimization",
    order: 4,
    name: "Continuous Optimization",
    description:
      "We monitor, optimize, and report on everything. You get results and we measure them. Duration: Ongoing",
    icon: "optimization",
  },
] as const;

const iconComponents = {
  consultation: UserCheck,
  strategy: Target,
  deployment: PackageCheck,
  optimization: RefreshCcw,
};

export function ProcessTimeline() {
  const reduce = Boolean(useReducedMotion());

  return (
    <section
      aria-labelledby="process-timeline-heading"
      className="border-t border-border-default py-16 md:py-24 px-6"
    >
      <header className="mb-10 md:mb-14">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
          How Meetech Works{" "}
          <span className="block text-accent">
            Simple, Fast, Effective
          </span>
        </h2>
        <p className="mt-4 text-text-body md:text-lg">
          A proven methodology that delivers results, from discovery to launch.
        </p>
      </header>

      {/* Desktop: Horizontal Layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={
          reduce
            ? {}
            : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: STAGGER_DELAY,
                  delayChildren: STAGGER_DELAY_CHILDREN,
                },
              },
            }
        }
        className="hidden lg:block"
      >
        <div className="relative">
          {/* Connection Line */}
          <div
            className="absolute left-0 right-0 top-[4rem] h-0.5 bg-border-default"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = iconComponents[step.icon];
              return (
                <motion.article
                  key={step.id}
                  variants={
                    reduce
                      ? {}
                      : {
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }
                  }
                  transition={{ duration: DURATION, ease: EASE }}
                  className="group relative"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <motion.div
                      whileHover={reduce ? {} : { scale: 1.05 }}
                      className="flex h-32 w-32 items-center justify-center rounded-lg border-4 border-bg-page bg-accent/10 text-accent shadow-lg transition-all duration-200 group-hover:bg-accent/15 group-hover:shadow-xl"
                    >
                      <IconComponent size={28} />
                    </motion.div>
                  </div>

                  {/* Step Number */}
                  <div className="mb-3 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                      {step.order}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold tracking-tight text-text-primary">
                      {step.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-body">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except last step) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div
                      className="absolute right-0 top-[4rem] z-20 -mr-3 flex h-6 w-6 items-center justify-center rounded-lg bg-bg-page"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile/Tablet: Vertical Layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={
          reduce
            ? {}
            : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: STAGGER_DELAY,
                  delayChildren: STAGGER_DELAY_CHILDREN,
                },
              },
            }
        }
        className="lg:hidden"
      >
        <div className="relative space-y-8">
          {/* Connection Line */}
          <div
            className="absolute left-[2rem] top-0 bottom-0 w-0.5 bg-border-default"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step) => {
            const IconComponent = iconComponents[step.icon];
            return (
              <motion.article
                key={step.id}
                variants={
                  reduce
                    ? {}
                    : {
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }
                }
                transition={{ duration: DURATION, ease: EASE }}
                className="relative flex gap-6"
              >
                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-bg-page bg-accent/10 text-accent shadow-lg">
                    <IconComponent size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                      {step.order}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-text-primary">
                      {step.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-text-body">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}