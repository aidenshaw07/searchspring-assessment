import React from "react";
import { useStore } from "../../zustand/store";

export const Pagination = () => {
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const totalPages = useStore((state) => state.totalPages);

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
