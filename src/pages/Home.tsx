"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Bot, Users, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/motionVariants";
import heroDashboard from "@/assets/hash-dashboard.png";
import voiceAgentMockup from "@/assets/voice-agent-mockup.png";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your business metrics and performance with powerful real-time dashboards."
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Leverage cutting-edge AI to automate workflows and increase productivity."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team through integrated collaboration tools."
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud",
    description: "Enterprise-grade security with encrypted data and compliance standards."
  }
];

const trustedLogos = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E"
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    rating: 5,
    feedback: "ScaleHub helped our team cut work time by 40%! The AI automation tools are game-changers."
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCo",
    rating: 5,
    feedback: "Implementation was seamless, and the support team is outstanding. Highly recommended!"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow Systems",
    rating: 5,
    feedback: "The analytics dashboard gives us insights we never had before. ROI within 3 months!"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h1
                variants={staggerItem}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              >
                Scale Your Business{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Smarter. Not Harder.
                </span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
              >
                AI-driven workflows and automation tools to accelerate growth.
              </motion.p>
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild variant="hero" size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </motion.div>
              <motion.p
                variants={staggerItem}
                className="mt-8 text-sm text-muted-foreground"
              >
                Trusted by 500+ teams worldwide
              </motion.p>
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-6 mt-4"
              >
                {trustedLogos.map((logo, index) => (
                  <div key={index} className="px-4 py-2 bg-card rounded-lg border border-border text-sm text-muted-foreground">
                    {logo}
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Image
                src={heroDashboard}
                alt="AI automation dashboard"
                width={960}
                height={640}
                priority
                className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
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
              Powerful Features for Modern Teams
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Everything you need to streamline operations and accelerate growth
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="p-6 h-full hover:scale-105 hover:shadow-lg transition-all cursor-pointer border-border">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See ScaleHub in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions powering businesses
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={staggerItem} className="relative group">
              <Image
                src={voiceAgentMockup}
                alt="Voice Agent CRM Interface"
                width={960}
                height={640}
                className="rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:brightness-110"
              />
            </motion.div>
            <motion.div variants={staggerItem} className="relative group">
              <Image
                src={heroDashboard}
                alt="Analytics Dashboard"
                width={960}
                height={640}
                className="rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:brightness-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Starter */}
            <motion.div variants={staggerItem}>
              <Card className="p-8 h-full border-border hover:scale-105 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                <p className="text-4xl font-bold text-primary mb-1">$49<span className="text-lg text-muted-foreground">/mo</span></p>
                <p className="text-muted-foreground mb-6">Perfect for small teams</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-accent mr-2" />
                    Up to 5 users
                  </li>
                  <li className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Basic automation
                  </li>
                  <li className="flex items-center text-sm">
                    <BarChart3 className="w-4 h-4 text-accent mr-2" />
                    Standard analytics
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            </motion.div>

            {/* Growth (Featured) */}
            <motion.div variants={staggerItem}>
              <Card className="p-8 h-full border-2 border-primary hover:scale-105 hover:shadow-xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Growth</h3>
                <p className="text-4xl font-bold text-primary mb-1">$99<span className="text-lg text-muted-foreground">/mo</span></p>
                <p className="text-muted-foreground mb-6">For growing businesses</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-accent mr-2" />
                    Up to 20 users
                  </li>
                  <li className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Advanced automation
                  </li>
                  <li className="flex items-center text-sm">
                    <BarChart3 className="w-4 h-4 text-accent mr-2" />
                    Premium analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <Bot className="w-4 h-4 text-accent mr-2" />
                    AI integrations
                  </li>
                </ul>
                <Button asChild variant="hero" className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={staggerItem}>
              <Card className="p-8 h-full border-border hover:scale-105 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                <p className="text-4xl font-bold text-primary mb-1">Custom</p>
                <p className="text-muted-foreground mb-6">Tailored for enterprises</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-accent mr-2" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Custom automation
                  </li>
                  <li className="flex items-center text-sm">
                    <BarChart3 className="w-4 h-4 text-accent mr-2" />
                    Custom analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <ShieldCheck className="w-4 h-4 text-accent mr-2" />
                    Dedicated support
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </motion.div>

          <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 min-w-[300px] md:min-w-[400px] border-border">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
