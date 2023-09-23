import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/contexts/context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NuCamp",
  description: "NuCamp React Course Lesson",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen grid grid-rows-[auto,1fr,auto]`}>
        <ContextProvider>
          <header className="border-b">
            <div className="max-w-6xl mx-auto">
              <Navbar />
            </div>
          </header>

          <main>
            <div className="max-w-6xl mx-auto p-4">{children}</div>
          </main>

          <footer className="bg-slate-400 text-white">
            <div className="max-w-6xl mx-auto">
              <Footer />
            </div>
          </footer>
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
