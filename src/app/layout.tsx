import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshi's Portfolio",
  description: "Made by love and by next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
