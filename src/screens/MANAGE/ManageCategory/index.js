import React, { useState } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Header from "../Header";
// import TableComponent from "./TableComponent";
import TableComponent from "./TableComponent";

const ManageCategory = ({ categories }) => {
  const [updateData, setUpdateData] = useState(null);
  const title = "Categories";
  const tableHeader = ["Categories"];

  return (
    <div>
      <Header title={title} />
      <Form
        isEdit={!!updateData}
        editData={updateData}
        onEditHandle={() => setUpdateData(null)}
      />
      <TableComponent
        headers={tableHeader}
        data={categories}
        onEdit={(index, editData) => {
          setUpdateData({ index, ...editData });
        }}
      />
    </div>
  );
};

const mapStoreToProps = (store) => {
  //   console.log(store);
  const { categories } = store;

  return {
    categories: categories.category,
  };
};

export default connect(mapStoreToProps)(ManageCategory);
