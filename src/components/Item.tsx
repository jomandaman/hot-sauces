import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Link,
} from "react-router-dom";

interface IProps {
  id: number;
  imageURL: string;
  title: string;
  subtitle: string;
  handleDelete: (id: number) => void;
}


const styledCard = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: `0px 2px 30px -1px rgb(0 0 0 / 9%), 0px 1px 1px 0px rgb(0 0 0 / 4%), 0px 1px 3px 0px rgb(0 0 0 / 0%)`,
  },
  media: {
    width: 360,
    height: 380,
    maxHeight: 400,
    //background-position: 'center',
  },
  cardHover: {
    "&::before": {
      content: "", // ::before and ::after both require content
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(120deg, #eaee44, #33d0ff)`,
      opacity: .7,
    }
  },
  cardTitle: {
    padding: `0 30px`,
  },
  cardBottom: {
    padding: `10px 30px 25px;`,
  },
});

const styledButton = makeStyles({
  root: {
    background: "white",
    borderRadius: 3,
    border: "solid #d21e45",
    borderWidth: 2,
    color: "#d21e45",
    padding: "10px 30px",
    boxShadow: "0 0px 5px 2px rgb(255 105 135 / 10%);",
    textAlign: "center",
    fontWeight: 600,
    textDecoration: "none",
    lineHeight: 1,
    "&:hover": {
      border: "solid #fff",
      borderWidth: 2,
      color: "white",
      background: "linear-gradient(45deg, #d21e45 30%, #ffaa40 90%)",
      transition: "background 0.2s linear",
    },
  },
  delete: {
    textTransform: "lowercase",
    fontSize: ".9em",
  },
  label: {
    textTransform: "lowercase",
  },
});

const styledType = makeStyles({
  h5: {
    fontFamily: `'Amatic SC', cursive`,
    color: "#d21e45",
    fontSize: "3em",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "0.875rem",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
    minHeight: "50px",
  },
  delete: {
    textTransform: "lowercase",
  },
  label: {
    textTransform: "lowercase",
  },
});

const Item: React.FC<IProps> = ({
        id,
        imageURL,
        title,
        subtitle,
        handleDelete,
        }) => {
  const buttonClasses = styledButton();
  const cardClasses = styledCard();
  const typeClasses = styledType();

  return (
    <Card  className={cardClasses.root}>
      <Link style={{ textDecoration: 'none' }}
          to={{
            pathname: "/more-info",
            search: `?id=${id}`,
          }}
        >
        <CardActionArea className={cardClasses.cardHover}>
          <CardMedia
            className={cardClasses.media}
            image={imageURL}
            title={title}
          />
          <CardContent className={cardClasses.cardTitle}>
            <Typography gutterBottom variant="h5" component="h5" className={typeClasses.h5}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" className={typeClasses.subtitle}>
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={cardClasses.cardBottom}>
        <Link
          className={buttonClasses.root}
          to={{
            pathname: "/more-info",
            search: `?id=${id}`,
          }}
        >
          Learn More
        </Link>
        <Button
          size="small"
          className={buttonClasses.delete}
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
