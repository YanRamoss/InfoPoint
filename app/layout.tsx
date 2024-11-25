import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoPoint",
  description: "Totem de Informações - ETEC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"> 
      <body className={inter.className}>
        <Header />
          <div className="container mx-auto pb-[100px] mt-[120px]">
            {children}
          </div>
        <Footer />
        </body>
    </html>
  );
}
