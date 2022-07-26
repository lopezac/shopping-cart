import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shop from "./components/Shop";
import TopNavbar from "./components/TopNavbar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNavbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
