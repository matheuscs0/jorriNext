import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import Provider from "@/contexts/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const montserrat = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorri Pratas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <Provider>
        <body className="w-full h-full flex-col m-0 p-0 bg-white">
          {/* Cabeçalho da página */}
          <header className="mb-10">
            <NavBar hasIconAccount={true} hasIconCart={true} />
          </header>
          
          {/* Conteúdo principal */}
          <section className="w-full h-full flex">
            {children}
          </section>

          {/* Rodapé da página */}
          <footer className="mt-10 bottom-0"><Footer /></footer>
        </body>
        <SpeedInsights/>
        <Analytics/>
      </Provider>
    </html>
  );
} 
