import { useStore } from "../../zustand/store";
import firstPageArrow from "../../assets/firstpage-arrow.svg";
import lastPageArrow from "../../assets/lastpage-arrow.svg";
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
  const handleNextPagePlusOne = () => handlePageNavigation(nextPage + 1);
  const handlePreviousPageMinusOne = () =>
    handlePageNavigation(previousPage - 1);
  const handleFirstPage = () => handlePageNavigation(1);
  const handleLastPage = () => handlePageNavigation(totalPages);

  const firstPageArrowAndCurrentPageMinusTwoHide = currentPage <= 2;
  const currentPageMinusOneHide = currentPage === 1;
  const currentPagePlusOneHide = currentPage === totalPages;
  const currentPagePlusTwoHide = currentPage >= totalPages - 1;
  const lastPageArrowHide = currentPage >= totalPages - 2;

  return (
    <div className="pagination-container">
      <a
        className="pagination-btn"
        hidden={firstPageArrowAndCurrentPageMinusTwoHide}
        onClick={handleFirstPage}
      >
        <img className="page-arrows" src={firstPageArrow} alt="firstpage" />
      </a>
      <a
        className="pagination-btn"
        hidden={firstPageArrowAndCurrentPageMinusTwoHide}
        onClick={handlePreviousPageMinusOne}
      >
        {currentPage - 2}
      </a>
      <a
        className="pagination-btn"
        hidden={currentPageMinusOneHide}
        onClick={handlePreviousPage}
      >
        {currentPage - 1}
      </a>
      <a className="current-page">{currentPage}</a>
      <a
        className="pagination-btn"
        hidden={currentPagePlusOneHide}
        onClick={handleNextPage}
      >
        {currentPage + 1}
      </a>
      <a
        className="pagination-btn"
        hidden={currentPagePlusTwoHide}
        onClick={handleNextPagePlusOne}
      >
        {currentPage + 2}
      </a>
      <a
        className="pagination-btn"
        hidden={lastPageArrowHide}
        onClick={handleLastPage}
      >
        <img className="page-arrows" src={lastPageArrow} alt="lastpage" />
      </a>
    </div>
  );
};
