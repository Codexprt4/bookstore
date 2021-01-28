import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import BookListItem from "./BookListItem";

const BookList = ({ books, categories, authors }) => {
  const { categoryId } = useParams();
  const { id } = useParams();
  const { authId } = useParams();
  const [name, setName] = useState(null);

  useEffect(() => {
    if (categoryId) {
      setName(getCategoryName(categoryId));
    }
    if (authId) {
      setName(getAuthorName(authId));
    }
  }, []);

  const getBooks = () => {
    if (categoryId) {
      return books.filter(
        (obj) => obj.selectedCategory.id === parseInt(categoryId)
      );
    }
    if (authId) {
      return books.filter((obj) => obj.selectedAuthor.id === parseInt(authId));
    }
    if (id) {
      return books.filter(
        (obj) => obj.selectedAuthor.id === parseInt(books[id].selectedAuthor.id)
      );
    }
  };

  const getCategoryName = (id) => {
    const categoryName = categories.filter((obj) => obj.id === parseInt(id));
    return categoryName[0].name;
  };
  const getAuthorName = (id) => {
    const authorName = authors.filter((obj) => obj.id === parseInt(id));
    return authorName[0].name;
  };

  return (
    <div>
      <h1>{name}</h1>
      <div className="card-container">
        {getBooks().map((item) => (
          <BookListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStoreToProps = (store) => {
  const { books, categories, authors } = store;
  return {
    books: books.book,
    categories: categories.category,
    authors: authors.author,
  };
};

export default connect(mapStoreToProps)(BookList);
