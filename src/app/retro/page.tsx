"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/8bit/button";
import { Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header with Islamic greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <p className="font-arabic text-2xl md:text-3xl text-primary mb-2">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4">
              Linda & Aldy
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <Heart className="w-6 h-6 text-secondary fill-secondary" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12"
          >
            <p className="font-dancing text-2xl md:text-3xl text-foreground/80 mb-4">
              Dengan suka cita di hati kami
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kami mengundang Anda untuk berbagi dalam perayaan cinta, iman, dan
              awal perjalanan kami sebagai satu kesatuan
            </p>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Link href="/invitation">
              <Button size="lg">
                Buka Undangan
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>

          {/* Islamic blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mt-16 text-center"
          >
            <p className="font-arabic text-lg md:text-xl text-accent mb-2">
              رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ
              أَعْيُنٍ
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic">
              "Ya Tuhan kami, anugerahkanlah kepada kami isteri-isteri kami dan
              keturunan kami sebagai penyenang hati (kami)"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
