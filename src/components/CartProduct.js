import ProductHeader from "./ProductHeader";

const CardProduct = (props) => {
  const { title, img, id, addItem, removeItem, itemTotalSum } = props;

  return (
    <div className="product">
      <ProductHeader title={title} img={img} />
      <p className="product-total-price">{itemTotalSum}</p>
      <button className="addBtn" type="button" onClick={addItem.bind(this, id, 1)}>increase</button>
      <button className="removeBtn" type="button" onClick={removeItem.bind(this, id)}>decrease</button>
    </div>
  );
};

export default CardProduct;
