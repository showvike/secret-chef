import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-showvike-showvike.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <section className="my-8 px-4">
      <h2 className="text-center font-bold text-4xl text-dark-01">
        Our Secret Chefs
      </h2>
      <div className="mt-6 grid md:grid-cols-3 justify-items-center gap-4 relative">
        <Spinner navigation={navigation} />
        {chefs.map((chef) => (
          <Chef key={Math.random() * chef.id} chef={chef} />
        ))}
      </div>
    </section>
  );
};

export default Chefs;
