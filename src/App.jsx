import { useEffect } from "react";
import { useStore } from "./zustand/store";
import { endpoint } from "./api/endpoint";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Pagination } from "./components/pagination/pagination";
import { FilterSortControls } from "./components/filter-sort-controls/filter-sort-controls";
import { Footer } from "./components/footer/footer";
import { LoadingOverlay } from "./components/loader/loading-spinner";
import axios from "axios";
import "./App.scss";

export const App = () => {
  const data = useStore((state) => state.data);
  const loading = useStore((state) => state.loading);
  const searchTerm = useStore((state) => state.searchTerm);
  const filteredTerm = useStore((state) => state.filteredTerm);
  const sortOption = useStore((state) => state.sortOption);
  const currentPage = useStore((state) => state.currentPage);
  const setData = useStore((state) => state.setData);
  const setLoading = useStore((state) => state.setLoading);
  const setTotalPages = useStore((state) => state.setTotalPages);
  const setNextPage = useStore((state) => state.setNextPage);
  const setPreviousPage = useStore((state) => state.setPreviousPage);

  // getInitialData function handles data retrieval from the API and state updates. It's triggered on page load, page number change, sort option change, searches, and filters.

  const getInitialData = async () => {
    try {
      setLoading(true);
      let url;
      if (searchTerm) {
        url = `${endpoint}&${sortOption}&q=${searchTerm}&page=${currentPage}`;
      } else if (filteredTerm) {
        url = `${endpoint}&${sortOption}&q=${filteredTerm}&page=${currentPage}`;
      } else {
        url = `${endpoint}&${sortOption}&page=${currentPage}`;
      }
      const res = await axios.get(url);
      setData(res.data);
      setTotalPages(res.data.pagination.totalPages);
      setNextPage(res.data.pagination.nextPage);
      setPreviousPage(res.data.pagination.previousPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInitialData();
  }, [currentPage, filteredTerm, sortOption]);

  // The hideComponent variable is used to hide the Pagination and FilterSortControl components when there are no results in the data array.

  const hideComponent = data.results && data.results.length <= 0;

  // The loading overlay is displayed when the loading state is true.

  if (loading) return <LoadingOverlay show={loading} />;

  return (
    <div className="app-container">
      <Navbar getInitialData={getInitialData} />
      {hideComponent ? null : <Pagination />}
      {hideComponent ? null : <FilterSortControls />}
      <Hero />
      {hideComponent ? null : <Pagination />}
      <Footer />
    </div>
  );
};
