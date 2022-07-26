const ProductHeader = (props) => {
  const { title, img } = props;

  return (
    <div className="product-header">
      <img className="product-img" src={`./assets/${img}`} alt="Casio watch" />
      <h3 className="product-title">{title}</h3>
    </div>
  );
};

export default ProductHeader;
