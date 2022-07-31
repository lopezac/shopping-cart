import { Outlet } from "react-router-dom";
import { number } from "prop-types";

import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import "../styles/Body.css";

const LayoutStyle = styled.div`
  body {
    margin: 0;
  }

  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "navbar"
    "content"
    "footer";
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function Layout(props) {
  const { totalQuantity } = props;

  return (
    <LayoutStyle>
      <TopNavbar totalQuantity={totalQuantity} />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
}

Layout.propTypes = {
  totalQuantity: number,
};

export default Layout;
