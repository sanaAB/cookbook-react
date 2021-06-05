import "./App.css";
import { client } from "./client";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import RecipePage from "./components/RecipePage/RecipePage";

import Header from "./components/Header/Header";
import SearchAppBar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

=======
import BottomAppBar from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> e57e44bac446691e22b98edf2050112a3b2f79cd

function App() {
  const [recipesArray, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    setIsError(false);
    setIsLoading(true);
    client.getEntries().then((response) => {
      console.log(response.items);
      setRecipes(response.items);
      setIsLoading(false);
     }).catch(e => {
      console.log(e);
      setIsError(true);
  });
 }, []);

  return (
    <div className="App">
      <SearchAppBar />
      <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/lunch">
                <Recipe recipesArray={recipesArray} isLoading={isLoading} isError={isError} setIsError= {setIsError}/>
              </Route>
<<<<<<< HEAD
              <Route exact path="/recipe/:id">
                <RecipePage />
=======
              <Route exact path="/:id">
                <RecipePage recipesArray={recipesArray} isLoading={isLoading} isError={isError} setIsError= {setIsError}/>
>>>>>>> e57e44bac446691e22b98edf2050112a3b2f79cd
              </Route>
              </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> e57e44bac446691e22b98edf2050112a3b2f79cd
