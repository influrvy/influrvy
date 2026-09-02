import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influrvy — Sites que fazem negócios brilharem",
  description: "Portfólio de experiências digitais criadas pela Influrvy para lojas, deliverys e clínicas.",
  openGraph: {
    title: "Influrvy — Sites que fazem negócios brilharem",
    description: "Design, estratégia e tecnologia para marcas ambiciosas.",
    images: [{ url: "/og.png", width: 1672, height: 940, alt: "Influrvy Business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influrvy — Sites que fazem negócios brilharem",
    description: "Design, estratégia e tecnologia para marcas ambiciosas.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
