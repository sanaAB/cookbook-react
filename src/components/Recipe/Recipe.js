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
            <h4>{recipe.fields.name}</h4>
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
