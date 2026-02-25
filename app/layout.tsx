import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { MediaQueryProvider } from "./context";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D media",
  description: "D Media is a full-service marketing, advertising, and event management agency dedicated to helping brands stand out and connect with their audience in meaningful ways. We craft powerful brand strategies, eye-catching creative campaigns, and result-driven digital marketing solutions that grow visibility and drive engagement.From concept to execution, D Media delivers end-to-end event management—corporate events, product launches, brand activations, and experiential marketing—handled with precision, creativity, and impact. Our team blends strategy, creativity, and technology to turn ideas into memorable experiences and measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <MediaQueryProvider>{children}

        <Toaster position='top-right' />
        </MediaQueryProvider>

      </body>
    </html>
  );
}
