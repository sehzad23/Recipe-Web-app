import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Footer from "../componants/Footer";

const Favorite = () => {
  const { favorite, setFavorite } = useContext(recipecontext);
  const navigate = useNavigate();

  const DeleteHandler = (id) => {
    const DeletFavorite = favorite.filter((r) => r.id !== id);
    setFavorite(DeletFavorite);
    // ✅ Update localStorage
    localStorage.setItem("Favorite Item", JSON.stringify(DeletFavorite));
    toast.success("Deleted From Favorite");
  };

  const favoriteItem = favorite.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-white shadow-md lg:w-94 rounded-xl overflow-hidden hover:scale-105 duration-300 flex flex-col"
    >
      {/* image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      {/* content */}

      <div className="p-5  flex flex-col flex-1">
        <h3 className="text-2xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-sm text-gray-500 mb-2 font-bold">
          By: {recipe.chef}
        </p>
        <p className="text-gray-600 mb-4 flex-1">
          {recipe.description
            ? recipe.description.slice(0, 60) + "..."
            : "No description available"}
        </p>

        <div className="btns w-full lg:flex flex justify-between items-center  mt-auto gap-2  lg:justify-between">
          <button
            onClick={() =>
              navigate(`/userrecipe/${recipe.id}`, {
                state: { fromFavorite: true },
              })
            }
            className="bg-orange-500 lg:w-[48%] hover:bg-orange-600  text-white  px-4 py-2 rounded-lg"
          >
            View Recipe
          </button>
          <span onClick={() => DeleteHandler(recipe.id)} className=" pointer">
            <FaTrash className="text-gray-500 cursor-pointer text-xl lg:text-3xl" />
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="mt-20 min-h-screen">
        <div className=" min-mb grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] m-auto">
          {favoriteItem.length > 0 ? (
            favoriteItem
          ) : (
            <h1 className="text-xl font-semibold col-span-full text-center">
              No added favorite recipe yet
            </h1>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorite;
