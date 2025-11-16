 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/motionVariants";
import pass1 from "@/assets/pass2.webp";
import pass2 from "@/assets/pass4.jpg";
import pass3 from "@/assets/pass3.jpg";
import pass4 from "@/assets/pass7.webp";
import pass5 from "@/assets/pass5.webp";
import pass6 from "@/assets/pass6.webp";
import pass7 from "@/assets/pass1.jpg";
import pass8 from "@/assets/pass8.webp";

const teamMembers = [
  {
    name: "Alexander Reyes",
    role: "Founder & CEO",
    image: pass1,
    bio: "A visionary entrepreneur with a decade of experience leading high-growth tech startups. Passionate about automation, product innovation, and transforming business operations at scale. Believes in building teams that move fast and think fearlessly.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: pass2,
    bio: "Technology leader focused on designing resilient, cloud-native architectures. Champions engineering excellence, code quality, and developer productivity. Scales platforms securely while enabling rapid iteration and continuous delivery.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI",
    image: pass3,
    bio: "Machine learning expert driving applied AI initiatives from research to production. Experienced in LLMs, MLOps, and model governance. Delivers measurable impact by pairing advanced models with pragmatic deployment strategies.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Emily Watson",
    role: "Lead Designer",
    image: pass4,
    bio: "Product designer crafting intuitive, high-contrast interfaces for modern SaaS. Obsessed with accessibility, motion, and micro-interactions. Converts complex workflows into elegant experiences customers love.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "David Kumar",
    role: "DevOps Lead",
    image: pass5,
    bio: "DevOps specialist automating infrastructure, CI/CD, and observability at scale. Builds secure, reliable platforms with IaC and GitOps. Ensures performance, cost efficiency, and near-zero downtime.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Lisa Thompson",
    role: "Head of Growth",
    image: pass6,
    bio: "Growth strategist focused on sustainable, data-driven acquisition and retention. Aligns product-market fit with messaging and lifecycle marketing. Partners closely with sales and success to drive revenue.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "James Park",
    role: "Senior Engineer",
    image: pass7,
    bio: "Full‑stack engineer building performant, maintainable systems end to end. Enjoys type-safe code, clean abstractions, and DX tooling. Bridges product goals with robust, scalable implementation.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Anna Martinez",
    role: "Product Manager",
    image: pass8,
    bio: "Product manager translating strategy into outcomes through crisp roadmaps and discovery. Partners with customers to prioritize value, reduce friction, and deliver features that matter.",
    social: { linkedin: "#", twitter: "#", github: "#" }
  }
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[number] }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div variants={fadeInUp}>
      <div
        onMouseMove={handleMouseMove}
        className="group relative min-h-[420px] md:min-h-[460px] rounded-2xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:bg-white/5 dark:border-white/10 dark:shadow-xl dark:shadow-black/40 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/30"
      >
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden dark:block bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(0,0,0,0.06),transparent_60%)]" />

        <div className="p-5 md:p-6 h-full flex flex-col justify-between">
          <div className="flex flex-col items-center text-center">
          <Image
            src={(member as any).image}
            alt={`${member.name} avatar`}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover border border-white/30 shadow-lg mx-auto mb-4"
          />

          {/* Text */}
          <div className="mt-3 w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-muted-foreground mb-2">{member.role}</p>
            <div className="border-t border-gray-200 dark:border-white/10 mt-3 pt-3">
              <p className="text-xs text-gray-700 dark:text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          </div>
          </div>

          {/* Social icons */}
          <div className="mt-6 sm:mt-8 flex gap-3 justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <a
              href={member.social.linkedin}
              aria-label={`${member.name} LinkedIn`}
              className="p-2 rounded-full transition bg-black/5 hover:bg-black/10 shadow-sm hover:shadow-md dark:bg-white/10 dark:hover:bg-white/20 dark:shadow-white/10"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href={member.social.twitter}
              aria-label={`${member.name} Twitter`}
              className="p-2 rounded-full transition bg-black/5 hover:bg-black/10 shadow-sm hover:shadow-md dark:bg-white/10 dark:hover:bg-white/20 dark:shadow-white/10"
            >
              <Twitter className="h-5 w-5 text-foreground" />
            </a>
            <a
              href={member.social.github}
              aria-label={`${member.name} GitHub`}
              className="p-2 rounded-full transition bg-black/5 hover:bg-black/10 shadow-sm hover:shadow-md dark:bg-white/10 dark:hover:bg-white/20 dark:shadow-white/10"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Meet Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Team
              </span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              Passionate experts committed to your success. We&apos;re a diverse team of engineers, designers, and strategists united by one mission: making your business scale smarter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
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
                Want to Join the Team?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                We&apos;re always looking for talented individuals who share our passion for innovation and excellence. Reach out to explore opportunities.
              </motion.p>
              <motion.div variants={staggerItem} className="flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white shadow-none hover:shadow-md hover:shadow-primary/20 transition-transform duration-300 dark:shadow-[0_0_10px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.35)] dark:hover:scale-[1.02]"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
