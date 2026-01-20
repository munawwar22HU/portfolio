import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Munawwar Anwar | Data Engineer & Analyst",
    template: "%s | Muhammad Munawwar Anwar",
  },
  description:
    "Portfolio of Muhammad Munawwar Anwar — Data Engineer and Analyst specializing in SQL, Python, machine learning, data visualization, and end-to-end data pipelines.",

  keywords: [
    "Muhammad Munawwar Anwar",
    "Data Engineer",
    "Data Analyst",
    "SQL",
    "Python",
    "Machine Learning",
    "Data Visualization",
    "Portfolio",
  ],

  authors: [{ name: "Muhammad Munawwar Anwar" }],
  creator: "Muhammad Munawwar Anwar",

  openGraph: {
    title: "Muhammad Munawwar Anwar | Data Engineer & Analyst",
    description:
      "Data engineering and analytics portfolio featuring projects in SQL, Python, machine learning, and visualization.",
    url: "https://portfolio-eta-navy-34.vercel.app/",
    siteName: "Muhammad Munawwar Anwar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Munawwar Anwar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Munawwar Anwar | Data Engineer & Analyst",
    description:
      "Portfolio showcasing data engineering, analytics, and machine learning projects.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
