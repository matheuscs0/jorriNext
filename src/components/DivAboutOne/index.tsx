import { HomeImages } from "@/const/HomeImages"
import { ContainerBlackFriday } from "./ContainerBlackFriday"

export const DivAboutOne = () => {
    return(
        <div className={`w-screen flex-col bg-black items-center justify-around text-center sm:flex md:flex-row `}>
            <div className="flex flex-col justify-center items-center">
                <div className="text-white text-4xl text-center font-bold max-w-[350px] sm:text-6xl md:text-6xl"><h1>CAMPANHA</h1> <div className="flex ml-0 sm:ml-10 md:ml-10"><p className="text-[14px]">DE</p> <h1>LANÇAMENTO!</h1></div></div>
                <div className="flex gap-5 my-5">
                    <ContainerBlackFriday quantify={5} parts={1}/>
                    <ContainerBlackFriday quantify={10} parts={2}/>
                    <ContainerBlackFriday quantify={15} parts={3}/>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3">
                {HomeImages.map( (item) => (
                    <div key={item.id} className={`w-[120px] h-[150px] py-2 sm:w-[200px] md:w-[300px] sm:h-full md:h-full `}>
                        <img src={item.image} alt="" className="w-full h-full rounded-md object-cover"/>
                    </div>
                ))}
            </div>
        </div>
    )
}