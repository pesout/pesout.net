import type { Metadata } from "next";
import "./globals.css";

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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
