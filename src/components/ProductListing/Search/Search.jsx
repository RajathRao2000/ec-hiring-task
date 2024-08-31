import React, { useEffect, useState } from "react";
import Input from "../../../UI/FormComponents/Input/Input";
import apiData from "../../../utils/temp";
const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(
      apiData.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <div className="relative p-5 flex justify-center">
      <Input
        className={"w-96"}
        label="Search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className=" absolute top-20 border bg-white z-50">
        {search &&
          filteredData.map((product) => (
            <div
              className="p-3 w-full min-w-96 text-gray-500 hover:bg-gray-100 cursor-pointer"
              key={product.id}
            >
              {product.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
