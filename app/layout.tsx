import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/sections/NavigationBar";
import FooterSection from "./components/sections/Footer";
import { Plus_Jakarta_Sans, Playfair_Display, Space_Mono } from 'next/font/google';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const accentSerif = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-serif',
});

const technicalMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Synapse AI Workspace',
  description: 'The AI Workspace that thinks ahead',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${accentSerif.variable} ${technicalMono.variable}`}
      data-theme="synapseQuantum"

    >
      <body className="font-sans bg-zinc-950 text-zinc-300 antialiased">
        <NavigationBar />
        <main className="grow pt-20">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
