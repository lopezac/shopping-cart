const IncreaseBtn = (props) => {
  const { increaseQuantity, id } = props;

  return (
    <button
      data-testid="increase-btn"
      className="increase-btn"
      onClick={increaseQuantity.bind(this, id)}
    >
      increase btn
    </button>
  );
};

export default IncreaseBtn;
