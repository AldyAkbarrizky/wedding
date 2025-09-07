"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { WeddingDetails } from "@/components/WeddingDetails";
import { Schedule } from "@/components/Schedule";
import { Gallery } from "@/components/Gallery";
import { IslamicQuotes } from "@/components/IslamicQuotes";
import { RSVP } from "@/components/RSVP";
import { Location } from "@/components/Location";
import { Countdown } from "@/components/Countdown";
import { BackToHome } from "@/components/BackToHome";

export default function InvitationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background"
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
