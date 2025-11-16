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
import user1Portrait from "@/assets/user1.jpg";
import user5Portrait from "@/assets/user5.jpg";
import user7Portrait from "@/assets/user7.jpg";
import macdonaldsLogo from "@/assets/macdonalds.png";
import mercedesLogo from "@/assets/mer2.jpg";
import pumaLogo from "@/assets/puma2.png";
import rolexLogo from "@/assets/rolex.jpg";
import tataLogo from "@/assets/tata.webp";

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

const companies = [
  { name: "McDonald's", logo: macdonaldsLogo, logoClassName: "w-10 h-10" },
  { name: "Mercedes-Benz", logo: mercedesLogo, logoClassName: "w-10 h-10" }, // 20px
  { name: "Puma", logo: pumaLogo, logoClassName: "w-10 h-10" },
  { name: "Rolex", logo: rolexLogo, logoClassName: "w-10 h-10" },
  { name: "Tata", logo: tataLogo, logoClassName: "w-10 h-10" }
];

const testimonials = [
  {
     name: "Sarah Johnson",
     role: "CEO, TechStart Inc",
     rating: 5,
    feedback: "ScaleHub helped our team cut work time by 40%! The AI automation tools are game-changers.",
    image: user1Portrait
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCo",
    rating: 5,
    feedback: "Implementation was seamless, and the support team is outstanding. Highly recommended!",
    image: user5Portrait
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow Systems",
    rating: 5,
    feedback: "The analytics dashboard gives us insights we never had before. ROI within 3 months!",
    image: user7Portrait
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
                className="flex flex-wrap gap-4 items-center mt-6 justify-center lg:justify-start"
              >
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition gap-3 shadow-[0_0_12px_rgba(255,255,255,0.03)]"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={40}
                      height={40}
                      className={`rounded-lg object-contain ${company.logoClassName ?? ""}`}
                      unoptimized={true}
                    />
                    <span className="text-sm">{company.name}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              <Image
                src={heroDashboard}
                alt="AI automation dashboard"
                priority
                className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 45vw, 100vw"
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
            <motion.div
              variants={staggerItem}
              className="relative group h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={voiceAgentMockup}
                alt="Voice Agent CRM Interface"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="relative group h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={heroDashboard}
                alt="Analytics Dashboard"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(min-width: 1024px) 40vw, 100vw"
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
              <Card className="p-8 h-full border-border hover:scale-105 hover:shadow-xl transition-all flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                <p className="text-4xl font-bold text-primary mb-1">$49<span className="text-lg text-muted-foreground">/mo</span></p>
                <p className="text-muted-foreground mb-6">Perfect for small teams</p>
                <ul className="space-y-3 mb-8 flex-1">
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
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            </motion.div>

            {/* Growth (Featured) */}
            <motion.div variants={staggerItem}>
              <Card className="relative flex flex-col p-8 h-full border-2 border-primary hover:scale-105 hover:shadow-xl transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Growth</h3>
                <p className="text-4xl font-bold text-primary mb-1">$99<span className="text-lg text-muted-foreground">/mo</span></p>
                <p className="text-muted-foreground mb-6">For growing businesses</p>
                <ul className="space-y-3 mb-8 flex-1">
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
                <Button asChild variant="hero" className="w-full mt-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={staggerItem}>
              <Card className="p-8 h-full border-border hover:scale-105 hover:shadow-xl transition-all flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                <p className="text-4xl font-bold text-primary mb-1">Custom</p>
                <p className="text-muted-foreground mb-6">Tailored for enterprises</p>
                <ul className="space-y-3 mb-8 flex-1">
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
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative flex flex-col items-center text-center p-8 pt-20 border-border bg-card/90 backdrop-blur-sm shadow-lg h-full"
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl bg-card">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} portrait`}
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mb-3 text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
                <div className="w-full border-t border-border pt-4">
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
