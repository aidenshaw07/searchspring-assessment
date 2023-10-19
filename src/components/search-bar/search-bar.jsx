import { useStore } from "../../zustand/store";
import searchIcon from "../../assets/search-icon.svg";
import "./search-bar.scss";

export const SearchBar = ({ getInitialData }) => {
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setFilteredTerm = useStore((state) => state.setFilteredTerm);
  const setSortOption = useStore((state) => state.setSortOption);

  // The handleSeach function is responsible for updating the searchTerm in the state when the user clicks on the search icon or presses the enter key.

  const handleSeach = () => {
    if (searchTerm.trim() !== "") {
      setSearchTerm(searchTerm);
      setCurrentPage(1);
      setFilteredTerm("");
      setSortOption("");
      getInitialData();
    }
  };

  // The handleKeyPress function is responsible for updating the searchTerm in the state when the user presses the enter key.

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSeach();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        className="search-bar"
        placeholder="Search for products"
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={searchIcon} className="search-bar-btn" onClick={handleSeach} />
    </div>
  );
};
