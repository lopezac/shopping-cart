import { Outlet, Link } from "react-router-dom";

const TopNavbar = (props) => {
  const { totalQuantity } = props;

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">
          Cart<span className="total-quantity">{totalQuantity}</span>
        </Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default TopNavbar;
