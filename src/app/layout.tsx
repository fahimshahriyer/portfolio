import "./globals.css";
import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";

const martian_mono = Martian_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahim Shahriyer",
  description: "A brief introduction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={martian_mono.className}>{children}</body>
    </html>
  );
}
