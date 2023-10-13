import { BsFacebook, BsGoogle } from "react-icons/bs";

type ButtonSociaisProps = {
    hasIconGoogle?: boolean
    hasIconFacebook?: boolean
    span: string
}
export const ButtonSociais = ({hasIconFacebook, hasIconGoogle, span}: ButtonSociaisProps) => {
    return (
       <>
        {hasIconGoogle && (
            <button className='flex justify-center items-center bg-red-800 w-full h-14 rounded-md shadow-md gap-5 hover:bg-red-900 transition-all'>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[20%] justify-center flex items-center"><BsGoogle size={32} color="#ffffff" /></div>
                    <div className="w-[80%] flex justify-center items-center"><span className='text-sm text-white'>{span}</span></div>
                </div>
            </button>
        )}
        {hasIconFacebook && (
            <button className='flex justify-center items-center bg-blue-800 w-full h-14 rounded-md shadow-md gap-5 hover:bg-blue-900 transition-all'>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[20%] justify-center flex items-center"><BsFacebook size={32} color="#ffffff" /></div>
                    <div className="w-[80%] flex justify-center items-center"><span className='text-sm text-white'>{span}</span></div>
                </div>
            </button>
        )}
       </>
    )
}