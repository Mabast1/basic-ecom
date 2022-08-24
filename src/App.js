import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
