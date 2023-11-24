import { InputSearchModal } from "@/components/InputSearchModal";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { CiSearch } from "react-icons/ci"

export const InputSearchIcon = () => {

    const { sideSearchOpen, toggleSideSearch } = HandlesSideBar(); 

    return(
        <>
            <button onClick={toggleSideSearch}>
                <CiSearch size={30}/>
            </button>
            {sideSearchOpen && <InputSearchModal/>}
        </>
    )
}