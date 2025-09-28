import { Inter } from "next/font/google";

import "leaflet/dist/leaflet.css";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.belegal.rs"),
  title: {
    default: "BeLegal | Law Office Belgrade",
    template: "%s | BeLegal",
  },
  description:
    "BeLegal is a Belgrade-based law office providing clear, practical, and reliable legal services across corporate, civil, and business law.",
  keywords: [
    "law firm Serbia",
    "Belgrade lawyers",
    "legal services",
    "corporate law",
    "business law",
    "civil law",
    "BeLegal",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://www.belegal.rs",
    title: "BeLegal | Law Office Belgrade",
    description:
      "BeLegal is a Belgrade-based law office providing clear, practical, and reliable legal services across corporate, civil, and business law.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "BeLegal Law Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeLegal | Law Office Belgrade",
    description:
      "BeLegal is a Belgrade-based law office providing clear, practical, and reliable legal services across corporate, civil, and business law.",
    images: ["/og-default.png"],
  },
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
