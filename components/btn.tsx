import Link from "next/link";

interface btnProps {
    name: string;
    href: string;
    cor: string;
}

export default function Button({name, href, cor}: btnProps) {

    return(
        <Link className={`${cor} p-4 rounded-xl active:opacity-50`} href={href}>{name}</Link>
    )
}