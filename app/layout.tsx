import "./globals.css";
import Navbar from "./components/navbar";
import type { Metadata } from "next";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Dren's Portofolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans antialiased min-h-screen">
        <div className="relative z-50">
          <Navbar />
        </div>
        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
