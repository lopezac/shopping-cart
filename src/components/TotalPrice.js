import { func } from "prop-types";

function TotalPrice(props) {
  const { price } = props;

  return (
    <h2 className="total-price">
      Total: $<span data-testid="total-price">{price()}</span>
    </h2>
  );
}

TotalPrice.propTypes = {
  price: func.isRequired,
};

export default TotalPrice;
