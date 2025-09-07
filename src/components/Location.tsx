"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 px-4 bg-muted/8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            Lokasi Acara
          </h2>
          <p className="text-lg text-muted-foreground">
            Bergabunglah dengan kami di lokasi yang indah ini untuk hari
            istimewa kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full card-hover bg-card/60 backdrop-blur-sm border-border/30">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary" />
                Alam Wisata Cimahi
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Alamat</p>
                    <p className="text-muted-foreground">
                      Jalan Kolonel Masturi KM.4 No.157
                      <br />
                      Kota Cimahi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Waktu Acara</p>
                    <p className="text-muted-foreground">
                      Akad Nikah: 08:00
                      <br />
                      Resepsi: 10:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Kontak</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=123+Wedding+Avenue,+Celebration+City",
                      "_blank"
                    )
                  }
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Dapatkan Arah
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full card-hover">
              <div className="relative h-96 lg:h-full min-h-[300px]">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipND503nraet4TpRhPBrhA-AVD-z7cOTnsXam-Fq=s680-w680-h510-rw"
                  alt="Wedding venue exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-dancing text-xl mb-2">
                    Alam Wisata Cimahi
                  </p>
                  <p className="text-sm opacity-90">
                    Tempat yang elegan untuk perayaan istimewa kami
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-2">
              <strong>Parkir:</strong> Tersedia parkir valet gratis
            </p>
            <p className="text-muted-foreground">
              <strong>Aksesibilitas:</strong> Tempat ini dapat diakses dengan
              kursi roda dengan lift dan jalur landai
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
