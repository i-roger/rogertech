'use client'
import Link from "next/link"

import { usePathname } from "next/navigation";

export default function Menu() {

    const pathname = usePathname();

    const navLinks = [
        {name: "Inicio", href:"/inicio"},
        {name: "Portfolio", href:"/portfolio"},
    ]
    return (
        <div className="flex w-full justify-center items-center p-4">
          <div className="flex flex-row gap-4 bg-[#2f2e41] p-4 rounded-xl text-[20px] text-[#73ff63] font-extrabold shadow shadow-black/40">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return(
                <Link className={`flex flex-col items-center ${isActive ? "text-[#73ff63]" : "text-zinc-400"}`} 
                href={link.href}
                key={link.name}>
                    {link.name}
                </Link>
            )
          })}
          </div>
        </div>
    )
}