import { useState, useEffect } from "react";
import "./App.css";
import { endpoint } from "./api/endpoint";
import axios from "axios";
import { Hero } from "./components/hero/hero";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  const getInitialData = async () => {
    try {
      const res = await axios.get(`${endpoint}`);
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
      <Hero data={data} />
    </>
  );
}

export default App;
