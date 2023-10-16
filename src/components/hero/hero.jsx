import { CartItem } from "../cart-item/cart-item";
import { useStore } from "../../zustand/store";

export const Hero = () => {
  const data = useStore((state) => state.data);
  const filteredTerm = useStore((state) => state.filteredTerm);
  const setFilteredTerm = useStore((state) => state.setFilteredTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  const dropdownOptions = [
    { value: "", label: "All" },
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

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setFilteredTerm(selectedValue);
    setSearchTerm("");
  };

  return (
    <div>
      <select value={filteredTerm} onChange={handleDropdownChange}>
        {dropdownOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {data.results &&
        data.results.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
};
