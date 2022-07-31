import { BsCart } from "react-icons/bs";
import { number } from "prop-types";

import { StyledLink } from "../styles/Button";
import { NavBar } from "../styles/TopNavbar";

function TopNavbar(props) {
  const { totalQuantity } = props;

  return (
    <NavBar>
      <StyledLink className="home-name" to="/">
        CASIO
      </StyledLink>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="shop">Shop</StyledLink>
      <StyledLink to="cart" className="cart-icon">
        <BsCart />
        <span className="total-quantity">{totalQuantity}</span>
      </StyledLink>
      <StyledLink to="contact">Contact</StyledLink>
    </NavBar>
  );
}

TopNavbar.defaultProps = {
  totalQuantity: 0,
};

TopNavbar.propTypes = {
  totalQuantity: number,
};

export default TopNavbar;
