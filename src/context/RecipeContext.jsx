import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const stroedFavorite = JSON.parse(localStorage.getItem("Favorite Item"));

    if (stroedFavorite) {
      setFavorite(stroedFavorite);
    }
  }, []);

  // ✅ Function to add to favorite
  const addTofavorite = (recipe) => {
    const alreadyAdded = favorite.some((item) => item.id === recipe.id);

    if (alreadyAdded) {
      toast.info("Already in favorites");
    } else {
      const Updatefavorite = [...favorite, recipe];
      setFavorite(Updatefavorite);
      localStorage.setItem("Favorite Item", JSON.stringify(Updatefavorite));
      toast.success("Added to favorites!");
    }
  };

  // Step 1: Local storage se data load karna
  const [data, setdata] = useState(() => {
    const localData = localStorage.getItem("recipes");
    return localData ? JSON.parse(localData) : [];
  });

  // Step 2: Jab bhi data change ho, use local storage me save karna
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  return (
    <recipecontext.Provider
      value={{ data, setdata, favorite, setFavorite, addTofavorite }}
    >
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
