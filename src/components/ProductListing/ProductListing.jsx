import { Helmet } from "react-helmet-async";
import Pagination from "../../UI/Pagination/Pagination";
import apiData from "../../utils/temp";
import ProductCard from "./ProductCard/ProductCard";
import { useContext, useState } from "react";
import Input from "../../UI/FormComponents/Input/Input";
import Search from "./Search/Search";
import AuthContext from "../../context/authContext";
import useProductList from "../../custom-hooks/useProductList";
import { ShimmerPostList } from "react-shimmer-effects";
import PCShimmer from "./ProductCard/PCShimmer";
const ProductListing = () => {
  const shimmer = [1, 1, 1, 1, 1, 1, 1, 1];
  const { auth } = useContext(AuthContext);
  // const [posts, setPosts] = useState(apiData);
  // const [loading, setLoading] = useState(false);
  const [products, loading, error] = useProductList(auth.token);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPge;
  const indexOfFirstPost = indexOfLastPost - postsPerPge;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Product Listing</title>
      </Helmet>
      <div className="">
        <p className="border p-1 text-center border-y-green-700 bg-green-300 text-green-800">
          Logged in as <strong className="text-green-950">{auth.email}</strong>
        </p>
        <div className="max-w-6xl mx-auto">
          <Search />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
            {!loading
              ? currentPosts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              : shimmer.map((_, i) => <PCShimmer key={i} />)}
          </div>
        </div>
        {!loading ? (
          <Pagination
            length={products.length}
            postsPerPage={postsPerPge}
            handlePagination={handlePagination}
            currentPage={currentPage}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default ProductListing;
