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

export default function RecipePage(props, {isLoading}) {
  const classes = useStyles();
  console.log(props);
  const { slug } = useParams();
  let singleRecipe;
  //check if the array is not empty
  props.recipesArray &&
    props.recipesArray.map((recipe) => {
      if (recipe.fields.slug === slug) {
        return (singleRecipe = recipe.fields);
      }
    });
  console.log(props.isLoading);
  let postDescription = "";
  if(singleRecipe){
    postDescription= marked(singleRecipe.description)
  }
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.item}>
      { isLoading ? (
      <div className="load__style">
        <h4>Loading recipe...</h4>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    ) : singleRecipe ? (
      <div className="recipe_style">
      <h2 className="hhh">{singleRecipe.name}</h2>
      {singleRecipe.featuredImage && (
        <img
          className="recipe_image"
          src={singleRecipe.featuredImage.fields.file.url}
          alt={singleRecipe.name}
        />
      )}
      <h2 className="hhh">ingredients</h2>
      <section className="ingredients">
        {singleRecipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
        <i></i>
      </section>
      <h2 className="hhh">Description</h2>
      {
        <section
          className="description_text"
          dangerouslySetInnerHTML={{ __html: postDescription }}
        />
      }
    </div>
    ) : (
      <h1> Unable to load recipe</h1>
    )}
      </Grid>
    </Grid>
  );
}

//const {name, ingredients } = singleRecipe;

//const postIngredients = marked(ingredients);
//console.log(props.recipe.fields.featuredImage.fields.file.url)
