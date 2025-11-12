"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ToastContainer } from "@/components/Toast";
import { useToast } from "@/hooks/useToast";
import { contactFormSchema, ContactFormData } from "@/utils/validation";
import { staggerContainer, staggerItem } from "@/utils/motionVariants";

export default function Contact() {
  const { toasts, showToast, removeToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Contact form submission", formData);
    
    showToast(
      "Thanks — your message was sent! We&apos;ll contact you within 1–2 business days.",
      "success"
    );
    
    setIsSubmitting(false);
    reset();
  };

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
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              Have a project in mind? Let&apos;s discuss how we can help your business scale smarter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={staggerItem}
                className="text-3xl font-bold text-foreground mb-6"
              >
                Contact Information
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-muted-foreground mb-8"
              >
                Reach out through any of these channels, or fill out the form and we&apos;ll get back to you within 1-2 business days.
              </motion.p>

              <motion.div variants={staggerItem} className="space-y-6">
                <Card className="p-6 border-border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Kenil Mangukiya</h3>
                      <p className="text-sm text-muted-foreground">Founder & CEO</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:kenil.mangukiya.work@gmail.com"
                        className="text-sm text-accent hover:underline"
                      >
                        kenil.mangukiya.work@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+919904665554"
                        className="text-sm text-accent hover:underline"
                      >
                        +91 99046 65554
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <Card className="p-8 border-border">
                <motion.h2
                  variants={staggerItem}
                  className="text-2xl font-bold text-foreground mb-6"
                >
                  Send us a Message
                </motion.h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="fullName"
                        {...register("fullName")}
                        placeholder="John Doe"
                        className={`pl-10 focus:ring-2 focus:ring-primary ${
                          errors.fullName ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className={`pl-10 focus:ring-2 focus:ring-primary ${
                          errors.email ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+91 99046 65554"
                        className={`pl-10 focus:ring-2 focus:ring-primary ${
                          errors.phone ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className={`pl-10 focus:ring-2 focus:ring-primary resize-none ${
                          errors.message ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={staggerItem}>
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
