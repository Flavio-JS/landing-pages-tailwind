import { WindowSizeProvider } from "@/contexts/WindowSizeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/contexts/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing-pages",
  description: "Landing-pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <WindowSizeProvider>
          <body className={inter.className}>{children}</body>
        </WindowSizeProvider>
      </ReactQueryProvider>
    </html>
  );
}
