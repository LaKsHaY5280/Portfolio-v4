import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Frame from "@/components/layout/Frame";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="bg-earth-light text-earth-dark"
        suppressHydrationWarning
      >
        <Frame>
          <Header />
          {children}
          <Footer />
        </Frame>
      </body>
    </html>
  );
}
