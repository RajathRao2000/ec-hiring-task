import { Helmet } from "react-helmet-async";
import Pagination from "../../UI/Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";
import { useContext, useState } from "react";
import Search from "./Search/Search";
import AuthContext from "../../context/authContext";
import useProductList from "../../custom-hooks/useProductList";
import PCShimmer from "./ProductCard/PCShimmer";
import ContentLoader from "react-content-loader";
const ProductListing = () => {
  const shimmer = [1, 1, 1, 1, 1, 1, 1, 1];
  const { auth } = useContext(AuthContext);
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
        <meta name="description" content="Browse through or products!!" />
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
          <div className="p-3 my-5 grid place-items-center">
            <ContentLoader
              width={300}
              height={60}
              viewBox="0 0 300 60"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="10" rx="8" ry="8" width="40" height="50" />
              <rect x="50" y="10" rx="8" ry="8" width="40" height="50" />
              <rect x="100" y="10" rx="8" ry="8" width="40" height="50" />
              <rect x="150" y="10" rx="8" ry="8" width="40" height="50" />
              <rect x="200" y="10" rx="8" ry="8" width="40" height="50" />
            </ContentLoader>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductListing;
