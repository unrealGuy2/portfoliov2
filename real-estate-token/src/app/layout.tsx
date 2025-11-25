import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // <--- THIS IS THE MISSING MAGIC LINE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate Token Platform",
  description: "Invest in fractional real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}