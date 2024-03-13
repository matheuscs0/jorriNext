import { InputSearchModal } from "@/components/InputSearchModal";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { CiSearch } from "react-icons/ci"
import { IoSearchOutline } from "react-icons/io5";

export const InputSearchIcon = () => {

    const { sideSearchOpen, toggleSideSearch } = HandlesSideBar(); 

    return(
        <>
            <button onClick={toggleSideSearch}>
                <IoSearchOutline size={30}/>
            </button>
            {sideSearchOpen && <InputSearchModal/>}
        </>
    )
}