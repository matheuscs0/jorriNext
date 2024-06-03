import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import Provider from "@/contexts/Provider";
import { Footer } from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorri Joias",
  description: "Descubra a beleza intemporal da prata 925 em nossa coleção de joias deslumbrantes. Feitas com o mais alto padrão de qualidade, nossas peças refletem elegância e sofisticação, perfeitas para adicionar um toque de brilho e estilo a qualquer ocasião. Explore uma variedade de designs meticulosamente elaborados, desde clássicos atemporais até peças modernas e ousadas. Cada joia é uma expressão de excelência artesanal e amor pela estética refinada.",
  openGraph: {
    images: {
      url: "/logoJorri.png",
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    <html lang="pt-br" className={montserrat.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </head>
       <GoogleTagManager gtmId="GTM-WJ6S53BG" />
      <Provider>
        <body className="w-full h-full flex-col m-0 p-0 bg-white">
        
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
      </Provider>
    </html>
  );
} 
