import React from "react";

import "./Categories.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  const categories = [
    { title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    { title: "Jackets", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png" },
    { title: "Sneakers", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png" },
    { title: "Womens", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png" },
    { title: "Mens", imageUrl: "https://i.ibb.co/R70vBrQ/men.png" },
  ];

  return (
    <div className="categories-container">
      {categories.map((categories, idx) => (
        <CategoryItem key={idx} category={categories} />
      ))}
    </div>
  );
};

export default Categories;
