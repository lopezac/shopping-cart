export default function ProductTop(props) {
  const { title, img } = props;

  return (
    <>
      <img className="product-img" src={`./assets/${img}`} alt={title} />
      <p className="product-title" role="listitem" data-testid="product-title">
        {title}
      </p>
    </>
  );
}