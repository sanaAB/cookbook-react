import './App.css';
import {client} from "./client";
import {useState, useEffect} from "react";
import Recipes from "./components/Recipe/Recipe";
import SearchAppBar from "./components/Navbar/Navbar";
import BottomAppBar from "./components/Footer/Footer";


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
      <Recipes recipesArray={recipesArray}/>
      <BottomAppBar/>
    </div>
  );
}

export default App;
