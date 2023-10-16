import { useEffect } from "react";
import "./App.css";
import { endpoint } from "./api/endpoint";
import axios from "axios";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Pagination } from "./components/pagination/pagination";
import { useStore } from "./zustand/store";

function App() {
  const searchTerm = useStore((state) => state.searchTerm);
  const loading = useStore((state) => state.loading);
  const currentPage = useStore((state) => state.currentPage);
  const setData = useStore((state) => state.setData);
  const setLoading = useStore((state) => state.setLoading);
  const setTotalPages = useStore((state) => state.setTotalPages);

  const getInitialData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${endpoint}&q=${searchTerm}&page=${currentPage}`
      );
      setData(res.data);
      setTotalPages(res.data.pagination.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInitialData();
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Navbar getInitialData={getInitialData} />
      <Pagination />
      <Hero />
      <Pagination />
    </>
  );
}

export default App;
