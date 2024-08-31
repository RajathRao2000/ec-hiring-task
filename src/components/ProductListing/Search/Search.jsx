import React, { useContext, useEffect, useState } from "react";
import Input from "../../../UI/FormComponents/Input/Input";
// import apiData from "../../../utils/temp";
import useProductList from "../../../custom-hooks/useProductList";
import AuthContext from "../../../context/authContext";

const Search = () => {
  const { auth } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [products, loading] = useProductList(auth.token);
  useEffect(() => {
    setFilteredData(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="relative p-5 flex justify-center">
      <Input
        type="search"
        className="w-96"
        label="Search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className=" absolute top-20 border bg-white z-50">
        {/* {loading && <div>Loading...</div>} */}
        {search &&
          filteredData.map((product) => (
            <div
              className="p-3 w-[90vw] sm:w-full sm:min-w-96 text-gray-500 hover:bg-gray-100 cursor-pointer"
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
