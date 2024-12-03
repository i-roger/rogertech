import Image from "next/image";
import localFont from "next/font/local";

import img2 from "@/assets/svg/programar2.svg";
import img1 from "@/assets/svg/programar.svg"

import SetaBaixo from "@/assets/svg/arrowdown.svg"
import SetaDireita from "@/assets/svg/arrowright.svg"

import ModalFullscreen from "@/pages/components/modal/modalFullscreen"
import React, { useEffect, useState } from "react"

import Carousel from "@/pages/components/carousel/clientes"

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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [chamado, setChamado] = useState('');

  useEffect(() => {
    if(open) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  })

  function enviarMensagem() {
    const msg = `Nome: ${nome} | + Email: ${email} | + Chamado: ${chamado}`
    window.open(`https://api.whatsapp.com/send/?phone=+5521999055127&text=${msg}&type=phone_number&app_absent=0`)
  }

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
          <Image className="img" alt="" src={img2} />
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
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="titulo2 text-center">Nossos Clientes</h1>
            <p>Clique e veja mais!</p>
            <Carousel/>
          </div>
        </div>  

        <div className="section">
          <h1 className="titulo">Formatação e Manutenção de Computadores</h1>
          <Image className="img" alt="" src={img1} />
          <h1 className="text-center text-xl font-bold">Seu computador está lento? <br/> Algo não funciona do jeito que deveria?</h1>
          <p className="text-justify">
            Faremos uma análise e buscaremos a melhor forma para solucionar o seu problema. contamos com serviços como:
          </p>

          <div className="flex flex-col items-baseline bg-[#2f2e41] rounded-xl p-4">
          <div className="flex">
              <Image alt="" width={16} src={SetaDireita}/>
              <p className="text-justify text-white">Suporte Remoto</p>
            </div>
            <div className="flex">
              <Image alt="" width={16} src={SetaDireita}/>
              <p className="text-justify text-white">Backup</p>
            </div>
            <div className="flex text-justify">
              <Image alt="" width={16} src={SetaDireita}/>
              <p className="text-justify text-white">Atualização de Sistemas Operacionais</p>
            </div>
            <div className="flex">
              <Image alt="" width={16} src={SetaDireita}/>
              <p className="text-justify text-white">Instalação de Softwares</p>
            </div>
            <div className="flex">
              <Image alt="" width={16} src={SetaDireita}/>
              <p className="text-justify text-white">Instalação de Hardwares e muito mais...</p>
            </div>

          </div>
        </div>
      </div>

      <ModalFullscreen open={open} onClose={()=> setOpen(false)}>
        <div className="flex flex-col justify-center gap-4 w-full h-full p-4">
          <h1 className="text-3xl text-center font-bold">Faça o cadastro e nos envie uma mensagem!</h1>
        <form action={enviarMensagem} className="flex flex-col gap-2">
          <div className="flex flex-col justify-center gap-2">
            <label className="font-semibold" htmlFor="nome">Nome:</label>
            <input onChange={(e)=>setNome(e.target.value)} className="bg-[#2f2e41] rounded p-2 text-white" id="nome" type="text" />
            <label className="font-semibold" htmlFor="email">Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} className="bg-[#2f2e41] rounded p-2 text-white" id="email" type="text" />
            <label className="font-semibold" htmlFor="chamado">Chamado:</label>
            <textarea onChange={(e)=>setChamado(e.target.value)} className="resize-none bg-[#2f2e41] h-[200px] rounded p-2 text-white" id="chamado"/>
          </div>
          <div className="">
            <button 
            className="bg-green-500 rounded p-2 text-xl text-white font-semibold hover:bg-green-400" type="submit">
              Enviar
            </button>
          </div>
        </form>
        </div>
      </ModalFullscreen>
      <div className="fixed z-10 bottom-0 w-full">
        <div className="flex justify-center p-2">
          <div onClick={()=>{setOpen(true)}} className={`${open ? "overflow-y-hidden" : "overflow-y-auto"} cursor-pointer animate-zoom-anim shadow flex justify-center items-center bg-[#4ec963] w-[200px] h-10 rounded-xl`}>
            <h1 className="text-black font-extrabold">Entre em Contato Já!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
