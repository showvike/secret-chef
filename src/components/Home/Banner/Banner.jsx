import chefBanner from "../../../assets/chef-banner.png";

const Banner = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-12 p-8">
      <div className="md:w-96 mx-auto">
        <h2 className="font-bold text-3xl md:text-7xl text-dark-01">
          Secret
          <br />
          <span className="block text-5xl md:text-9xl text-right text-black">
            Chef
          </span>
        </h2>
        <p className="mt-4 font-semibold text-dark-01 text-justify">
          “A good chef is like a vacation, it transports you, and it becomes a
          lot more than just about the food.” -{" "}
          <span className="text-black font-medium">Unknown</span>
        </p>
      </div>
      <div className="mx-auto">
        <img className="w-96" src={chefBanner} alt="A sketch of a chef" />
      </div>
    </section>
  );
};

export default Banner;
