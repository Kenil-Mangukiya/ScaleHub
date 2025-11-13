"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Smartphone, Phone, Bot, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/utils/motionVariants";
import webDevImage from "@/assets/web-dev.avif";
import mobileAppImage from "@/assets/mobile-dev.avif";
import voiceAgentMockup from "@/assets/ai-voice-agent-crm.avif";
import devopsImage from "@/assets/devops-illustration.png";
import roboticsDashboard from "@/assets/ai-automation.webp";

const services = [
  {
    icon: Code,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences crafted for performance and usability. We build apps that feel at home on every device and keep your users engaged.",
    image: mobileAppImage,
    features: [
      "iOS & Android",
      "Cross-platform",
      "App Store Launch",
      "Offline-first UX",
    ],
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description: "Scalable, secure web applications tailored to your business needs. We build powerful SaaS platforms, dashboards, and internal tools that streamline operations.",
    image: webDevImage,
    features: ["Real-time Features", "Cloud-native", "Secure & Compliant", "API Integration"]
  },
  {
    icon: Phone,
    title: "Voice Agent CRM",
    description: "AI-powered voice assistants integrated with your CRM. Automate customer interactions, handle inquiries, and provide 24/7 support with natural language processing.",
    image: voiceAgentMockup,
    features: ["24/7 Availability", "Natural Language", "CRM Integration", "Analytics Dashboard"]
  },
  {
    icon: Bot,
    title: "AI Automation Services",
    description: "Intelligent automation solutions that reduce manual work by up to 70%. From document processing to workflow automation, we leverage cutting-edge AI to boost efficiency.",
    image: roboticsDashboard,
    imageFit: "contain" as const,
    features: ["Workflow Automation", "Document AI", "Predictive Analytics", "Custom Models"]
  },
  {
    icon: Server,
    title: "DevOps & Deployment",
    description: "End-to-end DevOps solutions for seamless deployment and scaling. We set up CI/CD pipelines, cloud infrastructure, and monitoring to ensure 99.9% uptime.",
    image: devopsImage,
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Auto-scaling", "24/7 Monitoring"]
  }
];

export default function Services() {
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
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              Comprehensive solutions to scale your business with cutting-edge technology
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <Card className={`overflow-hidden hover:shadow-xl transition-all border-border ${
                  index % 2 === 0 ? "" : ""
                }`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}>
                    {/* Content */}
                    <motion.div
                      variants={staggerItem}
                      className={`p-8 md:p-12 flex flex-col justify-center ${
                        index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="hero" size="lg" className="w-fit">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      variants={staggerItem}
                      className={`relative h-64 overflow-hidden rounded-xl lg:min-h-[24rem] mt-6 mb-6 lg:mr-6 ${
                        index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="transition-all duration-500 hover:scale-105 hover:brightness-110"
                        style={{
                          objectFit: service.imageFit ?? "cover",
                          objectPosition: "center",
                        }}
                        unoptimized={true}
                      />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-white/90 mb-8"
            >
              Let&apos;s discuss how our services can accelerate your growth
            </motion.p>
            <motion.div variants={staggerItem}>
              <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
