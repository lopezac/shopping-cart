import { func } from "prop-types";

import Products from "../components/Products";
import { getItems } from "../data";
import { Content } from "../styles/Content";
import { ContentTitle } from "../styles/Title";

function Shop(props) {
  const { setTotalQuantity } = props;

  return (
    <Content>
      <ContentTitle>Watches Shop</ContentTitle>
      <Products getItems={getItems} setTotalQuantity={setTotalQuantity} />
    </Content>
  );
}

Shop.propTypes = {
  setTotalQuantity: func.isRequired,
};

export default Shop;
