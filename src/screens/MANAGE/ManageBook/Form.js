import React, { useState, useEffect } from "react";
import Select from "react-select";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as bookAction from "../../../redux/book/action";

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
  addBook,
  updateBook,
  isEdit,
  editData,
  onEditHandle,
  categories,
  authors,
}) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setCategories] = useState("");
  const [selectedAuthor, setAuthor] = useState("Select");

  // const catId = categories.findIndex(
  //   (categories) => categories == selectedCategory
  // );
  const authorId = authors.findIndex((authors) => authors == selectedAuthor);
  // console.log("EditData out if---->", editData);
  // console.log("Selected  ", selectedCategory, "SElected", selectedAuthor);
  // // console.log("author if---->", selectedAuthor.name);
  // // console.log("cat if---->", selectedCategory.name);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      // console.log("EditData in if---->", editData);
      updateBook({
        id: editData.index,
        name,
        price,
        description,
        selectedCategory: {
          id: selectedCategory.value,
          name: selectedCategory.label,
        },
        selectedAuthor: {
          id: selectedAuthor.value,
          name: selectedAuthor.label,
        },
      });
      onEditHandle();
      setName("");
      setPrice("");
      setDescription("");
      setCategories(null);
      setAuthor(null);
    } else {
      // console.log("cat--->", categories[catId].name);
      addBook({
        name,
        price,
        description,
        selectedCategory: {
          id: selectedCategory.value,
          name: selectedCategory.label,
        },
        selectedAuthor: {
          id: authors[authorId].value,
          name: authors[authorId].label,
        },
      });
      setName("");
      setPrice("");
      setDescription("");
      setCategories(null);
      setAuthor(null);
    }
  };

  useEffect(() => {
    if (isEdit && editData) {
      // console.log("EditDATA---", editData.selectedCategory.name);
      setName(editData.name);
      setPrice(editData.price);
      setDescription(editData.description);
      setCategories({
        label: editData.selectedCategory.name,
        value: editData.selectedCategory.id,
      });
      setAuthor({
        label: editData.selectedAuthor.name,
        value: editData.selectedAuthor.id,
      });
      // setCategories(categories[ca]);
    }
  }, [editData]);

  const onChangeCategory = (selectedCategory) => {
    setCategories(selectedCategory);
    // console.log(selectedCategory);
  };
  const onChangeAuthor = (selectedAuthor) => {
    setAuthor(selectedAuthor);
    // console.log(selectedAuthor);
  };

  return (
    <div className={classes.root}>
      <div className="manage">
        <div className="row">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="row">
              <div className="col span-2-of-5">
                <label>Name</label>
              </div>
              <div className="col span-3-of-5">
                <Input
                  type="text"
                  value={name}
                  className="input-span"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Add Book Name"
                  inputProps={{ "aria-label": "description" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-2-of-5">
                <label>Book Category</label>
              </div>
              <div className="col span-3-of-5">
                <Select
                  name="categories"
                  value={selectedCategory}
                  onChange={onChangeCategory}
                  options={categories}
                  // label={categories.name}
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-2-of-5">
                <label>Book Author</label>
              </div>
              <div className="col span-3-of-5">
                <Select
                  value={selectedAuthor}
                  onChange={onChangeAuthor}
                  options={authors}
                ></Select>
              </div>
            </div>

            <div className="row">
              <div className="col span-2-of-5">
                <label>Price</label>
              </div>
              <div className="col span-3-of-5">
                <Input
                  type="text"
                  value={price}
                  className="input-span"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Add Price"
                  inputProps={{ "aria-label": "description" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-2-of-5">
                <label>Description</label>
              </div>
              <div className="col span-3-of-5">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col span-2-of-5">&nbsp;</div>
              <div className="col span-3-of-5">
                <Button type="submit" variant="contained" color="primary">
                  {isEdit ? "Update" : "Add"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (bookData) => dispatch(bookAction.addBook(bookData)),
    updateBook: (bookData) => dispatch(bookAction.updateBook(bookData)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
