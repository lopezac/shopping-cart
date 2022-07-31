import { func } from "prop-types";

import { TotalPriceStyle } from "../styles/Paragraph";

function TotalPrice(props) {
  const { price } = props;

  return (
    <TotalPriceStyle>
      Total: $<span data-testid="total-price">{price()}</span>
    </TotalPriceStyle>
  );
}

TotalPrice.propTypes = {
  price: func.isRequired,
};

export default TotalPrice;
