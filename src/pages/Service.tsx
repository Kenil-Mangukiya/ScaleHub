"use client"

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Smartphone, Phone, Bot, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/utils/motionVariants";
import webDevImage from "@/assets/web-development.png";
import mobileAppImage from "@/assets/mobile-dev.avif";
import robotImage from "@/assets/robot-new.jpeg";
import voiceAgentMockup from "@/assets/voice-agent-mockup.png";
import devopsImage from "@/assets/devops-illustration.png";

type Service = {
  icon: typeof Code;
  title: string;
  description: string;
  image: StaticImageData;
  features: string[];
  imageFit?: "cover" | "contain";
  imageWrapperClassName?: string;
  imageClassName?: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences crafted for performance and usability. We build apps that feel at home on every device and keep your users engaged.",
    image: mobileAppImage,
    imageFit: "cover",
    features: ["iOS & Android", "Cross-platform", "Offline-first UX", "App Store Launch"]
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description:
      "Scalable, secure web applications tailored to your business needs. We build powerful SaaS platforms, dashboards, and internal tools that streamline operations.",
    image: webDevImage,
    features: ["Real-time Features", "Cloud-native", "Secure & Compliant", "API Integration"]
  },
  {
    icon: Phone,
    title: "Voice Agent CRM",
    description:
      "AI-powered voice assistants integrated with your CRM. Automate customer interactions, handle inquiries, and provide 24/7 support with natural language processing.",
    image: voiceAgentMockup,
    features: ["24/7 Availability", "Natural Language", "CRM Integration", "Analytics Dashboard"]
  },
  {
    icon: Bot,
    title: "AI Automation Services",
    description:
      "Intelligent automation solutions that reduce manual work by up to 70%. From document processing to workflow automation, we leverage cutting-edge AI to boost efficiency.",
    image: robotImage,
    imageFit: "cover",
    imageClassName: "rounded-2xl",
    features: ["Workflow Automation", "Document AI", "Predictive Analytics", "Custom Models"]
  },
  {
    icon: Server,
    title: "DevOps & Deployment",
    description:
      "End-to-end DevOps solutions for seamless deployment and scaling. We set up CI/CD pipelines, cloud infrastructure, and monitoring to ensure 99.9% uptime.",
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
                <Card
                  className={`overflow-hidden hover:shadow-xl transition-all border-border ${
                  index % 2 === 0 ? "" : ""
                }`}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}
                  >
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
                      className={`relative h-64 overflow-hidden rounded-2xl lg:h-full lg:min-h-[24rem] ${
                        index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                      } ${service.imageWrapperClassName ?? ""}`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className={`object-cover transition-all duration-500 hover:scale-105 hover:brightness-110 ${service.imageClassName ?? ""}`}
                        style={{ objectFit: service.imageFit ?? "cover" }}
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={staggerItem}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Let&apos;s discuss how our services can accelerate your growth
            </motion.p>
              <motion.div variants={staggerItem} className="flex items-center justify-center">
                <Link
                  href="/contact"
                  className="rounded-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-none hover:shadow-md hover:shadow-primary/20 transition-transform duration-300 dark:shadow-[0_0_10px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.35)] dark:hover:scale-[1.02] inline-flex items-center justify-center"
                >
                  Get Started Today
                </Link>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
