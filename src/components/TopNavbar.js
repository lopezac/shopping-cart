import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

import "../styles/TopNavbar.css";

const TopNavbar = (props) => {
  const { totalQuantity } = props;

  return (
    <nav className="top-navbar">
      <Link to="/" className="home-name">
        CASIO
      </Link>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart" className="cart-icon">
        <BsCart />
        <span className="total-quantity">{totalQuantity}</span>
      </Link>
      <Link to="contact">Contact</Link>
    </nav>
  );
};

export default TopNavbar;
