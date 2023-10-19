import { SearchBar } from "../search-bar/search-bar";
import { useStore } from "../../zustand/store";
import herboutique from "../../assets/herboutique.svg";
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import "./navbar.scss";

export const Navbar = ({ getInitialData }) => {
  const shoppingCart = useStore((state) => state.shoppingCart);

  // The goToHomePage function is responsible for redirecting the user to the home page when the logo is clicked.

  const goToHomePage = () => {
    window.location.href = "/";
  };

  return (
    <div className="navbar-container">
      <img
        className="logo"
        onClick={goToHomePage}
        src={herboutique}
        alt="site-logo"
      />
      <div className="search-cart-container">
        <SearchBar getInitialData={getInitialData} />
        <div className="shopping-cart-container">
          <img src={shoppingCartIcon} alt="shopping-cart" />
          <span>{shoppingCart}</span>
        </div>
      </div>
    </div>
  );
};
