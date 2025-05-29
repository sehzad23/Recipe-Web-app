/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import Footer from "../componants/Footer";

const Recipe = () => {
  const { data, addTofavorite } = useContext(recipecontext);
  const navigate = useNavigate();

  const showrecipe = data.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-white shadow-md lg:w-94 rounded-xl overflow-hidden hover:scale-105 duration-300 flex flex-col "
    >
      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5  flex flex-col flex-1">
        <h3 className="text-2xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-sm text-gray-500 mb-2 font-bold">
          By: {recipe.chef}
        </p>
        <p className="text-gray-600 mb-4 flex-1">
          {recipe.description
            ? recipe.description.slice(0, 60)
            : "No description available"}
          ...
        </p>
        <div className="btns w-full lg:flex  mt-auto gap-2  lg:justify-between">
          <button
            onClick={() => navigate(`/userrecipe/${recipe.id}`)}
            className="bg-orange-500 lg:w-[48%] hover:bg-orange-600 w-full mt-5  text-white  px-4 py-2 rounded-lg"
          >
            View Recipe
          </button>

          <button
            onClick={() => addTofavorite(recipe)}
            className=" bg-orange-500 lg:w-[48%] hover:bg-orange-600 w-full mt-5  text-white px-4 py-2 rounded-lg"
          >
            Add To Fav..
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="mt-20 min-h-screen">
        <div className=" min-mb grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] m-auto">
          {showrecipe.length > 0 ? (
            showrecipe
          ) : (
            <h1 className="text-xl font-semibold col-span-full text-center">
              No recipe created yet
            </h1>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recipe;
