import React from "react";

const Pagination = ({
  postsPerPage,
  length,
  handlePagination,
  currentPage,
}) => {
  let paginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumber.push(i);
  }
  return (
    <div className="p-3 my-5 text-center ">
      {paginationNumber.map((data) => (
        <button
          key={data}
          onClick={() => handlePagination(data)}
          className={`${
            currentPage === data
              ? "bg-blue-700 text-white"
              : "hover:border-blue-700 hover:text-blue-700"
          } p-3 ml-4 rounded border `}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
