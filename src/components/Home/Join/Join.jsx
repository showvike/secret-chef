import joinUs from "../../../assets/join-us.jpg";

const Join = () => {
  return (
    <section className="my-8 px-4">
      <h2 className="text-center font-bold text-4xl text-dark-01">Join Us</h2>
      <div
        style={{ backgroundImage: `url(${joinUs})` }}
        className="mt-6 bg-cover bg-center h-96 rounded grid grid-cols-2 justify-items-center items-center text-white"
      >
        <div className="w-96">
          <h3 className="font-bold text-7xl">
            Join <span className="text-black">Us</span>
            <br />
            As
            <br />A Chef
          </h3>
          <p className="mt-4 font-semibold text-lg">
            For your wonderful career, join us as a chef. Click in the apply
            button on right.
          </p>
        </div>
        <div>
          <button className="bg-dark-01 px-16 py-8 rounded font-medium text-3xl">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Join;
