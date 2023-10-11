import { ReactNode } from "react"

type GridContainerProps = {
    children: ReactNode
}
const GridContainer = ({children}: GridContainerProps) => {
    return(
        <div className=" flex justify-center items-center gap-4 flex-wrap ">
            {children}
        </div>
    )
}

export default GridContainer