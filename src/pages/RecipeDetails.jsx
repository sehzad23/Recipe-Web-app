import { useParams } from "react-router-dom";
import ShowRecipe from "./ShowRecipe";
import { useNavigate } from "react-router-dom";
import Footer from "../componants/Footer";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = ShowRecipe.find((r) => r.id === id);

 if (!recipe) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>Recipe not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>

    <div className="  min-mb max-w-4xl mx-auto mt-12 p-10 bg-white rounded-xl shadow-md">
      <div className="flex justify-between">
        <h1 className="lg:text-4xl text-xl font-bold mb-4 text-black">{recipe.name}</h1>
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
          ← Back
        </button>
      </div>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
      <pre className="whitespace-pre-wrap text-gray-800 bg-gray-100 p-4 rounded-lg">
        {recipe.instructions}
      </pre>
    </div>

    <Footer />
    </>
  );
};

export default RecipeDetails;
