"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/retro/Hero";
import { WeddingDetails } from "@/components/retro/WeddingDetails";
import { Schedule } from "@/components/retro/Schedule";
import { Gallery } from "@/components/retro/Gallery";
import { IslamicQuotes } from "@/components/retro/IslamicQuotes";
import { RSVP } from "@/components/retro/RSVP";
import { Location } from "@/components/retro/Location";
import { Countdown } from "@/components/retro/Countdown";
import { BackToHome } from "@/components/retro/BackToHome";

export default function InvitationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background text-xs"
    >
      <BackToHome />
      <Hero />
      <WeddingDetails />
      <Countdown />
      <Schedule />
      <Gallery />
      <IslamicQuotes />
      <Location />
      <RSVP />
    </motion.div>
  );
}
