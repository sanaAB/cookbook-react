import React from "react";
import "./Recipe.css";

export default function Recipe(props) {
  console.log(props);
  //const { name, featuredImage, description } = props.fields;
  return (
    <div className="post">
      {props.recipesArray.map((recipe) => {
        // console.log(from map ${recipe.fields.featuredImage});
        return (
          <div>
            <h4>{recipe.fields.name}</h4>
            <img url={recipe.fields.featuredImage}></img>
          </div>
        );
      })}
    </div>
  );
}