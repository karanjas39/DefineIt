import { type ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/_components/ThemeProvider";
import NavBar from "@/app/_components/NavBar";
import { SearchProvider } from "./_contexts/searchContext";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "DefineIt - Your Ultimate Dictionary",
  description:
    "DefineIt is your go-to dictionary app for word definitions, pronunciations, origins, and more. Discover the meanings of words, their phonetics, and examples of usage all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} dark:bg-neutral-900 dark:text-neutral-300 bg-neutral-300 text-neutral-900`}
      >
        <ThemeProvider>
          <NavBar />
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
