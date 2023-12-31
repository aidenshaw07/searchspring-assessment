import { useStore } from "../../zustand/store";
import "./dropdowns.scss";

const dropdownOptions = [
  { value: "", label: "Filter By" },
  { value: "shirts", label: "Shirts" },
  { value: "t-shirts", label: "T-Shirts" },
  { value: "dresses", label: "Dresses" },
  { value: "sweaters", label: "Sweaters" },
  { value: "coats", label: "Coats" },
  { value: "jackets", label: "Jackets" },
  { value: "pants", label: "Pants" },
  { value: "jeans", label: "Jeans" },
  { value: "shorts", label: "Shorts" },
  { value: "skirts", label: "Skirts" },
  { value: "shoes", label: "Shoes" },
  { value: "swimsuits", label: "Swimsuits" },
  { value: "pajamas", label: "Pajamas" },
  { value: "bags", label: "Bags" },
  { value: "hats", label: "Hats" },
  { value: "glasses", label: "Glasses" },
  { value: "socks", label: "Socks" },
  { value: "accessories", label: "Accessories" },
  { value: "jewelry", label: "Jewelry" },
];

export const FilterByDropdown = () => {
  const filteredTerm = useStore((state) => state.filteredTerm);
  const setFilteredTerm = useStore((state) => state.setFilteredTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setSortOption = useStore((state) => state.setSortOption);

  // The handleDropdownChange function is responsible for updating the filteredTerm state variable.

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setFilteredTerm(selectedValue);
    setSortOption("");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="dropdown-container">
      <select
        className="select-box"
        value={filteredTerm}
        onChange={handleDropdownChange}
      >
        {dropdownOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
