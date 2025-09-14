import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import EditRecipeForm from "./components/EditRecipeForm";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/add" element={<AddRecipeForm />} />
          <Route path="/recipes/edit/:id" element={<EditRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
