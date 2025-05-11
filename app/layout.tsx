import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "RogerTech",
  description: "Entre em contato conosco. Temos uma equipe pronta para te ajudar, seja no desenvolvimento do seu site/aplicação ou suporte ao usuário com serviços de formatação, correção de erros, instalação e atualização de softwares... Envie sua mensagem agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-center items-center p-4">
              <h1 className={`bg-[#2f2e41] p-4 rounded-xl text-[38px] text-[#73ff63] shadow shadow-black/50 font-extrabold`}>RogerTech</h1>
            </div>
            <Menu/>
        </div>
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
