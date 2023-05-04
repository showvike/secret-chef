import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Chef = ({ chef }) => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    numbers_of_recipes,
    likes,
    id,
  } = chef;

  return (
    <div className="border border-solid p-4 rounded text-center">
      <div>
        <img
          className="w-96 h-96 object-cover rounded"
          src={chef_picture}
          alt="chef"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-2xl">{chef_name}</h3>
        <div className="mt-4 text-dark-01 font-medium grid gap-2">
          <p>Experience: {years_of_experience} years</p>
          <p>Recipes: {numbers_of_recipes}</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
      <div className="mt-8">
        <Link to={`/recipes/${id}`}>
          <button className="bg-black text-white rounded px-4 py-2 font-medium">
            View Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
