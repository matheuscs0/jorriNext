

type ImageAbout ={
    src: string
    onClick: () => void
}

export const ImageAbout = ({src, onClick}: ImageAbout) => {
    return(
        <img src={src} alt="" className="w-[90px] h-[90px] object-cover cursor-pointer" onClick={onClick}/>
    )   
}