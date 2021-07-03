import React from "react";
import marked from "marked";
import "./RecipePage.css";
import { makeStyles, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
  container: {
    border: "3px solid black",
    padding: "10px",
  },
  item: {
    padding: "10px",
  },
}));

export default function RecipePage(props, { isLoading }) {
  const classes = useStyles();
  console.log(props);
  const { slug } = useParams();
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
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        {isLoading ? (
          <div className="load__style">
            <h4>Loading recipe...</h4>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        ) : singleRecipe ? (
          <div className="recipe_style">
            <div className="hhh">{singleRecipe.name}</div>
            {singleRecipe.image && (
              <img
                className="recipe_image"
                src={singleRecipe.image}
                alt={singleRecipe.name}
              />
            )}
              <Button variant="contained" color="secondary" className={classes.button}>
                Order this recipe now!
              </Button>
            <h2 className="hhh">ingredients</h2>
            <section className="ingredients">
              {singleRecipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
              <i></i>
            </section>
            <h2 className="hhh">Description</h2>
            {
            <div>
              <section
                className="description_text"
                dangerouslySetInnerHTML={{ __html: postDescription }}
              />
             </div>
            }
          </div>
        ) : (
          <h1> Unable to load recipe</h1>
        )}
      </Grid>
    </Grid>
  );
}

