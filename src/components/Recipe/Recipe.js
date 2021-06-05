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
          <Link to={`/${category}/${recipe.sys.id}`}>
            {recipe.fields.name}
            <h2>{recipe.name}</h2>
          </Link>
        ))}
    </div>
  );
}
