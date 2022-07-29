import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

export default function Layout(props) {
  const { setTotalQuantity } = props;

  return (
    <>
      <TopNavbar setTotalQuantity={setTotalQuantity} />
      <Footer />
    </>
  );
}
