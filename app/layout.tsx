import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteSpinner from "@/components/RouteSpinner";
import ThemeProvider from "@/theme/theme-provider";

import BackToTop from "@/components/BackToTop";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/brand/dcommando-logo.ico",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dcommando Security",
  url: "https://dcommandosecurity.com",
  logo: "https://dcommandosecurity.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-703-822-3500",
    contactType: "Customer Service",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.instagram.com/dcommandoeventsecurity_backup",

    "https://wa.me/2347038223500",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <RouteSpinner />
          {children}
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
