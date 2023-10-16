import React from "react";
import { useStore } from "../../zustand/store";

export const CartItem = ({ item }) => {
  const shoppingCart = useStore((state) => state.shoppingCart);
  const setShoppingCart = useStore((state) => state.setShoppingCart);

  const handleAddToCart = () => {
    setShoppingCart(shoppingCart + 1);
  };

  return (
    <div>
      <img src={item.thumbnailImageUrl} alt={item.name} />
      {item.name}
      {item.msrp > item.price ? (
        <>
          <div style={{ textDecoration: "line-through" }}>{item.msrp}</div>
          <div>{item.price}</div>
        </>
      ) : (
        <>{item.price}</>
      )}
      <button
        onClick={() => {
          handleAddToCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
