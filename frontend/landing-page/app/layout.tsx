import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenSales — Your AI sales team that runs outbound end-to-end",
  description:
    "Paste an ICP. Three agents (VP Sales, SDR, AE) plan, source, enrich and draft personalized cold emails. Open source, MIT licensed.",
  openGraph: {
    title: "OpenSales — AI sales team, end-to-end outbound",
    description:
      "ICP in. Pipeline out. Three agents. Real emails. Full trace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
