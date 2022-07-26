import { Outlet, Link } from "react-router-dom";

const TopNavbar = (props) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default TopNavbar;
