"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackToHome() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link href="/">
        <Button
          variant="outline"
          size="sm"
          className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Button>
      </Link>
    </motion.div>
  );
}
