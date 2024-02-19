import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Esther Carmona - Frontend Developer",
  description: "Animated portfolio of Esther Carmona, a frontend developer based in Spain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>
        {children}
      </TransitionProvider>
      </body>
    </html>
  );
}
