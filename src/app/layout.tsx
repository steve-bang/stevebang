import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steve Bang - Software Engineering Blog",
  description: "Explore software engineering insights, tutorials, and experiences from Steve Bang. Learn about .NET, web development, and software architecture.",
  keywords: "software engineering, .NET, web development, programming, Steve Bang, tech blog",
  authors: [{ name: "Steve Bang" }],
  openGraph: {
    title: "Steve Bang - Software Engineering Blog",
    description: "Explore software engineering insights, tutorials, and experiences from Steve Bang.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Steve Bang - Software Engineering Blog",
    description: "Explore software engineering insights, tutorials, and experiences from Steve Bang.",
    card: "summary_large_image",
  },
  verification: {
    google: "your-google-site-verification",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
