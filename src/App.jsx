import { useEffect } from "react";
import { useStore } from "./zustand/store";
import { endpoint } from "./api/endpoint";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Pagination } from "./components/pagination/pagination";
import axios from "axios";
import "./App.scss";

export const App = () => {
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

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Navbar getInitialData={getInitialData} />
      <Pagination />
      <Hero />
      <Pagination />
    </>
  );
};
