import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Recipe.css";
import RecipePage from"../RecipePage/RecipePage"

export default function Recipe(props) {
  console.log(props);
  return (
    <div className="post">
      {props.recipesArray.map((recipe) => (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/">{recipe.fields.name}</Link>
            <Switch>
              <Route exact path="/">
                <RecipePage recipe={recipe}/>
              </Route>
              </Switch>
        </Router>
      ))}
    </div>
  );
}