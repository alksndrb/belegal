import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BeLegal",
  description: "BeLegal law office Belgrade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-[70px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
