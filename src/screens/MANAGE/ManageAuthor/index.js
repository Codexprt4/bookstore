import React, { useState } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Header from "../Header";
import TableComponent from "./TableComponent";

const ManageAuthor = ({ authors }) => {
  const [updateData, setUpdateData] = useState(null);
  const title = "Authors";
  const tableHeader = ["Authors"];

  const onSubmitData = () => setUpdateData(null);

  return (
    <div>
      <Header title={title} />
      <Form
        isEdit={!!updateData}
        editData={updateData}
        onEditHandle={onSubmitData}
      />
      <TableComponent
        headers={tableHeader}
        data={authors}
        onEdit={(index, editData) => {
          setUpdateData({ index, ...editData });
        }}
      />
    </div>
  );
};

const mapStoreToProps = (store) => {
  //   console.log(store);
  const { authors } = store;

  return {
    authors: authors.author,
  };
};

export default connect(mapStoreToProps)(ManageAuthor);
