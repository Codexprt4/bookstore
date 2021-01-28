import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addAuthor, updateAuthor } from "../../../redux/author/action";
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

const Form = ({ addAuthor, updateAuthor, isEdit, editData, onEditHandle }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [error, setError] = useState(undefined);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      if (name) {
        updateAuthor(editData.index, name);
        onEditHandle();
        setName("");
        setError({ error: undefined });
      } else {
        setError({ error: "Please Enter Author Name" });
      }
    } else {
      if (name) {
        addAuthor(name);
        setName("");
        setError({ error: undefined });
      } else {
        setError({ error: "Please Enter Author Name" });
      }
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
        <div className="manage-err">
          {error && <p className="err-message"> {error.error}</p>}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAuthor: (val) => dispatch(addAuthor(null, val)),
    updateAuthor: (index, val) => dispatch(updateAuthor(index, val)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
