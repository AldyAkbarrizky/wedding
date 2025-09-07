"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const details = [
  {
    icon: Calendar,
    title: "Tanggal",
    value: "Senin, 23 Maret 2026",
  },
  {
    icon: Clock,
    title: "Waktu",
    value: "08:00 - 13:00",
  },
  {
    icon: MapPin,
    title: "Tempat",
    value: "Alam Wisata Cimahi",
  },
  {
    icon: Users,
    title: "Aturan Berpakaian",
    value: "Formal / Tradisional",
  },
];

export function WeddingDetails() {
  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            Detail Pernikahan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan kami saat kami merayakan penyatuan dua hati dan
            awal perjalanan kami yang diberkati bersama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center card-hover bg-card/60 backdrop-blur-sm border-border/30">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <detail.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                </motion.div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">
                  {detail.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {detail.value}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border-border/50 max-w-3xl mx-auto">
            <p className="font-arabic text-xl md:text-2xl text-primary mb-3">
              اللهم بارك لهما وبارك عليهما واجمع بينهما في خير
            </p>
            <p className="text-muted-foreground text-sm md:text-base italic">
              "Ya Allah, berkahilah keduanya dan berkahilah persatuan mereka,
              dan satukanlah mereka dalam kebaikan"
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
