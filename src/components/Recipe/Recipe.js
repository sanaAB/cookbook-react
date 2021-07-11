import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Recipe.css";
import { makeStyles, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "./ingredients2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15px",
    backgroundColor: "rgba(224, 222, 218, 1)",
    minHeight: 600,
    backgroundImage: `url(${Image})`,
    backgroundSize: "200%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up(1000)]: {
      backgroundColor: "rgba(224, 222, 218, 1)",
    },
  },
  container: {
    padding: "0px 20px",
    paddingBottom: "120px",
    paddingRight: "20px",
    fontFamily: "Cookie, cursive",
    fontSize: "30px",
  },
  title: {
    letterSpacing: "2px",
  },
  categorytitle: {
    margin: "30px 0px",
    fontWeight: "lighter",
    textShadow: "20px 1px 30px white",
    letterSpacing: "10px",
    fontSize: "60px",
    fontWeight: "default",
  },
  item: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  cover: {
    height: 140,
  },
}));

export default function Recipe(props) {
  const classes = useStyles();
  const { category } = useParams();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section>
            <div className={classes.categoryheader}>
              <div className={classes.categorytitle}>{category}</div>
            </div>
          </section>
        </Grid>
        {props.recipesArray
          .filter((recipe) => recipe.category === category.toUpperCase())
          .map((recipe) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <Link to={`/${category}/${recipe.slug}`}>
                <Card className={classes.item}>
                  <CardContent>
                    <div className={classes.title}>{recipe.name}</div>
                  </CardContent>
                  {recipe.image && (
                    <CardMedia
                      className={classes.cover}
                      image={recipe.image}
                      title={recipe.name}
                    />
                  )}
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
