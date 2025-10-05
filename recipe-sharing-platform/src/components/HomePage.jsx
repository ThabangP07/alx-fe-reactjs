import { useState, useEffect } from "react"
import recipeData from '../data.json'

function HomePage() {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
