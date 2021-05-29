import './App.css';
import {client} from "./client"
import {useState, useEffect} from "react"
import Recipes from "./components/Recipe/Recipe"
import Header from "./components/Header/Header"


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
      <Header />
      <Recipes recipesArray={recipesArray}/>

    </div>
  );
}

export default App;
