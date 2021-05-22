import './App.css';
import {client} from "./client"
import {useState, useEffect} from "react"
import Recipes from "./components/Recipe/Recipe"


function App() {
  const [recipesArray, setRecipes] = useState([])

  useEffect(()=>{
    client.getEntries().then((response) => {
      console.log(response.items);
      setRecipes(response.items);
     });
 }, []);

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <Recipes recipesArray={recipesArray}/>

    </div>
  );
}

export default App;
