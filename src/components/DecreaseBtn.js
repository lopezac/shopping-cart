const DecreaseBtn = (props) => {
  const { decreaseQuantity, id } = props;

  return (
    <button
      className="decrease-btn"
      data-testid="decrease-btn"
      onClick={decreaseQuantity.bind(this, id)}
    >
      Decrease btn
    </button>
  );
};

export default DecreaseBtn;
