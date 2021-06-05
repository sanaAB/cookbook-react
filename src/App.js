import './App.css';
import {client} from "./client";
import {useState, useEffect} from "react";
import Home from "./components/Home/Home"
import Recipe from "./components/Recipe/Recipe";
import RecipePage from "./components/RecipePage/RecipePage";

import Header from "./components/Header/Header"
import SearchAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [recipesArray, setRecipes] = useState([])

  useEffect(()=>{
    client.getEntries().then((response) => {
      console.log(response.items);
      setRecipes(response.items);
     }).catch(e => {
      console.log(e);
  });
 }, []);

  return (
    <div className="App">
      <SearchAppBar/>
      <Header />
      <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/lunch">
                <Recipe recipesArray={recipesArray}/>
              </Route>
              <Route exact path="/recipe/:id">
                <RecipePage />
              </Route>
              </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;

