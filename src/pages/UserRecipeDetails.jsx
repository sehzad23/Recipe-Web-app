/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import Footer from "../componants/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserRecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // delete as well as from in favorite page
  const { favorite, setFavorite } = useContext(recipecontext);

  // favorite page me edit and update na dikhane ke liye

  const location = useLocation();
  const fromFavorite = location.state?.fromFavorite;

  // update form

  const [showform, setShowform] = useState(false);

  const { register, handleSubmit } = useForm();

  const { data, setdata } = useContext(recipecontext);

  const userrecipe = data.find((r) => r.id === id);

  if (!userrecipe) {
    return (
      <div className="text-center mt-10 text-red-500">
        <p>Recipe not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  //   delete recipe

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id !== id);
    setdata(filterdata);

    const updatedFavorite = favorite.filter((item) => item.id !== id);
    setFavorite(updatedFavorite);
    localStorage.setItem("Favorite Item", JSON.stringify(updatedFavorite));
    toast.success("Recipe Deleted Succesfully");
    navigate("/recipe");
  };

  // default value

  const recipeToupdate = data.find((r) => r.id == id);

  return (
    <>
      <div className=" w-full  p-5 ">
        <div className=" left p-10   lg:w-[50%] w-full  min-mb lg:max-w-4xl lg:mx-auto  lg:mt-12 lg:p-6 bg-white rounded-xl shadow-md ">
          <div className="flex justify-between  items-center mb-4">
            <h1 className="lg:text-3xl text-xl font-bold text-black">
              {userrecipe.title}
            </h1>
            <button
              onClick={() => navigate(-1)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              ← Back
            </button>
          </div>
          <img
            src={userrecipe.image}
            alt={userrecipe.title}
            className="w-full h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-lg text-gray-700 mb-4">{userrecipe.description}</p>
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            {userrecipe.ingredients ? (
              userrecipe.ingredients
                .split(",")
                .map((item, index) => <li key={index}>{item.trim()}</li>)
            ) : (
              <li>No ingredients available</li>
            )}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-gray-700">
            {userrecipe.instruction}
          </pre>

          {/* favorite page me buttons hide karne ke liye. */}

          {!fromFavorite && (
            <>
              <button
                onClick={() => setShowform(true)}
                className="bg-green-500 hover:bg-green-600 text-black font-bold text-xl px-4 py-2 rounded ml-2 mt-10 w-full"
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => DeleteHandler()}
                className="bg-red-500 hover:bg-red-600 text-black font-bold text-xl px-4 py-2 rounded ml-2 mt-10 w-full"
              >
                ❎ Delete
              </button>
            </>
          )}
        </div>

        {/* update form */}
        <div className="right  lg:w-[50%] w-full  p-6 max-w-4xl mx-auto">
          {showform && (
            <form
              onSubmit={handleSubmit((updatedRecipe) => {
                const updatedData = data.map((r) =>
                  r.id === id ? { ...r, ...updatedRecipe } : r
                );
                setdata(updatedData);
                toast.success("Recipe Updated Succesfully");
                setShowform(false);
              })}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-5"
            >
              <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">
                Update Recipe
              </h2>

              <input
                {...register("image")}
                defaultValue={recipeToupdate.image}
                placeholder="Image URL"
                className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                {...register("title")}
                defaultValue={recipeToupdate.title}
                placeholder="Title"
                className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                {...register("chef")}
                defaultValue={recipeToupdate.chef}
                placeholder="Chef"
                className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                {...register("description")}
                defaultValue={recipeToupdate.description}
                placeholder="Description"
                className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                rows="3"
              />
              <textarea
                {...register("ingredients")}
                defaultValue={recipeToupdate.ingredients}
                placeholder="Ingredients (comma separated)"
                className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                rows="3"
              />
              <textarea
                {...register("instruction")}
                defaultValue={recipeToupdate.instruction}
                placeholder="Instructions"
                className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                rows="4"
              />

              <div className="flex gap-3 justify-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowform(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserRecipeDetails;
