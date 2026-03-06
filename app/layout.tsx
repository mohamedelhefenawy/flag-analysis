import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import Footer from "./components/layout/Footer";
import "./globals.css";
import Navbar from "./components/layout/Navbar";



const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/layout/nav/logo.png",
  },
  title: "Flag Analysis",
  description: "Flag Analysis is a platform that provides intelligence on football players, teams, and tactical analysis.",
  keywords: ["Flag Analysis", "Football Intelligence", "Tactical Analysis", "Player Intelligence", "Team Intelligence"],
  authors: [{ name: "Flag Analysis", url: "https://flaganalysis.com" }],
  openGraph: {
    title: "Flag Analysis",
    description: "Flag Analysis is a platform that provides intelligence on football players, teams, and tactical analysis.",
    url: "https://flaganalysis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${jost.variable} bg-black `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
