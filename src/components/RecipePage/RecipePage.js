import React from "react";
import marked from "marked";
import "./RecipePage.css";
import { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useParams } from "react-router";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CheckBox } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    [theme.breakpoints.up(800)]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    // border: "3px solid black",
    padding: "10px",
    margin: "20px 0",
  },
  item: {
    padding: "10px",
  },
}));

export default function RecipePage(props) {
  const [component, setComponent] = useState(false);
  const classes = useStyles();
  console.log(props);
  const { slug, category } = useParams();

  let singleRecipe;
  //check if the array is not empty
  props.recipesArray &&
    props.recipesArray.map((recipe) => {
      if (recipe.slug === slug) {
        return (singleRecipe = recipe);
      }
    });
  console.log(props.isLoading);
  let postDescription = "";
  if (singleRecipe) {
    postDescription = marked(singleRecipe.description);
  }
  return (
    <Grid
      container
      className={classes.container}
      align="center"
      justify="center"
      alignItems="center"
    >
      {singleRecipe ? (
        <div className="recipe_style">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.item}
          >
            <div className="hhh">{singleRecipe.name}</div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.item}
          >
            {singleRecipe.image && (
              <img
                className="recipe_image"
                src={singleRecipe.image}
                alt={singleRecipe.name}
              />
            )}
          </Grid>

          {component && (
            <div>
              <select name="person" id="people">
                <option value="1">Number of people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">6</option>
                <option value="4">7</option>
                <option value="4">8</option>
                <option value="4">9</option>
                <option value="4">10</option>
              </select>
            </div>
          )}

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.item}
          >
            <Link to={`/${category}/${singleRecipe.slug}/order`}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Order this recipe now!
              </Button>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.item}
          >
            <h2 className="hhh">ingredients</h2>
            <section className="ingredients__section">
              {singleRecipe.ingredients.map((ingredient) => (
                <div className="ingredients">
                  <li>{ingredient}</li>
                </div>
              ))}
            </section>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={classes.item}
          >
            <h2 className="hhh">description</h2>
            {
              <div>
                <section
                  className="description_text"
                  dangerouslySetInnerHTML={{ __html: postDescription }}
                />
              </div>
            }
          </Grid>
        </div>
      ) : (
        <h1> Unable to load recipe</h1>
      )}
    </Grid>
  );
}
