import { useEffect, useState } from "react";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-showvike-showvike.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <section className="my-8">
      <h2 className="text-center font-bold text-4xl mb-4">Our Secret Chefs</h2>
      {chefs.map((chef) => (
        <Chef key={Math.random() * chef.id} chef={chef} />
      ))}
    </section>
  );
};

export default Chefs;
