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
              <div id="title">{recipe.fields.name}</div>
              {recipe.fields.featuredImage && (
                <div className="table-img">
                  <img
                    className="table-img img"
                    src={recipe.fields.featuredImage.fields.file.url}
                    alt={recipe.fields.name}
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
    </div>
  );
}
