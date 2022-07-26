import CartProduct from "./CartProduct";

const CartProducts = (props) => {
  const { addItem, removeItem, getItems, itemTotalSum} = props;

  const getProducts = () => {
    let products = [];
    for (let [id, product] of Object.entries(getItems())) {
      console.log("product in getProducts", id, product);
      products.push(
        <CartProduct title={product.title} img={product.img} id={product.id} addItem={addItem} removeItem={removeItem} />
      );
    }
    return products;
  };

  return (
    <div>
      {getProducts()}
    </div>
  );
};

export default CartProducts;
