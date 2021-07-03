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
          (recipe) => recipe.category === category.toUpperCase()
        )
        .map((recipe) => (
          <li className="recipes_list">
            <Link to={`/${category}/${recipe.slug}`}>
              <div id="title">{recipe.name}</div>
              {recipe.image && (
                <div className="table-img">
                  <img
                    className="table-img img"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
    </div>
  );
}
