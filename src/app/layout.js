import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason Woo's Portfolio App",
  description: "Using Next.js, Framer Motion & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
