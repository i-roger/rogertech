import { Project } from './types';

export const projectsData: Record<string, Project> = {
  Panorama: {
    title: "Panorama Games",
    desc: (
    <>
        Hub e catálogo interativo de jogos da {" "}
        <a
        className='text-indigo-400'
        href='https://panoramapanorama.com.br'
        target="_blank"
        rel="noopener noreferrer">
            PANORAMA
        </a>, uma das marcas referência no mercado de games retrô, desenvolvido para oferecer uma experiência moderna, organizada e intuitiva na exploração da lista de jogos dos consoles da Panorama.
    </>
    ),
    stack: ["Next.js", "TailwindCSS", "Framer Motion", "Cloudflare CDN"],
    lighthouse: {
      performance: 100,
      accessibility: 94,
      bestPractices: 100,
      seo: 100
    },
    deviceTitle: "Panorama Games",
    deviceSlogan: "A sua nova dimensão de entretenimento",
    liveUrl: "https://panorama-games.vercel.app"
  },

  raiolaranja: {
    title: "RaioLaranja",
    desc: "Treine com estratégia, corra com propósito. Uma plataforma criada para ajudar corredores a entender seus ritmos, melhorar sua performance e evoluir com inteligência.",
    stack: ["Next.js", "TypeScript", "Tailwindcss", "Prisma", "FormSubmit", "PostgreSQL", "Better-Auth", "Framer-Motion"],
    lighthouse: {
      performance: 99,
      accessibility: 93,
      bestPractices: 100,
      seo: 100
    },
    deviceTitle: "RaioLaranja",
    deviceSlogan: "Treine com estratégia, corra com propósito. Uma plataforma criada para ajudar corredores a entender seus ritmos, melhorar sua performance e evoluir com inteligência.",
    liveUrl: "https://raiolaranja.vercel.app"
  },
  
  QRCODEGRATIS: {
    title: "QR Code Grátis",
    desc: "Aplicação desenvolvida para gerar QR Codes de forma dinâmica a partir de textos ou links inseridos pelo usuário, permitindo visualizar e baixar a imagem instantaneamente com apenas um clique. Criada com foco em praticidade, rapidez e uma interface simples e intuitiva.",
    stack: ["Next.js", "TypeScript", "Tailwindcss", "qrcode.react"],
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    deviceTitle: "QR Code Grátis",
    deviceSlogan: "Aplicação desenvolvida para gerar QR Codes de forma dinâmica a partir de textos ou links inseridos pelo usuário, permitindo visualizar e baixar a imagem instantaneamente com apenas um clique. Criada com foco em praticidade, rapidez e uma interface simples e intuitiva.",
    liveUrl: "https://qrcodegratis.vercel.app/"
  },
};
