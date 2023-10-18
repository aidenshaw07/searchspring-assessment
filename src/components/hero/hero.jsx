import { CartItem } from "../cart-item/cart-item";
import { useStore } from "../../zustand/store";
import "./hero.scss";

export const Hero = () => {
  const data = useStore((state) => state.data);

  return (
    <>
      <div className="container-hero">
        {data.results &&
          data.results.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
    </>
  );
};
