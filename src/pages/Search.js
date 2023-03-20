import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GetAsset from "../components/GetAsset";
import useAxios from "../hooks/Useaxios";
import { motion } from "framer-motion";
const Search = () => {
  const { data, error } = useAxios({
    url: "http://localhost:4000/api/v1/activities",
  });
  const [searchValue, setSearchValue] = useState("");
  const filter = data?.filter((e) =>
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(filter);
  let result = searchValue !== "" && filter?.length > 0;

  return (
    <div className="bg-purple h-screen ">
      <div className="flex mb-12 flex-col items-center justify-center">
        <h1 className="text-grey text-big self-start pl-5 pt-5">Søg</h1>
        <form className="relative w-[90%] flex m-auto">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            name="search"
            className="w-[100%] text-grey text-medium py-2 bg-grey/30"
            type="search"
          />
          <FeatherIcon
            className="text-grey absolute right-2 top-3"
            icon="search"
          />
        </form>
        {result && (
          <div className="mb-12 pr-7">
            {filter.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    className="mt-30 relative w-[90%] m-auto"
                    to={`/aktivitetsDetalje/${item.id}`}
                  >
                    <GetAsset assetID={item.id} />
                    <div className="rounded-bl-2xl rounded-tr-2xl absolute -translate-y-12 mb-5 bg-pink bg-opacity-75 ml-10 w-[88%] z-20">
                      <h1>{item.name}</h1>
                      <p>
                        {item.minAge} - {item.maxAge}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        {!result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-grey text-medium w-64 mt-5"
          >
            <FeatherIcon icon="archive" size="32" />
            <h1 className="text-grey text-medium w-64">
              Ingen søge Resultater
            </h1>
          </motion.div>
        )}
      </div>
      {error && <div className="text-grey flex text-medium justify-center">{error}</div>}
    </div>
  );
};

export default Search;
