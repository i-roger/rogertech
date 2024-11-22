import Image from "next/image";
import localFont from "next/font/local";

import Illustration1 from "@/assets/svg/programar2.svg";

import SetaBaixo from "@/assets/svg/arrowdown.svg"

import ModalFullscreen from "@/pages/components/modalFullscreen"
import React, { useEffect, useState } from "react"

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
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if(open) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  })

  return (
    <div
      className={`flex flex-col gap-4 ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex w-full">
        <div className="flex w-full justify-center items-center p-4">
          <h1 className="bg-[#2f2e41] p-4 rounded-xl text-[38px] text-[#73ff63] shadow font-extrabold">
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
          <div className="flex flex-col items-center justify-center">
            <div className="p-4">
              <Image className="w-12 h-12 animate-bounce drop-shadow" alt="" src={SetaBaixo}/>
            </div>
            <h1 className="titulo2 text-center">Nossos Clientes</h1>
          </div>
        </div>  


        <div className="section">
          <h1 className="titulo">Formatação e Manutenção de Computadores</h1>
          <Image className="img" alt="" src={Illustration1} />
          <h1 className="text-center text-xl font-bold">Seu computador está lento?</h1>
          <p className="text-justify">
            Faremos uma análise e buscaremos a melhor forma para resolver o seu problema. Contamos com serviços como: <br/> •
            BACKUPS • Atualização de Sistemas • Instalação de Softwares •
            Instalação de Hardwares e muito mais...
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="flex justify-center p-2">
          <div onClick={()=>{setOpen(true)}} className={`${open ? "overflow-y-hidden" : "overflow-y-auto"} animate-zoom-anim shadow flex justify-center items-center bg-[#4ec963] w-[200px] h-10 rounded-xl`}>
            <h1 className="text-white text-extrabold">Entre em Contato Já!</h1>
          </div>
        </div>
      </div>

      <ModalFullscreen open={open} onClose={()=> setOpen(false)}>
        <div className="bg-white w-full h-full p-4">
          <h1 className="text-3xl text-center">Faça o cadastro e nos envie uma mensagem!</h1>
        </div>


      </ModalFullscreen>
    </div>
  );
}
