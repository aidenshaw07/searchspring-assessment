import React from "react";
import { SearchBar } from "../search-bar/search-bar";
import { useStore } from "../../zustand/store";

export const Navbar = ({ getInitialData }) => {
  const shoppingCart = useStore((state) => state.shoppingCart);
  return (
    <div>
      <SearchBar getInitialData={getInitialData} />
      <div>Shopping Cart: {shoppingCart}</div>
    </div>
  );
};
