import LazyLoad from "react-lazy-load";
import { useLoaderData, useNavigation } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import Spinner from "../Spinner/Spinner";

const Recipes = () => {
  const chef = useLoaderData();
  const {
    chef_picture,
    chef_name,
    short_bio,
    likes,
    numbers_of_recipes,
    years_of_experience,
    recipes,
    id,
  } = chef;
  const navigation = useNavigation();

  return (
    <div className="my-8">
      <h2 className="text-center font-bold text-4xl text-dark-01">
        {" "}
        Chef Recipes
      </h2>
      <Spinner navigation={navigation} />
      <section className="grid grid-cols-2 items-center gap-12 p-8">
        <div className="mx-auto">
          <LazyLoad height={384} width={384}>
            <img
              className="w-96 h-96 object-cover rounded"
              src={chef_picture}
              alt="chef"
            />
          </LazyLoad>
        </div>
        <div className="w-96 mx-auto">
          <h3 className="font-semibold text-4xl text-dark-01">{chef_name}</h3>
          <p className="mt-4">{short_bio}</p>
          <div className="mt-4 text-dark-01 font-medium grid gap-2">
            <p>Likes: {likes}</p>
            <p>Recipes: {numbers_of_recipes}</p>
            <p>Experience: {years_of_experience} years</p>
          </div>
        </div>
      </section>
      <div className="mt-6 grid grid-cols-3 justify-items-center gap-4">
        {recipes.map((recipe) => (
          <Recipe key={Math.random() * id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
