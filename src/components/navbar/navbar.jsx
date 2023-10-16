import React from "react";
import { SearchBar } from "../search-bar/search-bar";

export const Navbar = ({ getInitialData }) => {
  return (
    <div>
      <SearchBar getInitialData={getInitialData} />
    </div>
  );
};
