import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NuCamp",
  description: "NuCamp React Course Lesson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen grid grid-rows-[auto,1fr,auto]`}>
        <header className="border-b">
          <div className="max-w-6xl mx-auto">
            <Navbar />
          </div>
        </header>

        <main>
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>

        <footer>
          <div className="max-w-6xl mx-auto">Footer</div>
        </footer>
      </body>
    </html>
  );
}
