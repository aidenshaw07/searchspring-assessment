import { useStore } from "../../zustand/store";
import "./cart-item.scss";

export const CartItem = ({ item }) => {
  const shoppingCart = useStore((state) => state.shoppingCart);
  const setShoppingCart = useStore((state) => state.setShoppingCart);

  const handleAddToCart = () => {
    setShoppingCart(shoppingCart + 1);
  };

  const { name, price, msrp, thumbnailImageUrl } = item;

  return (
    <div className="container-cart-item">
      <img src={thumbnailImageUrl} alt={name} />
      <div className="cart-item-title">{name}</div>
      <div className="cart-item-actions">
        {msrp > price ? (
          <div className="cart-item-prices">
            <div
              style={{
                textDecoration: "line-through",
                color: "red",
                fontSize: "15px",
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
