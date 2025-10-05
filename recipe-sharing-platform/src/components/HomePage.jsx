import { useState, useEffect } from "react"
import recipeData from '../data.json'

function HomePage() {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="flex flex-col mt-10 mx-2">
      <h2 className="flex justify-center text-4xl font-bold mb-10">Recipes</h2>
      <ul className="grid grid-cols-2 gap-2">
        {recipes.map((recipe) => (
          <div className="border ">
            <li key={recipe.id}>{recipe.image}</li>
            <li key={recipe.id}>{recipe.title}</li>
            <li key={recipe.id}>{recipe.summary}</li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HomePage
