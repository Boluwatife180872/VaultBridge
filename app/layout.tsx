import type { Metadata } from "next";
import "@/app/styles/globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
