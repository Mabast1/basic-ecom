import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={"Shop"} />
      </Route>
    </Routes>
  );
};

export default App;
