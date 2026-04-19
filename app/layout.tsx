import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: "Andy Clemente | Software Engineer",
  description: "Portfolio of Andy Clemente — Software Engineer from Havana, Cuba. Mobile Development and AI specialist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}