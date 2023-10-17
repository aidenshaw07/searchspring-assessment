import { useStore } from "../../zustand/store";

export const CartItem = ({ item }) => {
  const shoppingCart = useStore((state) => state.shoppingCart);
  const setShoppingCart = useStore((state) => state.setShoppingCart);

  const handleAddToCart = () => {
    setShoppingCart(shoppingCart + 1);
  };

  const { name, price, msrp, thumbnailImageUrl } = item;

  return (
    <div>
      <img src={thumbnailImageUrl} alt={name} />
      {name}
      {msrp > price ? (
        <>
          <div style={{ textDecoration: "line-through" }}>{msrp}</div>
          <div>{price}</div>
        </>
      ) : (
        <>{price}</>
      )}
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};
