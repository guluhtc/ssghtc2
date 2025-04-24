"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-20 overflow-hidden hero-gradient">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 border rounded-full py-2 px-4 mb-8 bg-background/50 backdrop-blur-sm gradient-border"
        >
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-medium">Free Instagram AI Tools</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          Transform Your Instagram with
          <span className="gradient-text"> AI Magic</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10"
        >
          Access powerful, free AI tools to enhance your Instagram content, grow your audience, and save time with automated solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="#tools" className="gap-2">
              Explore Tools <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gradient-border" asChild>
            <Link href="#features" className="gap-2">
              Learn More <Zap className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative w-full max-w-5xl mx-auto"
        >
          <div className="relative z-0 rounded-xl overflow-hidden border shadow-xl gradient-border">
            <div className="aspect-[16/9] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 flex items-center justify-center p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg bg-background/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center shadow-lg border gradient-border"
                  >
                    <div className="rounded-full p-3 bg-primary/20 mb-4 animate-pulse">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="h-2 rounded-full bg-primary/20 animate-pulse"></div>
                      <div className="h-2 w-2/3 rounded-full bg-primary/10 animate-pulse"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}