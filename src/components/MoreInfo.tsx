import React from "react";
import { hotSauces, HotSauce } from "./hotsauces";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BasePage } from "./basePage";

import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
//A USVString, which will be parsed from application/x-www-form-urlencoded format. A leading '?' character is ignored.
// http://localhost:3000/more-info?id=5
// URLSearchParams is a built in function that ignores ?id=, useLocation finds URL, search just grabs the number
// ignores the query, just grabs the where
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const findHotSauce = (id: any) => {
  const hotSauce = hotSauces.filter(
    (hotSauce) => hotSauce.id === Number.parseInt(id)
  )[0];
  return hotSauce;
};

const styledButton = makeStyles({
  root: {
    background: "linear-gradient(45deg, #d21e45 30%, #ffaa40 90%)",
    border: "solid #fff",
    borderWidth: 2,
    color: "white",
    fontWeight: 600,
    textDecoration: "none",
    height: 48,
    padding: "13px 25px",
    "&:hover": {
      background: "white",
      borderRadius: 3,
      border: "solid #d21e45",
      borderWidth: 2,
      color: "#d21e45",
      transition: "background 0.2s linear",
    },
  },
  label: {
    textTransform: "lowercase",
  },
});

const styledLayout = makeStyles({
  root: {
    paddingTop: 50,
  },
  title: {
    fontSize: "4.5rem",
    fontWeight: "bold",
    padding: "60px 0 15px",
    fontFamily: `'Amatic SC', cursive`,
  },
  subtitle: {
    fontSize: "1.2em",
    marginBottom: 40,
  },
  description: {
    //something
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {

  },
});

const MoreInfo: React.FC = () => {
  const buttonClasses = styledButton();
  const layoutClasses = styledLayout();
  const query = useQuery();
  const id = query.get("id");
  const hotSauce = findHotSauce(id);

  return (
    <BasePage>
      
        <Link
          className={buttonClasses.root}
          color="primary"
          to={{
            pathname: "/list",
          }}
        >
          Back to List
        </Link>
      
      <Grid container className={layoutClasses.root}>
        {/* column one */}
        <Grid lg={5} item>
            <Grid item className={layoutClasses.imageContainer}>
              <img
                className={layoutClasses.image}
                src={hotSauce.imageURL}
                alt={hotSauce.title + " image"}
              />
            </Grid>
        </Grid>
        {/* column two */}
        <Grid lg={5} item >
          <Grid item className={layoutClasses.title}>{hotSauce.title}</Grid>
          <Grid item className={layoutClasses.subtitle}>{hotSauce.subtitle}</Grid>
          <Grid item className={layoutClasses.description}>{hotSauce.description}</Grid>
          
          </Grid>
      </Grid>
    </BasePage>
  );
};

export default MoreInfo;
