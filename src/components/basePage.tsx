import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    //width: 360,
  },
  header: {
    backgroundColor: "gray",
      backgroundImage: `url("https://josiahzacharias.com/wp-content/uploads/2021/03/Header2.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "bottom center",
      minHeight: 300,
      display: "flex",
      height: "100%",
      marginBottom: 40,
  },
  headerText: {
      display: "inline-block",
    alignSelf: "flex-end",
  },
  h2: {
    fontSize: "5.75rem",
    fontFamily: `'Amatic SC', cursive`,
    lineHeight: .9,
    paddingRight: 20,
  }
});

export const BasePage:React.FC = (props) => {
    
    const classes = useStyles();

    return (
        <>
        <div className={classes.header} >
            <Container maxWidth="lg" className={classes.headerText}>
                <Typography variant="h2" className={classes.h2} gutterBottom >
                    Guide to the <strong>best hot sauces</strong>
                </Typography>
            </Container>
        </div>
        {/*Container has to have a child, */}
        {props.children &&
        <Container maxWidth="lg" className={classes.root}>
            {/*Because only wrapped in BasePage on List */}
          {
              props.children
          }
        </Container>
        }
      </>
    );
}