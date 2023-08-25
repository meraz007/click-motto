import Link from "next/link";

interface Props{
    href:string,
    buttonText: string
}
export default function NavLink({href, buttonText}: Props){
    return(
        <>
        <Link className="text-[15px] font-medium text-[#b2b2b2] hover:text-[#1c1c1c]" href={href}>{buttonText}</Link>
        </>
    )
}