import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Sonner from "@/components/sonner";

export const metadata: Metadata = {
  title: "Sarana",
  description: "Aplikasi Sarana",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/favicon_io/site.webmanifest" }],
  },
};

const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Sonner />
        <Footer />
      </body>
    </html>
  );
}
