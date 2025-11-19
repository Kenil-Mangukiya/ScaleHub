"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Bot,
  Users,
  ShieldCheck,
  TrendingUp,
  Zap,
  ChevronDown,
} from "lucide-react";
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
    description:
      "Track your business metrics and performance with powerful real-time dashboards.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Leverage cutting-edge AI to automate workflows and increase productivity.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team through integrated collaboration tools.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud",
    description:
      "Enterprise-grade security with encrypted data and compliance standards.",
  },
];

const companies = [
  { name: "McDonald's", logo: macdonaldsLogo, logoClassName: "w-10 h-10" },
  { name: "Mercedes-Benz", logo: mercedesLogo, logoClassName: "w-10 h-10" },
  { name: "Puma", logo: pumaLogo, logoClassName: "w-10 h-10" },
  { name: "Rolex", logo: rolexLogo, logoClassName: "w-10 h-10" },
  { name: "Tata", logo: tataLogo, logoClassName: "w-10 h-10" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    rating: 5,
    feedback:
      "ScaleHub helped our team cut work time by 40%! The AI automation tools are game-changers.",
    image: user1Portrait,
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCo",
    rating: 5,
    feedback:
      "Implementation was seamless, and the support team is outstanding. Highly recommended!",
    image: user5Portrait,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow Systems",
    rating: 5,
    feedback:
      "The analytics dashboard gives us insights we never had before. ROI within 3 months!",
    image: user7Portrait,
  },
];

// Pricing data for both desktop and mobile accordion
const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for small teams",
    features: ["Up to 5 users", "Basic automation", "Standard analytics"],
    ctaLabel: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$99",
    period: "/mo",
    description: "For growing businesses",
    features: ["Up to 20 users", "Advanced automation", "Premium analytics", "AI integrations"],
    ctaLabel: "Get Started",
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored for enterprises",
    features: ["Unlimited users", "Custom automation", "Custom analytics", "Dedicated support"],
    ctaLabel: "Contact Sales",
  },
];

export default function Home() {
  // which pricing accordion is open on mobile
  const [openPlanId, setOpenPlanId] = useState<string | null>("growth");

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
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform"
                >
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </motion.div>
              <motion.p
                variants={staggerItem}
                className="mt-8 text-sm text-muted-foreground"
              >
                Trusted by 500+ teams worldwide
              </motion.p>

              {/* Trusted companies – keep scroll behavior, same as before */}
              <motion.div
                variants={staggerItem}
                className="mt-6 relative -mx-4 sm:-mx-6 lg:mx-0"
              >
                {/* Gradient edges for scroll hint on tablet/mobile */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent lg:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent lg:hidden" />

                <div
                  className="
                    flex flex-nowrap gap-4 pl-4 pr-6
                    overflow-x-auto scroll-smooth snap-x snap-mandatory
                    [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                    items-center justify-start
                    lg:flex-wrap lg:gap-4 lg:pl-0 lg:pr-0 lg:overflow-visible lg:snap-none
                  "
                >
                  {companies.map((company, index) => {
                    const hideOnTablet = company.name === "Tata";
                    return (
                      <div
                        key={index}
                        className={`snap-center shrink-0 lg:shrink lg:snap-none flex items-center px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition gap-3 shadow-[0_0_12px_rgba(255,255,255,0.03)] ${
                          hideOnTablet ? "hidden lg:flex" : ""
                        }`}
                      >
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={40}
                          height={40}
                          className={`rounded-lg object-contain ${
                            company.logoClassName ?? ""
                          }`}
                          unoptimized={true}
                        />
                        <span className="text-sm whitespace-nowrap">{company.name}</span>
                      </div>
                    );
                  })}
                </div>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Showcase – mobile: only first image, tablet/desktop: both as before */}
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

          {/* MOBILE: show only first image, no scroll */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="sm:hidden"
          >
            <motion.div
              variants={staggerItem}
              className="relative h-[260px] overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={voiceAgentMockup}
                alt="Voice Agent CRM Interface"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>

          {/* TABLET & DESKTOP: keep original two-image scroll/grid behavior */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="
              hidden sm:flex sm:flex-nowrap gap-6
              overflow-x-auto scroll-smooth snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              -mx-4 sm:-mx-6
              lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:snap-none
            "
          >
            <motion.div
              variants={staggerItem}
              className="
                relative group h-[260px] sm:h-[320px] lg:h-[420px]
                overflow-hidden rounded-xl shadow-xl
                snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[60%]
                lg:w-auto lg:shrink lg:snap-none
              "
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
              className="
                relative group h-[260px] sm:h-[320px] lg:h-[420px]
                overflow-hidden rounded-xl shadow-xl
                snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[60%]
                lg:w-auto lg:shrink lg:snap-none
              "
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

          {/* MOBILE: vertical accordion, one open at a time */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-4 sm:hidden"
          >
            {pricingPlans.map((plan) => {
              const isOpen = openPlanId === plan.id;
              const isGrowth = plan.id === "growth";
              const isEnterprise = plan.id === "enterprise";

              return (
                <motion.div key={plan.id} variants={staggerItem}>
                  <Card
                    className={`p-6 border ${
                      isGrowth ? "border-primary/70 shadow-xl" : "border-border shadow-md"
                    } bg-card/90`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                        <p className="mt-1 text-2xl font-semibold text-primary">
                          {plan.price}
                          {plan.period && (
                            <span className="text-sm text-muted-foreground ml-1">
                              {plan.period}
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {plan.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {plan.badge && (
                          <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-sm">
                            {plan.badge}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            setOpenPlanId(isOpen ? null : plan.id)
                          }
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-primary/40 text-xs font-medium text-primary bg-primary/5 hover:bg-primary/10 transition"
                        >
                          {isOpen ? "Hide details" : "View details"}
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 text-sm text-foreground">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            asChild
                            size="sm"
                            variant={isEnterprise ? "outline" : "hero"}
                            className="mt-5 w-full"
                          >
                            <Link href="/contact">{plan.ctaLabel}</Link>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* TABLET & DESKTOP: original scroll / grid layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="
              hidden sm:flex sm:flex-nowrap gap-4 pl-4 pr-6
              overflow-x-auto scroll-smooth snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              max-w-6xl mx-auto
              lg:grid lg:grid-cols-3 lg:gap-8 lg:pl-0 lg:pr-0 lg:overflow-visible lg:snap-none
            "
          >
            {pricingPlans.map((plan) => {
              const isGrowth = plan.id === "growth";
              const isEnterprise = plan.id === "enterprise";

              return (
                <motion.div
                  key={plan.id}
                  variants={staggerItem}
                  className="snap-center shrink-0 w-[80%] sm:w-[65%] md:w-[55%] lg:w-auto lg:shrink lg:snap-none"
                >
                  <Card
                    className={`h-full flex flex-col p-8 transition-all ${
                      isGrowth
                        ? "relative border-2 border-primary hover:scale-105 hover:shadow-xl"
                        : "border-border hover:scale-105 hover:shadow-xl"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                        {plan.badge}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-4xl font-bold text-primary mb-1">
                      {plan.price}
                      {plan.period && (
                        <span className="text-lg text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1 text-sm">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm"
                        >
                          <Zap className="w-4 h-4 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={isEnterprise ? "outline" : isGrowth ? "hero" : "outline"}
                      className="w-full mt-auto"
                    >
                      <Link href="/contact">{plan.ctaLabel}</Link>
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
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

          {/* MOBILE: 2 quote cards, no avatars, vertical */}
          <div className="space-y-6 sm:hidden">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/90 shadow-lg">
                <div className="flex items-center gap-1 text-accent mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="italic text-sm text-foreground mb-4">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* TABLET & DESKTOP: keep original scrolling card layout */}
          <div
            className="
              hidden sm:flex sm:flex-nowrap gap-4 pl-4 pr-6
              overflow-x-auto scroll-smooth snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              -mx-4 sm:-mx-6
              lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:snap-none
            "
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="
                  relative flex flex-col items-center text-center p-8 pt-20 border-border bg-card/90 backdrop-blur-sm shadow-lg h-full
                  snap-center shrink-0 w-[80%] sm:w-[70%] md:w-[60%]
                  lg:w-auto lg:shrink lg:snap-none
                "
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
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
                <div className="w-full border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
