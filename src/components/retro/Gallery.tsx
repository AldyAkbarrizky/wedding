"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/8bit/card";
import { useState } from "react";

const photos = [
  {
    src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    alt: "Potret pasangan 1",
    caption: "Hari pertunangan kami",
  },
  {
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    alt: "Potret pasangan 2",
    caption: "Berjalan bersama",
  },
  {
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    alt: "Potret pasangan 3",
    caption: "Momen matahari terbenam",
  },
  {
    src: "https://images.pexels.com/photos/1024966/pexels-photo-1024966.jpeg",
    alt: "Potret pasangan 4",
    caption: "Berbagi kebahagiaan",
  },
  {
    src: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
    alt: "Potret pasangan 5",
    caption: "Jam emas",
  },
  {
    src: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    alt: "Potret pasangan 6",
    caption: "Hari yang sempurna",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            Perjalanan Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Momen-momen indah yang telah kami lalui bersama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Card>
                <div className="relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-dancing text-lg">{photo.caption}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
