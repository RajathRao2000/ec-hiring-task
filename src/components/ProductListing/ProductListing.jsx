import { Helmet } from "react-helmet-async";
import Pagination from "../../UI/Pagination/Pagination";
import apiData from "../../utils/temp";
import ProductCard from "./ProductCard/ProductCard";
import { useState } from "react";
import Input from "../../UI/FormComponents/Input/Input";
import Search from "./Search/Search";
const ProductListing = () => {
  const [posts, setPosts] = useState(apiData);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPge;
  const indexOfFirstPost = indexOfLastPost - postsPerPge;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Product Listing</title>
      </Helmet>
      <div className="border">
        <div className="max-w-6xl mx-auto">
          <Search />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
            {currentPosts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        <Pagination
          length={posts.length}
          postsPerPage={postsPerPge}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductListing;
