import { useRouter } from "next/navigation";
import { InputSearch } from "../InputSearch"
import { useSearch } from "@/contexts/SearchContext";
import axios from "axios";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";

export const InputSearchModal = () => {
  const {push} = useRouter()
  const { searchTerm, setSearchTerm, setSearchResults } = useSearch();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://mongodb-jorri-next-production.up.railway.app/api/search?q=${searchTerm}`);
      setSearchResults(response.data);
      push(`/search`);
    } catch (error) {
      console.error('Erro na pesquisa:', error);
    }
  };
    return(
        <nav className={`w-screen h-14 top-[96.4px] absolute z-50 flex justify-center items-center bg-white left-0 animate-fade-down animate-duration-300 animate-ease-in-out`}>
            <InputSearch
                placeholder="Olá, o que você procura?"
                name="search"
                type="search"
                value={searchTerm}
                onClick={handleSearch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchTerm(e.target.value);
              }}             
        />
        </nav>
    )
}