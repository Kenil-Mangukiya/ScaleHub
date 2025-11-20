"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, TrendingUp, Building2, Cpu, Bot, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/motionVariants";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We&apos;re committed to helping businesses scale smarter with AI-powered solutions that deliver measurable results."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging cutting-edge technologies to build solutions that keep you ahead of the competition."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We work as an extension of your team to achieve your goals."
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented",
    description: "Every solution we build is designed to scale with your business and drive sustainable growth."
  }
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "1000+", label: "Projects Delivered" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ScaleHub
              </span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-0 sm:mb-4 leading-relaxed"
            >
              ScaleHub is a team of passionate technologists, designers, and AI strategists committed to helping businesses unlock the power of automation. We believe technology should accelerate growth — not complicate it.
            </motion.p>
            <motion.p
              variants={staggerItem}
              className="hidden sm:block text-base sm:text-lg text-muted-foreground"
            >
              From startups to enterprises, we build intelligent solutions that simplify operations, reduce manual work, and enable teams to scale smarter, not harder.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-14 pb-6 sm:pb-14 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline + Story Section (stacked on tablet with Timeline first) */}
      <section className="pt-4 pb-12 sm:pt-8 sm:pb-16 lg:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          {/* Mobile: Section Header */}
          <div className="mb-6 sm:mb-8 lg:hidden flex items-center justify-center min-h-[60px] sm:min-h-[80px]">
            <h2 className="text-3xl mt-6 sm:text-4xl font-bold text-white text-center">Our Journey</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl mx-auto">
            {/* Timeline (first on tablet) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative order-1 lg:order-1 w-full overflow-x-hidden"
            >
              <div className="relative w-full max-w-full">
                {/* Mobile: Thinner line, Desktop: Original */}
                <div className="absolute left-[8px] sm:left-[10px] top-0 h-full w-[2px] sm:w-[3px] bg-gradient-to-b from-primary to-accent" />
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 pl-6 sm:pl-8 lg:pl-10 w-full">
                  {[
                    {
                      year: "2022",
                      description:
                        "ScaleHub was founded with a mission to solve manual workflow bottlenecks.",
                      Icon: Building2,
                    },
                    {
                      year: "2023",
                      description:
                        "First automation engine launched; helped first 50 companies automate operations.",
                      Icon: Cpu,
                    },
                    {
                      year: "2024",
                      description:
                        "Expanded into AI voice automation and analytics dashboards.",
                      Icon: Bot,
                    },
                    {
                      year: "2025",
                      description:
                        "Trusted by 500+ businesses, serving global teams with full AI-automation suites.",
                      Icon: Rocket,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Mobile: Smaller marker, Desktop: Original */}
                      <span className="absolute left-[2px] sm:left-[4px] top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent shadow-[0_0_10px_#2dd4bf] sm:shadow-[0_0_15px_#2dd4bf]" />
                      <div className="bg-white/5 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-white/10 shadow-md sm:shadow-lg hover:bg-white/10 transition-all w-full max-w-full overflow-hidden">
                        <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 sm:mb-3" />
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{item.year}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Divider between sections on mobile/tablet */}
            <div className="block lg:hidden my-8 sm:my-10">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            {/* Our Story (second on tablet) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg sm:shadow-xl backdrop-blur-sm transition-all hover:shadow-2xl before:content-[''] before:absolute before:left-0 before:top-0 before:w-[3px] sm:before:w-[4px] before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded-full order-2 lg:order-2 w-full overflow-hidden"
            >
              <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4" />
              <p className="text-primary/80 text-xs sm:text-sm uppercase tracking-wider mb-2">Who We Are</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base text-muted-foreground">
                <p className="break-words">Founded in 2022, ScaleHub started because businesses were drowning in manual processes and fragmented tools. We set out to make automation accessible, reliable, and results-driven.</p>
                <p className="break-words">By 2023, we built our first automation engine and onboarded our early customers—helping the first 50 companies automate core operations and eliminate workflow bottlenecks.</p>
                <p className="break-words">In 2024, we expanded our platform with AI voice agents and analytics dashboards, enabling teams to monitor performance and optimize processes end-to-end.</p>
                <p className="break-words">In 2025, we reached 500+ global teams and continue to scale responsibly—focusing on security, usability, and measurable impact for every customer.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="p-6 h-full hover:scale-105 hover:shadow-lg transition-all border-border">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/95 to-[#0D1117]/80" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="rounded-3xl p-10 md:p-14 text-center transition-all bg-white/70 backdrop-blur-xl border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:bg-white/5 dark:border-white/10 dark:shadow-xl dark:shadow-black/40">
              <motion.h2
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Ready to Work Together?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                Join 500+ teams who trust ScaleHub to power their growth
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white shadow-none hover:shadow-md hover:shadow-primary/20 transition-transform duration-300 dark:shadow-[0_0_10px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.35)] dark:hover:scale-[1.02]"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-4 border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 hover:dark:bg-white/20"
                >
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
