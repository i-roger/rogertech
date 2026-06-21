import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '800'],
  variable: '--font-mono',
});

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