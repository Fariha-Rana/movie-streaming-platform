import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import Head from "next/head";
export const metadata = {
  title: "Movie App",
  description: "Find data for movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}