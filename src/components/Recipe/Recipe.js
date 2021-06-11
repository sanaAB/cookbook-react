import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Recipe.css";

export default function Recipe(props) {
  const { category } = useParams();
  //  console.log(props.recipesArray);
  return (
    <div className="post">
      {props.recipesArray
        .filter(
          (recipe) => recipe.fields.categoryMeal === category.toUpperCase()
        )
        .map((recipe) => (
          <li className="recipes_list">
          <Link to={`/${category}/${recipe.fields.slug}`}>
            <h2 className="hhh">{recipe.fields.name}</h2>
            {recipe.fields.featuredImage && (
            <img
              className="recipe_image"
              src={recipe.fields.featuredImage.fields.file.url}
              alt={recipe.fields.name}
            />
          )}
          </Link>
          </li>
        ))}
    </div>
  );
}
