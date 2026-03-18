import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Munawwar Anwar | Data Analyst",
    template: "%s | Muhammad Munawwar Anwar",
  },
  description:
    "Portfolio of Muhammad Munawwar Anwar — Entry-Level Data Analyst specializing in SQL, Python, Power BI, ETL pipelines, and data validation.",

  keywords: [
    "Muhammad Munawwar Anwar",
    "Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "ETL Pipelines",
    "Data Validation",
    "Data Visualization",
    "Emory University",
    "Portfolio",
  ],

  authors: [{ name: "Muhammad Munawwar Anwar" }],
  creator: "Muhammad Munawwar Anwar",

  openGraph: {
    title: "Muhammad Munawwar Anwar | Data Analyst",
    description:
      "Entry-Level Data Analyst portfolio featuring projects in SQL optimization, Python automation, ETL pipelines, and Power BI dashboards.",
    url: "https://munawwaranwar.com",
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
    title: "Muhammad Munawwar Anwar | Data Analyst",
    description:
      "Entry-Level Data Analyst portfolio showcasing SQL optimization, Python automation, ETL pipelines, and data visualization projects.",
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