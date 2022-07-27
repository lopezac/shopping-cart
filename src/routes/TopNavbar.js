import { Outlet, Link } from "react-router-dom";

const TopNavbar = (props) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default TopNavbar;
