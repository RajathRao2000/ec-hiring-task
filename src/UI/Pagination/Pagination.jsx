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
    <div className="border p-3 text-center ">
      {paginationNumber.map((data) => (
        <button
          key={data}
          onClick={() => handlePagination(data)}
          className={`${
            currentPage === data ? "bg-blue-700 text-white" : ""
          } p-3 ml-4 rounded hover:bg-blue-500 hover:text-white`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
