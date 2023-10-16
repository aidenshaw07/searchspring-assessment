import React from "react";
import { CartItem } from "../cart-item/cart-item";
import { useStore } from "../../zustand/store";

export const Hero = () => {
  const data = useStore((state) => state.data);
  return (
    <div>
      {data.results &&
        data.results.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
};
