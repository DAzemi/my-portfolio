import "./globals.css";
import Navbar from "./components/navbar";
import type { Metadata } from "next";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Dren's Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans antialiased">
        <Navbar />

        <main className="pt-20 px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
