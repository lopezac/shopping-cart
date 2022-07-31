import { func, number } from "prop-types";

import { BsFillCaretRightFill } from "react-icons/bs";

function IncreaseBtn(props) {
  const { increaseQuantity, id } = props;

  return (
    <BsFillCaretRightFill
      data-testid="increase-btn"
      className="increase-btn"
      onClick={increaseQuantity.bind(this, id)}
    />
  );
}

IncreaseBtn.defaultProps = {
  id: 0,
};

IncreaseBtn.propTypes = {
  id: number,
  increaseQuantity: func.isRequired,
};

export default IncreaseBtn;
