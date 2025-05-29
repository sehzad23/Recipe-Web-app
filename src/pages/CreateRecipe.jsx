/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import Footer from "../componants/Footer";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    //alert("Your Recipe has added.")
    const updatedData = [...data, recipe];
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData)); // ✅ local storage update
    toast.success("Recipe Add Succesfully");
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" min-mb flex flex-col gap-5 w-[90%] md:w-[60%] bg-white p-8 rounded-xl shadow-lg m-auto mt-10"
      >
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
          Create a Recipe
        </h2>

        <input
          {...register("image", { required: "image is required" })}
          type="url"
          placeholder="Enter Image URL"
          className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {errors.image && (
          <small className="text-red-400">{errors.image.message}</small>
        )}

        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          placeholder="Enter Recipe Title"
          className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {errors.title && (
          <small className="text-red-400">{errors.title.message}</small>
        )}
        <input
          {...register("chef", { required: "chef is required" })}
          type="text"
          placeholder="Enter Chef Name"
          className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {errors.chef && (
          <small className="text-red-400">{errors.chef.message}</small>
        )}

        <textarea
          {...register("description", { required: "description is required" })}
          placeholder="Enter Description"
          className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows="3"
        ></textarea>
        {errors.description && (
          <small className="text-red-400">{errors.description.message}</small>
        )}

        <textarea
          {...register("ingredients", { required: "ingredients is required" })}
          placeholder="Enter ingredients separated by comma"
          className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows="3"
        ></textarea>
        {errors.ingredients && (
          <small className="text-red-400">{errors.ingredients.message}</small>
        )}

        <textarea
          {...register("instruction", { required: "instruction is required" })}
          placeholder="Enter Instructions"
          className="p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows="4"
        ></textarea>
        {errors.instruction && (
          <small className="text-red-400">{errors.instruction.message}</small>
        )}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Add Recipe
        </button>
      </form>

      <Footer />
    </>
  );
};

export default CreateRecipe;
