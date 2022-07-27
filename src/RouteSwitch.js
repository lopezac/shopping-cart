import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./routes/Cart";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import App from "./App";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
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
