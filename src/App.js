import "./App.css";
<<<<<<< HEAD
=======
import axios from 'axios'
>>>>>>> b1b0df765e3466de6cde585100d0fad8bb678e6f
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import RecipePage from "./components/RecipePage/RecipePage";
import SearchAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  const [recipesArray, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
    setIsLoading(true);
    try {
<<<<<<< HEAD
      await axios.get("http://localhost:8080/api").then((result) => {
=======
      axios.get("http://localhost:8080/api").then((result) => {
>>>>>>> b1b0df765e3466de6cde585100d0fad8bb678e6f
        const data = result.data;
        setRecipes(data);
        console.log(data);
        setIsLoading(false);
      });
    } catch (error) {
      alert("No results");
    }
  }
  fetchRecipes();
}, []);

  return (
    <Router>
      <div className="App">
        <SearchAppBar />
        {isLoading ? (
          <div className="load__style">
            <h4>Loading recipes...</h4>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact-us">
              <Contact />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/:category">
              <Recipe recipesArray={recipesArray} />
            </Route>
            <Route exact path="/breakfast/:slug">
              <RecipePage recipesArray={recipesArray} isLoading={isLoading}/>
            </Route>
            <Route exact path="/lunch/:slug">
              <RecipePage recipesArray={recipesArray} isLoading={isLoading}/>
            </Route>
            <Route exact path="/dinner/:slug">
              <RecipePage recipesArray={recipesArray} isLoading={isLoading} />
            </Route>
          </Switch>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
