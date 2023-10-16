import React from "react";

export const SearchBar = ({
  getInitialData,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}) => {
  const handleSeach = () => {
    setCurrentPage(1);
    getInitialData();
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
