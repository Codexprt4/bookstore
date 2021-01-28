import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Header from "../Header";
import TableComponent from "./TableComponent";

const ManageBook = ({ books, categories, authors }) => {
  const [updateData, setUpdateData] = useState(null);
  const title = "Books";
  const tableHeader = ["Books", "Author", "Category", "Price"];

  return (
    <div>
      <Header title={title} />
      <Form
        isEdit={!!updateData}
        editData={updateData}
        onEditHandle={() => setUpdateData(null)}
        categories={categories}
        authors={authors}
      />
      <TableComponent
        headers={tableHeader}
        data={books}
        onEdit={(index, editData) => {
          setUpdateData({ index, ...editData });
        }}
      />
    </div>
  );
};

const mapStoreToProps = (store) => {
  // console.log(store);
  const { books, categories, authors } = store;

  return {
    books: books.book,
    categories: categories.category.map((obj) => {
      return {
        ...obj,
        value: obj.id,
        label: obj.name,
      };
    }),
    authors: authors.author.map((obj) => {
      return {
        ...obj,
        value: obj.id,
        label: obj.name,
      };
    }),
  };
};

export default connect(mapStoreToProps)(ManageBook);
