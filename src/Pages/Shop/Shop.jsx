import React, { useContext } from "react";

import { CategoriesContext } from "../../Context/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
