import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as accessible font
import "./globals.css";
import { BRAND, HERO_CONTENT } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kopi-desa-ekf52xdmt1.edgeone.dev'),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: HERO_CONTENT.subheadline,
  keywords: ["kopi desa", "biji kopi", "kopi fresh roasted", "kopi robusta", "kopi arabika", "jual kopi online"],
  authors: [{ name: "Kopi Desa Team" }],
  creator: "Kopi Desa",
  publisher: "Kopi Desa",
  robots: "index, follow",
  openGraph: {
    title: BRAND.name,
    description: HERO_CONTENT.subheadline,
    url: "https://kopi-desa-ekf52xdmt1.edgeone.dev",
    siteName: BRAND.name,
    type: "website",
    images: [{ url: "/images/banner-hero.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: HERO_CONTENT.subheadline,
    images: ["/images/banner-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
