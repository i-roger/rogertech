import Image from "next/image";
import localFont from "next/font/local";

import Illustration1 from "@/assets/svg/programar2.svg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`flex flex-col gap-4 ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex w-full">
        <div className="flex w-full justify-center items-center p-4">
          <h1 className="bg-black p-4 rounded-xl text-[38px] text-white drop-shadow-md font-extrabold">
            RogerTech
          </h1>
        </div>
      </div>

      <div className="wrapper">
        <div className="section">
          <h1 className="titulo">Landing Pages</h1>
          <Image className="img" alt="" src={Illustration1} />
          <p className="text-justify">
            É uma página web que conta com todos os elementos voltados à
            conversão, do visitante ao Lead ou da oportunidade ao cliente.
            Também conhecidas como páginas de conversão ou de captura, elas são
            item-chave nas campanhas de Marketing Digital.
          </p>
        </div>

        <div className="section">
          <h1 className="titulo">Formatação e Manutenção de Computadores</h1>
          <Image className="img" alt="" src={Illustration1} />
          <p className="text-justify">
            Seu computador está lento? Faremos uma análise e buscaremos a melhor
            forma para resolver o seu problema. Contamos com serviços como: <br/> •
            BACKUPS • Atualização de Sistemas • Instalação de Softwares •
            Instalação de Hardwares e muito mais...
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="flex justify-center p-2">
          <div className="flex justify-center items-center bg-green-500 w-[200px] h-10 rounded-xl">
            <h1 className="text-white text-extrabold">Entre em Contato Já!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
