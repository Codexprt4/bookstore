import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const BookListItem = ({ name, id, selectedAuthor }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <>
            <Typography variant="h5" component="h1">
              <Link to={`/book/${id}`} className="home-link-color">
                {name}
              </Link>
            </Typography>
            <Link
              to={`/author/${selectedAuthor.id}`}
              className="home-link-color"
            >
              <Typography color="textSecondary">
                {selectedAuthor.name}
              </Typography>
            </Link>
          </>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookListItem;
