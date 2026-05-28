import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "VaultBridge Microfinance Bank | Smart Banking for Everyone",
  description:
    "High-interest savings up to 10% p.a., low-interest loans, and easy digital banking. Licensed by the Central Bank of Nigeria. Deposits insured by NDIC.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "VaultBridge Microfinance Bank",
    description:
      "High-interest savings, low-interest loans, and easy digital banking for Nigerians.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
