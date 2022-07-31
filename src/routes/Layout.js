import { Outlet } from "react-router-dom";
import { number } from "prop-types";

import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import "../styles/Body.css";

function Layout(props) {
  const { totalQuantity } = props;

  return (
    <>
      <TopNavbar totalQuantity={totalQuantity} />
      <Outlet />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  totalQuantity: number,
};

export default Layout;
