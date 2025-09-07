import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Linda & Aldy - Wedding Invitation",
  description: "Join us in celebrating the wedding of Sarah and Ahmed",
  keywords: "wedding, invitation, Sarah, Ahmed, celebration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} ${playfair.variable} ${dancing.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
