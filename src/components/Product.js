import "../styles/Product.css";

const Product = (props) => {
  return (
    <div data-testid="product" className="product">
      <img src={`./assets/${props.img}`} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.price}</p>
      <button>-</button>
      <p>{props.quantity}</p>
      <button>+</button>
    </div>
  );
};

export default Product;
