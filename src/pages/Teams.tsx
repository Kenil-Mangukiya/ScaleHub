"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/utils/motionVariants";

const teamMembers = [
  {
    name: "Kenil Mangukiya",
    role: "Founder & CEO",
    avatar: "KM",
    bio: "Visionary leader with 10+ years in AI and automation",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "SC",
    bio: "Tech innovator specializing in scalable architectures",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI",
    avatar: "MR",
    bio: "Machine learning expert with PhD from Stanford",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Emily Watson",
    role: "Lead Designer",
    avatar: "EW",
    bio: "UX/UI specialist creating delightful user experiences",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "David Kumar",
    role: "DevOps Lead",
    avatar: "DK",
    bio: "Cloud infrastructure expert ensuring 99.9% uptime",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Lisa Thompson",
    role: "Head of Growth",
    avatar: "LT",
    bio: "Strategic marketer driving customer success",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "James Park",
    role: "Senior Engineer",
    avatar: "JP",
    bio: "Full-stack developer building robust solutions",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Anna Martinez",
    role: "Product Manager",
    avatar: "AM",
    bio: "Product strategist translating vision into reality",
    social: { linkedin: "#", twitter: "#", github: "#" }
  }
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[number] }) => {
  return (
    <motion.div variants={staggerItem}>
      <Card className="group relative overflow-hidden border-border hover:shadow-xl transition-all">
        {/* Avatar */}
        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <span className="text-6xl font-bold text-primary">{member.avatar}</span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
          <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </div>

        {/* Social overlay on hover */}
        <div className="absolute inset-0 bg-primary/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <a
              href={member.social.linkedin}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href={member.social.twitter}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={`${member.name} Twitter`}
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a
              href={member.social.github}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={`${member.name} GitHub`}
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </Card>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
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
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              Want to Join the Team?
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-white/90 mb-8"
            >
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence. Reach out to explore opportunities.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
