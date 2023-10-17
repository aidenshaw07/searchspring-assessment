import React from "react";
import { useStore } from "../../zustand/store";

export const SearchBar = ({ getInitialData }) => {
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setFilteredTerm = useStore((state) => state.setFilteredTerm);
  const setSortOption = useStore((state) => state.setSortOption);

  const handleSeach = () => {
    setSearchTerm(searchTerm);
    setSortOption("");
    setFilteredTerm("");
    setCurrentPage(1);
    getInitialData();
    console.log("This is called");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSeach();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() => {
          handleSeach();
        }}
      >
        Search
      </button>
    </div>
  );
};
