import { HomeImages } from "@/const/HomeImages"
import { ContainerBlackFriday } from "./ContainerBlackFriday"

export const DivAboutOne = () => {
    return(
        <div className="w-screen h-[400px] flex bg-black items-center justify-around ">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-6xl text-center font-bold max-w-[350px]">BLACK FRIDAY</h1>
                <div className="flex gap-5 mt-5">
                    <ContainerBlackFriday quantify={5} parts={1}/>
                    <ContainerBlackFriday quantify={10} parts={2}/>
                    <ContainerBlackFriday quantify={15} parts={3}/>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-full gap-3">
                {HomeImages.map( (item) => (
                    <div key={item.id} className="w-[300px] h-full py-2">
                        <img src={item.image} alt="" className="w-full h-full rounded-md"/>
                    </div>
                ))}
            </div>
        </div>
    )
}