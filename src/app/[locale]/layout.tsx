import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/context/LanguageProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { NavbarNew, Footer } from "@/components";
import DataProvider from "@/context/DataProvider";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Takhi",
  description: "Generated by create next app",
  keywords: "",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={`${manrope.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <DataProvider>
              <main>
                <NavbarNew />
                <div className="sm:ml-[102px] pt-16 sm:pt-0">{children}</div>
                <Toaster />
              </main>
            </DataProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
