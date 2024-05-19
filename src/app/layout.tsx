import type { Metadata } from "next";
import { Inter, Prompt, Quicksand } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/layouts/header/Header";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fontAlt",
});

export const metadata: Metadata = {
  title: "Marimanagement",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={prompt.className}
        style={
          {
            "--fontMain": prompt.style.fontFamily,
            "--fontAlt": quicksand.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
