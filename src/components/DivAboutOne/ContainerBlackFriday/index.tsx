type ContainerBlackProps = {
    quantify: number
    parts: number
}

export const ContainerBlackFriday = ({quantify, parts}: ContainerBlackProps) => {
    return(
        <div className="w-24 h-24 border-4 border-white text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{quantify}%</h1>
            <p className="text-md text-gray-300">{parts} peça</p>
        </div>
    )
}