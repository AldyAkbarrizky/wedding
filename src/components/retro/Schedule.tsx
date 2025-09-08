"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/8bit/card";
import { Clock, Heart, Camera, Utensils, Music } from "lucide-react";

const scheduleItems = [
  {
    time: "16:00",
    event: "Kedatangan & Registrasi Tamu",
    description: "Minuman selamat datang dan makanan ringan",
    icon: Clock,
    color: "text-primary",
  },
  {
    time: "16:30",
    event: "Akad Nikah",
    description: "Upacara pernikahan Islam bersama keluarga dan teman",
    icon: Heart,
    color: "text-secondary",
  },
  {
    time: "17:30",
    event: "Sesi Foto",
    description: "Foto keluarga dan potret pasangan",
    icon: Camera,
    color: "text-accent",
  },
  {
    time: "19:00",
    event: "Resepsi Pernikahan",
    description: "Makan malam, pidato, dan perayaan",
    icon: Utensils,
    color: "text-primary",
  },
  {
    time: "21:00",
    event: "Musik & Tarian",
    description: "Hiburan tradisional dan kontemporer",
    icon: Music,
    color: "text-secondary",
  },
];

export function Schedule() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            Jadwal Pernikahan
          </h2>
          <p className="text-lg text-muted-foreground">
            Hari yang indah direncanakan dengan cinta dan perhatian
          </p>
        </motion.div>

        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className={`w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0 ${item.color}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground">
                        {item.event}
                      </h3>
                      <span className="text-lg font-medium text-primary">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
