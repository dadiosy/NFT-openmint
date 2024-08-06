import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPEN MINT",
  description: "host decentralised mint on Bitcoin",
  icons: "/1.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full flex flex-col justify-between`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <section className="flex-1">{children}</section>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
