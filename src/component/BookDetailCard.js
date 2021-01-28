import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 245,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 11,
  },
});

export const BookDetailCard = ({ id, name, selectedAuthor }) => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <>
              <Link to={`/book/${id}`} className="home-link-color">
                <Typography className={classes.pos} variant="h5" component="h1">
                  {name}
                </Typography>
              </Link>
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
    </div>
  );
};
