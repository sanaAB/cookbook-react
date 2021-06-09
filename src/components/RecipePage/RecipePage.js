import React from "react";
import marked from "marked";
import "./RecipePage.css";
import { makeStyles, Grid } from "@material-ui/core";
import { useParams } from "react-router";

const useStyles = makeStyles(() => ({
  container: {
    border: "3px solid black",
    padding: "10px",
  },
  item: {
    padding: "10px",
    border: "1px solid black",
  },
}));

export default function RecipePage(props) {
  const classes = useStyles();

  const { slug } = useParams();
  let singleRecipe;
  //check if the array is not empty
  props.recipesArray &&
    props.recipesArray.map((recipe) => {
      if (recipe.fields.slug === slug) {
        return (singleRecipe = recipe.fields);
      }
    });
  console.log(singleRecipe);
  const postDescription = marked(singleRecipe.description);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <div className="recipe_style">
          <h2>{singleRecipe.name}</h2>
          {singleRecipe.featuredImage && (
            <img
              className="recipe_image"
              src={singleRecipe.featuredImage.fields.file.url}
              alt={singleRecipe.name}
            />
          )}
          <h4>ingredients</h4>
          <section className="ingredients">
            {singleRecipe.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </section>
          <h4>Description</h4>
          {
            <section
              className="description_text"
              dangerouslySetInnerHTML={{ __html: postDescription }}
            />
          }
        </div>
      </Grid>
    </Grid>
  );
}

//const {name, ingredients } = singleRecipe;

//const postIngredients = marked(ingredients);
//console.log(props.recipe.fields.featuredImage.fields.file.url)
