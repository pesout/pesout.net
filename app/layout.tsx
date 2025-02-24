import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Štěpán Pešout",
  description: "Fullstack freelance web app developer, machine learning enthusiast, traveller and technology minimalist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
