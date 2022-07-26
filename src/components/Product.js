import "../styles/Product.css";

const Product = (props) => {
  const { title, img, id, price, addItem } = props;

  return (
    <div className="product">
      <img className="product-img" src={`./assets/${img}`} alt="Casio watch" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <button
        className="addCartBtn"
        type="button"
        onClick={addItem.bind(this, id)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
