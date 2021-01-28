import React from "react";
import { connect } from "react-redux";
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ categories }) => (
  <>
    {" "}
    {categories.map((item) => {
      return <CategoryListItem key={item.id} {...item} />;
    })}
  </>
);

const mapStoreToProps = (store) => {
  //   console.log(store);
  const { categories } = store;

  return {
    categories: categories.category,
  };
};

export default connect(mapStoreToProps)(CategoryList);
