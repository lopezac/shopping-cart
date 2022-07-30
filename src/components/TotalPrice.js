export default function TotalPrice(props) {
  return (
    <h2 className="total-price">
      Total: $<span data-testid="total-price">{props.price()}</span>
    </h2>
  );
}
