import Link from "next/link"

type ImgAbout = {
    src : string
    href: string
}

export const ImgHome = ({src, href}: ImgAbout) => {
    return(
        <Link href={`/categoria/${href}`} className="max-w-[360px] max-h-[360px] flex items-center overflow-hidden">
            <img src={src} alt="" className="hover:scale-110 duration-500 transition-all cursor-pointer"/>
        </Link>
    )
}