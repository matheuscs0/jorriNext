import { BsFacebook, BsGoogle } from 'react-icons/bs'
import Image from "next/image";


export const Login = () => {
    return(
        <div className="w-[400px] h-[600px] flex flex-col bg-neutral-950 p-10 rounded-lg shadow-2xl">
            <div className='w-full flex justify-center items-start my-6'>
                <Image src='/logoJorri.png' width={150} height={150} alt='logoJorri'/>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <button className=' flex justify-center items-center bg-red-800 w-full h-14 rounded-md shadow-md gap-5'>
                    <BsGoogle size={32} color="#ffffff" />
                    <span className='text-sm text-white'>Continue com o Google</span>
                </button>
                <button className=' flex justify-center items-center bg-blue-800 w-full h-14 rounded-md shadow-md gap-5'>
                    <BsFacebook size={32} color='#ffffff'/>
                    <span className='text-sm text-white'>Continue com o Facebook</span>
                </button>
            </div>g
            <div className='w-full mt-5 h-[1.5px] bg-neutral-900'></div>
        </div>
    )
}