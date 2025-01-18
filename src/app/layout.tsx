import { Inter, Montserrat } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// https://docs.google.com/spreadsheets/d/1HY_-caeFY0bJ_PJqKb4vVz87_u8a7pjuSdBwsHa6mYU/pub?output=xlsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx(montserrat.variable, inter.variable, "antialiased")}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
