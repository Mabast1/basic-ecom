import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";

import "./Shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
