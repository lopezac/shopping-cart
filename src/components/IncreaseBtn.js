import { BsFillCaretRightFill } from "react-icons/bs";

export default function IncreaseBtn(props) {
  const { increaseQuantity, id } = props;

  return (
    <BsFillCaretRightFill
      data-testid="increase-btn"
      className="increase-btn"
      onClick={increaseQuantity.bind(this, id)}
    />
  );
}
