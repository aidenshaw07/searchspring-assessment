import React from "react";
import { SearchBar } from "../search-bar/search-bar";

export const Navbar = ({
  getInitialData,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}) => {
  return (
    <div>
      <SearchBar
        getInitialData={getInitialData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
