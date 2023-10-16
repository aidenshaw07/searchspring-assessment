import React from "react";

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <button
        hidden={currentPage === 1}
        onClick={() => {
          handlePreviousPage();
        }}
      >
        Previous Page
      </button>
      {currentPage} of {totalPages}
      <button
        hidden={currentPage === totalPages}
        onClick={() => {
          handleNextPage();
        }}
      >
        Next Page
      </button>
    </div>
  );
};
