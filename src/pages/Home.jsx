import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import ShowRecipe from "./ShowRecipe";
import Footer from "../componants/Footer";

const Home = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className=" min-mb  w-[80%] min-h-screen m-auto   lg:mt-10  ">
        <div className="hero flex w-full flex-col-reverse  lg:flex-row gap-10  lg:justify-around lg:items-center">
          <div className="text lg:w-[50%]  w-full  flex flex-col lg:gap-5">
            <h1 className="lg:text-6xl  text-4xl font-semibold  leading-[1.2] mb-10">
              Cook Like a Pro With Our{" "}
              <span className="text-orange-500">Easy</span> and{" "}
              <span className="text-orange-500">Tasty</span> Recipes.
            </h1>
            <p className="lg:text-2xl  text-gray-700 mb-10">
              From quick and easy meals to gourmet delights, we have something
              for every test and occasion.
            </p>

            <button
              onClick={() => Navigate("/createrecipe")}
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 lg:py-3 px-2 lg:px-4  rounded-lg shadow-md transition duration-300 lg:w-fit w-full mb-15"
            >
              Create Recipe
            </button>
          </div>
          <div className="lg:img-hero lg:w-[35%] h-[50%] mt-15  lg:mb-50">
            <img src={hero} alt="" />
          </div>
        </div>

        {/* Featured Recipes Section */}
        <section className="lg:mt-20  lg:min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="text-orange-500">Recipes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}

            {ShowRecipe.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 duration-300"
              >
                <img
                  src={recipe.image}
                  alt="Biryni"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold mb-2">{recipe.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {recipe.description.slice(0, 60)}...
                  </p>
                  <button
                    onClick={() => Navigate(`/recipedetails/${recipe.id}`)}
                    className="bg-orange-500 lg:w-fit w-full hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
