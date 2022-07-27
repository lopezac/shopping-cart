import { getItems } from "../data";
import Product from "./Product";

const Products = (props) => {
  const getProducts = () => {
    return (props.getItems() || []).map((item) => {
      return (
        <Product
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
  };

  return (
    <div data-testid="products" className="products">
      {getProducts()}
    </div>
  );
};

export default Products;
