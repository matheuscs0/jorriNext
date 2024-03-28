import {AiOutlineLoading} from 'react-icons/ai'

export const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-80">
          <div className='flex flex-col justify-center items-center'>
            <AiOutlineLoading className='animate-spin' size={34}/>
            Processando...
          </div>
        </div>
      )
}