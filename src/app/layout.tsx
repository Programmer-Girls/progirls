import "./globals.css";

import { Inter, Montserrat } from "next/font/google";
import type { Metadata } from "next";
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
  title: "ProGirls",
  // feito por IA
  description:
    "ProGirls é uma comunidade e coletivo empoderador para mulheres na tecnologia, dedicado a promover o crescimento, a conexão e o desenvolvimento de habilidades em um ambiente de apoio. Junte-se a nós para programar, conectar-se e crescer com mulheres de mentalidade semelhante na área de tecnologia.",
  icons: {
    icon: "/foto.png",
  },
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

        <main className="container mx-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
