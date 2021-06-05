import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./Recipe.css";
import RecipePage from"../RecipePage/RecipePage"

export default function Recipe(props) {
  const{category} = useParams();
  console.log(props);
  return (
    <div className="post">
      {
      props.recipesArray.filter((recipe)=>(recipe.fields.categoryMeal === category.toUpperCase())
      ).map((recipe) => (
        <Link to={recipe.sys.id}>{recipe.fields.name}
          <h2>{ recipe.name }</h2>
        </Link>
          
      ))}
    </div>
  );
}