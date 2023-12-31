import { useStore } from "../../zustand/store";
import "../filter-by-dropdown/dropdowns.scss";

const dropdownOptions = [
  { value: "", label: "Sort By" },
  { value: "sort.price=asc", label: "Price $-$$$" },
  { value: "sort.price=desc", label: "Price $$$-$" },
  { value: "sort.title=asc", label: "Name A-Z" },
  { value: "sort.title=desc", label: "Name Z-A" },
];

// The SortByDropdown component is responsible for rendering the dropdown menu for sorting the items.

export const SortByDropdown = () => {
  const sortOption = useStore((state) => state.sortOption);
  const setSortOption = useStore((state) => state.setSortOption);

  // The handleDropdownChange function is responsible for updating the sortOption state variable.

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSortOption(selectedValue);
  };

  return (
    <div className="dropdown-container">
      <select
        className="select-box"
        value={sortOption}
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
