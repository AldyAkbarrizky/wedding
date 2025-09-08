"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/8bit/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    english:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.",
    reference: "Quran 30:21",
  },
  {
    arabic:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    english:
      "Ya Tuhan kami, anugerahkanlah kepada kami isteri-isteri kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa.",
    reference: "Quran 25:74",
  },
  {
    arabic:
      "بَارِكِ اللّٰهُمَّ لَهُمَا وَبَارِكْ عَلَيْهِمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ",
    english:
      "Ya Allah, berkahilah keduanya, dan berkahilah persatuan mereka, dan satukanlah mereka dalam kebaikan.",
    reference: "Doa Pernikahan Islami Tradisional",
  },
];

export function IslamicQuotes() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            Kata-kata Mutiara
          </h2>
          <p className="text-lg text-muted-foreground">
            Petunjuk ilahi untuk perjalanan pernikahan kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute top-4 left-4 text-secondary/40"
                >
                  <Quote className="w-8 h-8" />
                </motion.div>

                <div className="mt-8 space-y-6">
                  <p className="font-arabic text-lg md:text-xl leading-loose text-foreground text-center">
                    {quote.arabic}
                  </p>

                  <p className="text-foreground/70 italic leading-relaxed">
                    "{quote.english}"
                  </p>

                  <p className="text-sm text-foreground/60 font-medium text-center">
                    - {quote.reference}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
