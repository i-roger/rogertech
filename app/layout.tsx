import { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '800'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Rogertech',
  description: 'RogerTech é uma empresa de engenharia de software especializada em landing pages de alta conversão, automações para WhatsApp, aplicações web modernas e soluções digitais focadas em performance, SEO e aumento de faturamento para empresas, além de contar com um setor especializado em manutenção, formatação e otimização de computadores e notebooks.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-mono bg-[#030307]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}