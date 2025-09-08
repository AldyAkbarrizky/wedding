"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-arabic text-xl md:text-2xl text-primary mb-4">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-6">
            Linda & Aldy
          </h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <Heart className="w-8 h-8 text-secondary fill-secondary animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <p className="text-foreground/60 text-sm md:text-base mb-8">
            memohon kehadiran Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-6"
        >
          <p className="font-dancing text-3xl md:text-4xl text-foreground/90">
            di perayaan pernikahan mereka
          </p>
          <p className="text-xl md:text-2xl text-foreground/80">
            Bergabunglah dengan kami dalam persatuan yang diberkati ini
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
        >
          <p className="font-arabic text-lg md:text-xl text-accent mb-2">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="text-sm md:text-base text-muted-foreground italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang." - Quran 30:21
          </p>
        </motion.div>
      </div>
    </section>
  );
}
