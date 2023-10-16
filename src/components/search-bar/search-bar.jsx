import React from "react";
import { useStore } from "../../zustand/store";

export const SearchBar = ({ getInitialData }) => {
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setFilteredTerm = useStore((state) => state.setFilteredTerm);

  const handleSeach = () => {
    setCurrentPage(1);
    getInitialData();
    setFilteredTerm("");
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSeach();
          }
        }}
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
