import { Outlet } from "react-router-dom";

import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import "../styles/Body.css";

export default function Layout(props) {
  const { totalQuantity } = props;

  return (
    <>
      <TopNavbar totalQuantity={totalQuantity} />
      <Outlet />
      <Footer />
    </>
  );
}
