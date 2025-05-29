import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Recipe from "../pages/Recipe";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import UserRecipeDetails from "../pages/UserRecipeDetails";
import Favorite from "../pages/Favorite";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createrecipe" element={<CreateRecipe />} />
        <Route path="/recipedetails/:id" element={<RecipeDetails />} />
        <Route path="/userrecipe/:id" element={<UserRecipeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
