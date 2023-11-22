

type ImageAbout ={
    src: string
}

export const ImageAbout = ({src}: ImageAbout) => {
    return(
        <img src={src} alt="" className="w-[90px] h-[90px] object-cover cursor-pointer"/>
    )   
}