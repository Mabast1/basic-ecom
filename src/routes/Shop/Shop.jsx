import React, { useContext } from "react";

import { ProductContext } from "../../Context/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((item, idx) => (
        <div key={idx}>
          <h1>{item.name + item.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
