import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influrvy Business | Soluções para negócios",
  description: "A frente Business da Influrvy conecta negócios a oportunidades digitais.",
  openGraph: {
    title: "Influrvy Business | Soluções para negócios",
    description: "Conexões que fazem negócios avançar.",
    images: [{ url: "/og.png", width: 1672, height: 940, alt: "Influrvy Business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influrvy Business | Soluções para negócios",
    description: "Conexões que fazem negócios avançar.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
