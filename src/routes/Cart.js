import { func } from "prop-types";

import CartProducts from "../components/CartProducts";
import { getItems } from "../data";
import { Button } from "../styles/Button";
import { Content } from "../styles/Content";
import { ContentTitle } from "../styles/Title";

function Cart(props) {
  const { setTotalQuantity } = props;

  return (
    <Content>
      <ContentTitle className="content-title">Cart</ContentTitle>
      <CartProducts getItems={getItems} setTotalQuantity={setTotalQuantity} />
      <Button>Order Now</Button>
    </Content>
  );
}

Cart.propTypes = {
  setTotalQuantity: func.isRequired,
};

export default Cart;
