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

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div>
      <button
        hidden={currentPage === 1 || currentPage === 2}
        onClick={handleFirstPage}
      >
        First Page
      </button>
      <button hidden={currentPage === 1} onClick={handlePreviousPage}>
        Previous Page
      </button>
      {currentPage} of {totalPages}
      <button hidden={currentPage === totalPages} onClick={handleNextPage}>
        Next Page
      </button>
      <button
        hidden={currentPage === totalPages || currentPage === totalPages - 1}
        onClick={handleLastPage}
      >
        Last Page
      </button>
    </div>
  );
};
