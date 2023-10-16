import React from "react";
import { CartItem } from "../cart-item/cart-item";

export const Hero = ({ data }) => {
  return (
    <div>
      {data.results &&
        data.results.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
};
