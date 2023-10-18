import { useStore } from "../../zustand/store";
import "./pagination.scss";

export const Pagination = () => {
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const totalPages = useStore((state) => state.totalPages);
  const nextPage = useStore((state) => state.nextPage);
  const previousPage = useStore((state) => state.previousPage);

  const handlePageNavigation = (page) => setCurrentPage(page);

  const handleNextPage = () => handlePageNavigation(nextPage);
  const handlePreviousPage = () => handlePageNavigation(previousPage);
  const handleNextPage2 = () => handlePageNavigation(nextPage + 1);
  const handlePreviousPage2 = () => handlePageNavigation(previousPage - 1);
  const handleFirstPage = () => handlePageNavigation(1);
  const handleLastPage = () => handlePageNavigation(totalPages);

  return (
    <div className="pagination-container">
      <a
        className="pagination-btn"
        hidden={currentPage <= 2}
        onClick={handleFirstPage}
      >
        First Page
      </a>
      <a hidden={currentPage <= 3}>...</a>
      <a
        className="pagination-btn"
        hidden={currentPage <= 2}
        onClick={handlePreviousPage2}
      >
        {currentPage - 2}
      </a>
      <a
        className="pagination-btn"
        hidden={currentPage === 1}
        onClick={handlePreviousPage}
      >
        {currentPage - 1}
      </a>
      <a className="current-page">{currentPage}</a>
      <a
        className="pagination-btn"
        hidden={currentPage === totalPages}
        onClick={handleNextPage}
      >
        {currentPage + 1}
      </a>
      <a
        className="pagination-btn"
        hidden={currentPage === totalPages || currentPage === totalPages - 1}
        onClick={handleNextPage2}
      >
        {currentPage + 2}
      </a>
      <a
        hidden={
          currentPage === totalPages ||
          currentPage === totalPages - 1 ||
          currentPage === totalPages - 2
        }
      >
        ...
      </a>
      <a
        className="pagination-btn"
        hidden={
          currentPage === totalPages ||
          currentPage === totalPages - 1 ||
          currentPage === totalPages - 2
        }
        onClick={handleLastPage}
      >
        Last Page
      </a>
    </div>
  );
};
