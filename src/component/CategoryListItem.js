import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BookDetailCard } from "./BookDetailCard";

const CategoryListItem = ({ name, id, books }) => {
  const getBooks = () => {
    return books.filter((obj) => obj.selectedCategory.id === id);
  };
  return (
    <section>
      {" "}
      <div className="column-title">
        <Link to={`/category/${id}`} className="home-link-color">
          <h2>{name}</h2>
        </Link>
      </div>
      <div className="home-card-container">
        {getBooks()
          .slice(0, 5)
          .map((item) => (
            <BookDetailCard key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
};
const mapStoreToProps = (store) => {
  return {
    books: store.books.book,
  };
};

export default connect(mapStoreToProps)(CategoryListItem);
