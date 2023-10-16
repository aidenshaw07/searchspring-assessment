import { useState, useEffect } from "react";
import "./App.css";
import { endpoint } from "./api/endpoint";
import axios from "axios";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data);

  const getInitialData = async () => {
    try {
      const res = await axios.get(
        `${endpoint}&q=${searchTerm}&page=${currentPage}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <Navbar
        getInitialData={getInitialData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />
      <Hero data={data} />
    </>
  );
}

export default App;
