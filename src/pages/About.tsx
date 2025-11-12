"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ScaleHub
              </span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
                We&apos;re a team of passionate technologists, designers, and strategists dedicated to helping businesses harness the power of AI and automation. Founded on the belief that technology should empower growth, not complicate it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-y border-border">
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

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScaleHub was born out of a simple observation: businesses were drowning in manual processes while powerful AI tools remained out of reach for most teams. We set out to change that.
                </p>
                <p>
                  Since our founding, we&apos;ve helped over 500 companies automate workflows, reduce operational costs, and scale faster than ever before. From startups to enterprises, our solutions adapt to your unique needs.
                </p>
                <p>
                  Today, we&apos;re proud to be at the forefront of the AI automation revolution, combining expertise in software development, DevOps, and artificial intelligence to deliver solutions that truly transform businesses.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl font-bold text-primary mb-4">500+</p>
                  <p className="text-xl text-foreground font-semibold">Teams Trust ScaleHub</p>
                </div>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-muted-foreground mb-8"
            >
              Join 500+ teams who trust ScaleHub to power their growth
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
