import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: "Andy Clemente | Mobile Dev & AI Engineer",
  description: "Portfolio of Andy Clemente — Mobile Developer & AI Engineer from Havana, Cuba. Flutter, FastAPI, RAG systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
