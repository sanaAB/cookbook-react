import React from "react";
import marked from "marked";
import "./RecipePage.css"
import { makeStyles, Grid } from "@material-ui/core";

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

export default function RecipePage(props){
    const classes = useStyles();
    const {name,description,ingredients, featuredImage} = props.recipe.fields;
    const postDescription = marked(description);
    //const postIngredients = marked(ingredients);
    console.log(props.recipe.fields.featuredImage.fields.file.url)
    return(
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.item}> 
                <div className="recipe_style">
                    <h2>{name}</h2>
                    {featuredImage && <img className="recipe_image" src={props.recipe.fields.featuredImage.fields.file.url} alt={name}/>}
                    <section className="ingredients">{ingredients.map((ingredient)=>(<li>{ingredient}</li>))}</section>
                    <section className="description_text" dangerouslySetInnerHTML={{__html:postDescription}}/>
                </div>
            </Grid>
        </Grid>



    );
}