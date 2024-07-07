import { type ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/_components/ThemeProvider";
import NavBar from "@/app/_components/NavBar";
import { SearchProvider } from "./_contexts/searchContext";

const poppins = Poppins({
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
        className={`${poppins.className} dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800`}
      >
        <ThemeProvider>
          <NavBar />
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
