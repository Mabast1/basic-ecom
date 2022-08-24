import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">
          {title.toUpperCase()}
          <span className="view-more">view more</span>
          <MdOutlineArrowForwardIos size={20} className="arrow" />
        </span>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;