import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addCategory, updateCategory } from "../../../redux/category/action";
import { FlareSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const Form = ({
  addCategory,
  updateCategory,
  isEdit,
  editData,
  onEditHandle,
}) => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateCategory(editData.index, name);
      onEditHandle();
      setName("");
    } else {
      addCategory(name);
      setName("");
    }
  };

  useEffect(() => {
    if (isEdit && editData) {
      setName(editData.name);
    }
  }, [editData]);

  return (
    <div className={classes.root}>
      {/* {this.state.error && <p>{this.state.error}</p>} */}
      <form
        className="add-option"
        // onSubmit={((name) =>{
        //  addCategory(name));
        //  }}

        onSubmit={onSubmit}
      >
        <div className="manage">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add Here"
            inputProps={{ "aria-label": "description" }}
          />
          <Button type="submit" variant="contained" color="primary">
            {isEdit ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (val) => dispatch(addCategory(null, val)),
    updateCategory: (index, val) => dispatch(updateCategory(index, val)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
