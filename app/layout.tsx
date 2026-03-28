import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FTF — Fédération Tunisienne de Football",
  description: "Site officiel de la Fédération Tunisienne de Football",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
