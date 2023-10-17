import { useStore } from "../../zustand/store";

const dropdownOptions = [
  { value: "", label: "Sort" },
  { value: "sort.price=asc", label: "Price $-$$$" },
  { value: "sort.price=desc", label: "Price $$$-$" },
  { value: "sort.title=asc", label: "Name A-Z" },
  { value: "sort.title=desc", label: "Name Z-A" },
];

export const SortItems = () => {
  const sortOption = useStore((state) => state.sortOption);
  const setSortOption = useStore((state) => state.setSortOption);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSortOption(selectedValue);
  };

  return (
    <div>
      <select value={sortOption} onChange={handleDropdownChange}>
        {dropdownOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
