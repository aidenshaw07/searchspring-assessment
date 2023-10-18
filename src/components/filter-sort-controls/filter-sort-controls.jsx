import { FilterByDropdown } from "../filter-by-dropdown/filter-by-dropdown";
import { SortByDropdown } from "../sort-by-dropdown/sort-by-dropdown";
import "./filter-sort-controls.scss";

export const FilterSortControls = () => {
  return (
    <div className="filter-sort-container">
      <FilterByDropdown />
      <SortByDropdown />
    </div>
  );
};
