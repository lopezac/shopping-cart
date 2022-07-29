export default function TotalPrice(props) {
  return (
    <h3>
      Total: $
      <span data-testid="total-price" className="total-price">
        {props.price()}
      </span>
    </h3>
  );
}
