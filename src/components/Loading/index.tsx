import {AiOutlineLoading} from 'react-icons/ai'

type IconLoading = {
    size: number
}

export const Loading = ({size}: IconLoading) => {
    return(
            <AiOutlineLoading className='animate-spin ' size={size}/>
    )
}