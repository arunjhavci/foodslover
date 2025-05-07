import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import MainHeader from "../components/main-header/main-header";
import "./globals.css";

/*

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export const metadata: Metadata = {
  title: "A Foods Lover Project",
  description: "created by arun Jha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
