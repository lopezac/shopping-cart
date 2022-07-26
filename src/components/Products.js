import Product from "./Product";
import data from "../productsData.json";

const Products = (props) => {
  const getProducts = () => {
    let products = [];

    for (let product of data.watches) {
      products.push(
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          img={product.img}
          addItem={props.addItem}
        />
      );
    }

    return products;
  };

  return <div className="products">{getProducts()}</div>;
};

export default Products;
