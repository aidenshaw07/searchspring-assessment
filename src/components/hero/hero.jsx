import { CartItem } from "../cart-item/cart-item";
import { useStore } from "../../zustand/store";
import "./hero.scss";

export const Hero = () => {
  const data = useStore((state) => state.data);
  const searchTerm = useStore((state) => state.searchTerm);

  // The Hero component is responsible for rendering the CartItem component for each item in the data array.

  return (
    <>
      <div className="hero-container">
        {data.results && data.results.length > 0 ? (
          data.results.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="no-results-container">
            We couldn't find any results for "<span>{searchTerm}</span>". Please
            try to search a different word.
          </div>
        )}
      </div>
    </>
  );
};
