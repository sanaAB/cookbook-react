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
        <section class="section2">
        <div className="intro-image bg-image"></div>
        <div className="intro_title bg-text">
          <h1><b>Learn to cook your favorite middle eastern meals!</b></h1>
          <h4>
            Pick a recepie according to your diet and preference
          </h4>
        </div>
      </section>
      <Recipes recipesArray={recipesArray}/>

    </div>
  );
}

export default App;
