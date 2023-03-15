import FeatherIcon from "feather-icons-react"
import { useEffect, useState } from "react";

const Search = () => {
const [searchValue, setSearchValue] = useState("");

useEffect(() => {
    console.log(searchValue)
}, [searchValue]);
   
    return ( <div className="bg-purple h-screen ">
        <div className="flex mb-12 flex-col items-center justify-center">

        <h1 className="text-grey text-big self-start pl-5 pt-5">Søg</h1>
        <form  className="relative w-[90%] flex m-auto">
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} name="search" className="w-[100%] text-grey text-medium py-2 bg-grey/30" type="search"  />
            <FeatherIcon className="text-grey absolute right-2 top-3" icon="search"/>
        </form>
        </div>
        </div>
     );
}
 
export default Search;