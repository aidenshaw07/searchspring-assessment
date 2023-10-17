import { CartItem } from "../cart-item/cart-item";
import { useStore } from "../../zustand/store";
import { Dropdown } from "../dropdown/dropdown";
import { SortItems } from "../sort-items/sort-items";

export const Hero = () => {
  const data = useStore((state) => state.data);

  return (
    <div>
      <Dropdown />
      <SortItems />
      {data.results &&
        data.results.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
};
