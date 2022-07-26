import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Cart";
import Contact from "./Contact";
import Home from "./Home";
import Shop from "./Shop";
import TopNavbar from "./TopNavbar";

const RouteSwitch = (props) => {
  const { addItem } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNavbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop addItem={addItem} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
