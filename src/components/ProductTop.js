import { string } from "prop-types";

import { ProductImg } from "../styles/Img";
import { ProductTitle } from "../styles/Title";

function ProductTop(props) {
  const { title, img } = props;

  return (
    <>
      <ProductImg className="product-img" src={`./assets/${img}`} alt={title} />
      <ProductTitle
        className="product-title"
        role="listitem"
        data-testid="product-title"
      >
        {title}
      </ProductTitle>
    </>
  );
}

ProductTop.propTypes = {
  title: string,
  img: string,
};

export default ProductTop;
