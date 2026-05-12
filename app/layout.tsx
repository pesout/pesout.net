import type { Metadata } from "next";
import { Rubik, DM_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Štěpán Pešout",
  description: "Fullstack web app developer, freelancer, machine learning enthusiast, traveller and technology minimalist",
  keywords: ["fullstack developer", "web app", "traveller", "machine learning", "technology minimalist"],
  authors: [{ name: "Štěpán Pešout", url: "https://pesout.net" }],
  openGraph: {
    locale: "en_EN",
    siteName: "Štěpán Pešout",
    type: "website",
    url: "https://pesout.net",
    title: "Štěpán Pešout",
    description: "Fullstack web app developer, freelancer, machine learning enthusiast, traveller and technology minimalist",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${rubik.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
      <Script
        src="//gc.zgo.at/count.js"
        strategy="lazyOnload"
        data-goatcounter="https://pesout.goatcounter.com/count"
        async 
      />
    </html>
  );
}
