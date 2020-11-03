import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 30,
    height: 280,
    width: 350,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  button: {
    fontSize: 12,
    marginTop: 10,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={require("./images (1).jpg")}
        title="Paella dish"
      />
      <CardContent>
        <Link to="/inputname">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create By your name
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
