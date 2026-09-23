import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Fit Log",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
