import { useState, useEffect } from "react"
import recipeData from '../data.json'

function HomePage() {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="mt-10 mx-2">
      <h2 className="flex justify-center text-4xl font-bold mb-10">Recipes</h2>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {recipes.map((recipe) => (
          <div className="border-2 rounded-md p-2 hover:bg-red-100" key={recipe.id}>
            <li className="w-full">{recipe.image}</li>
            <li className="font-bold text-2xl my-2">{recipe.title}</li>
            <li className="italic">{recipe.summary}</li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HomePage
