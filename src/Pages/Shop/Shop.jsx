import React, { useContext } from "react";

import { ProductContext } from "../../Context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default Shop;
