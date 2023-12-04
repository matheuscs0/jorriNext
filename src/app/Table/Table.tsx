import { ReactNode } from "react"

type TableProps = {
    children: ReactNode
  }
  

export function TableRoot({children}: TableProps){
    return(
        <>
            <div className="w-[900px] ml-10">
            <table className="min-w-full">
                {children}
            </table>
            </div>
        </>
    )
}