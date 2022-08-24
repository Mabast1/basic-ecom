import React from "react";
import { Link } from "react-router-dom";

import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <Link
      to={`shop/${title.toLowerCase()}`}
      className="category-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="background-image" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
