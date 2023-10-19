import { useStore } from "../../zustand/store";
import fallbackImg from "../../assets/no-image-available.jpg";
import "./cart-item.scss";
import { useState } from "react";

export const CartItem = ({ item }) => {
  const shoppingCart = useStore((state) => state.shoppingCart);
  const setShoppingCart = useStore((state) => state.setShoppingCart);

  const handleAddToCart = () => {
    setShoppingCart(parseInt(shoppingCart + 1));
  };

  const { name, price, msrp, thumbnailImageUrl } = item;

  return (
    <div className="container-cart-item">
      <img
        src={thumbnailImageUrl}
        onError={(e) => {
          e.target.src = fallbackImg;
        }}
        style={{ width: "267px", height: "400px" }}
        alt={name}
      />
      <div className="cart-item-title">{name}</div>
      <div className="cart-item-actions">
        {msrp > price ? (
          <div className="cart-item-prices">
            <div
              style={{
                textDecoration: "line-through",
                color: "red",
                fontSize: "1rem",
              }}
            >
              ${msrp}
            </div>
            <div>${price}</div>
          </div>
        ) : (
          <div className="cart-item-prices">${price}</div>
        )}
        <button className="cart-item-btn" onClick={handleAddToCart}>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};
