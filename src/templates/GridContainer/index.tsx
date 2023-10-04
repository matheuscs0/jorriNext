import { ReactNode } from "react"

type GridContainerProps = {
    children: ReactNode
}
const GridContainer = ({children}: GridContainerProps) => {
    return(
        <div className="w-full h-full justify-center items-center grid-cols-3">
            {children}
        </div>
    )
}

export default GridContainer