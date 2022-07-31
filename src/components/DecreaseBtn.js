import { number, func } from "prop-types";

import { BsFillCaretLeftFill } from "react-icons/bs";

function DecreaseBtn(props) {
  const { decreaseQuantity, id } = props;

  return (
    <BsFillCaretLeftFill
      data-testid="decrease-btn"
      className="decrease-btn"
      onClick={decreaseQuantity.bind(this, id)}
    />
  );
}

DecreaseBtn.defaultProps = {
  id: 0,
};

DecreaseBtn.propTypes = {
  id: number,
  decreaseQuantity: func.isRequired,
};

export default DecreaseBtn;
