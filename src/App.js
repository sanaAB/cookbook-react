import "./App.css";
import { client } from "./client";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import RecipePage from "./components/RecipePage/RecipePage";
import Header from "./components/Header/Header";
import SearchAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [recipesArray, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setRecipes(response.items);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <SearchAppBar />
      {isLoading ? (
        <div className="load__style">
          <h4>Loading recipes...</h4>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home recipesArray={recipesArray} />
            </Route>
            <Route exact path="/:category">
              <Recipe recipesArray={recipesArray} />
            </Route>
            <Route exact path="/breakfast/:id">
              <RecipePage recipesArray={recipesArray} />
            </Route>
            <Route exact path="/lunch/:id">
              <RecipePage recipesArray={recipesArray} />
            </Route>
            <Route exact path="/dinner/:id">
              <RecipePage recipesArray={recipesArray} />
            </Route>
          </Switch>
        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
