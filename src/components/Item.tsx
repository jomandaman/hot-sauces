import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


interface IProps {
  id: number;
  imageURL: string;
  title: string;
  subtitle: string;
  description: string;
  handleDelete: (id: number) => void; 
}

const styledCard = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    width: 360,
    height: 380,
    maxHeight: 400,
    //background-position: 'center',
  },
});

const styledButton = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'lowercase',
  },
});

const Item:React.FC<IProps> = ({id, imageURL, title, subtitle, description, handleDelete}) =>  {

const buttonClasses = styledButton();
const cardClasses = styledCard();

  return (
    <Card className={cardClasses.root}>
      <CardActionArea>
        <CardMedia
          className={cardClasses.media}
          image={imageURL}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className={buttonClasses.root} color="primary" 
          to={{
            pathname: "/more-info",
            search: `?id=${id}`,
          }}
        >
          Learn More
        </Link>
        <Button size="small" color="secondary" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;