import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./routes/Cart";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Layout from "./routes/Layout";

const RouteSwitch = (props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<Layout totalQuantity={totalQuantity} />}>
          <Route index element={<Home />} />
          <Route
            path="shop"
            element={<Shop setTotalQuantity={setTotalQuantity} />}
          />
          <Route
            path="cart"
            element={<Cart setTotalQuantity={setTotalQuantity} />}
          />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
