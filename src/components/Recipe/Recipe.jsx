/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  const [buttonDisable, setButtonDisable] = useState(false);

  const { image, recipe_name, ingredients, cooking_method, rating } = recipe;

  const handleFavoriteButton = (recipeName) => {
    toast(`Your favorite is ${recipeName}`, {
      icon: "💓",
    });
    setButtonDisable(true);
  };

  return (
    <div className="border border-solid p-4 rounded text-center">
      <div>
        <img
          className="w-96 h-96 object-cover rounded"
          src={image}
          alt="chef"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-2xl">{recipe_name}</h3>
        <div className="mt-4 text-dark-01 font-medium grid gap-2">
          <p>
            Ingredients:{" "}
            {ingredients
              .map(
                (ingredient) =>
                  ingredient[0].toUpperCase() + ingredient.slice(1)
              )
              .join(", ")}
          </p>
          <p>Cooking Method: {cooking_method}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={() => handleFavoriteButton(recipe_name)}
          className={`${
            !buttonDisable ? "bg-black text-white" : "bg-gray-600"
          } rounded px-4 py-2 font-medium`}
          disabled={buttonDisable}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Recipe;
