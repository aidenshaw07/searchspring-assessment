import { useState, useEffect } from "react";
import "./App.css";
import { endpoint } from "./api/endpoint";
import axios from "axios";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Pagination } from "./components/pagination/pagination";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log(data);

  const getInitialData = async () => {
    try {
      const res = await axios.get(
        `${endpoint}&q=${searchTerm}&page=${currentPage}`
      );
      setData(res.data);
      setTotalPages(res.data.pagination.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, [currentPage]);

  return (
    <>
      <Navbar
        getInitialData={getInitialData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <Hero data={data} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default App;
