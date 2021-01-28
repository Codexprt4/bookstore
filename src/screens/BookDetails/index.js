import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BookList from "../../component/BookList";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const BookDetails = ({ books }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { id } = useParams();
  //   console.log(books);
  const getBooks = () => {
    return books.filter((obj) => obj.id === parseInt(id));
  };

  return (
    <div className="container">
      <div className="manage">
        <div>
          <Card className={classes.root}>
            <CardContent>
              {getBooks().map((item) => (
                <>
                  <Typography variant="h5" component="h1">
                    {item.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {item.selectedAuthor.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Rs. {item.price}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.selectedCategory.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    "{item.description}"
                  </Typography>
                </>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <Typography variant="h5" component="h1">
        More items to explore
      </Typography>
      <div className="home-card-container">
        <BookList />
      </div>
    </div>
  );
};

const mapStoreToProps = (store, props) => {
  const { books } = store;
  return {
    books: books.book,
  };
};
export default connect(mapStoreToProps)(BookDetails);
