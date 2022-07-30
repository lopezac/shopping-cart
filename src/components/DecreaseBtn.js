import { BsFillCaretLeftFill } from "react-icons/bs";

export default function DecreaseBtn(props) {
  const { decreaseQuantity, id } = props;

  return (
    <BsFillCaretLeftFill
      data-testid="decrease-btn"
      className="decrease-btn"
      onClick={decreaseQuantity.bind(this, id)}
    />
  );
}
