"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Send } from "lucide-react";
import { useState } from "react";

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    attendance: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this to your backend
    alert("Terima kasih atas RSVP Anda! Kami akan segera menghubungi Anda.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/5 to-secondary/8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Mohon konfirmasi kehadiran Anda sebelum 15 Mei 2024
          </p>
          <p className="text-sm text-muted-foreground">
            Kami tidak sabar untuk merayakannya bersamamu!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Alamat Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Masukkan email Anda"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="attendance" className="text-base font-medium">
                    Apakah Anda akan hadir? *
                  </Label>
                  <Select
                    onValueChange={(value) => handleChange("attendance", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Pilih jawaban Anda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Ya, saya akan hadir</SelectItem>
                      <SelectItem value="no">
                        Maaf, saya tidak bisa datang
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-base font-medium">
                    Jumlah Tamu
                  </Label>
                  <Select
                    onValueChange={(value) => handleChange("guests", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Termasuk Anda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Tamu</SelectItem>
                      <SelectItem value="2">2 Tamu</SelectItem>
                      <SelectItem value="3">3 Tamu</SelectItem>
                      <SelectItem value="4">4 Tamu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="dietary" className="text-base font-medium">
                  Pantangan Makanan
                </Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => handleChange("dietary", e.target.value)}
                  placeholder="Pantangan atau preferensi makanan apa pun"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-medium">
                  Pesan Khusus
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Sampaikan harapan atau permintaan khusus Anda"
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim RSVP
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-arabic text-lg text-primary mb-2">
              جَزَاكُمُ اللَّهُ خَيْرًا
            </p>
            <p className="text-muted-foreground text-sm">
              "Semoga Allah membalas Anda dengan kebaikan" - Terima kasih telah
              menjadi bagian dari hari istimewa kami
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
