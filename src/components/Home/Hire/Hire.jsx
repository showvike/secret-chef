import hireFromUs from "../../../assets/hire-from-us.jpg";

const Hire = () => {
  return (
    <section className="my-8 px-4">
      <h2 className="text-center font-bold text-4xl text-dark-01">
        Hire From Us
      </h2>
      <div
        style={{ backgroundImage: `url(${hireFromUs})` }}
        className="mt-6 bg-cover bg-center h-96 rounded grid grid-cols-2 justify-items-center items-center text-white"
      >
        <div className="w-96">
          <h3 className="font-bold text-7xl">
            Hire
            <br />
            From
            <br />
            <span className="text-black">Us</span>
          </h3>
          <p className="mt-4 font-semibold text-lg">
            Hire high quality chefs from us for your restaurant and chill.
            Contact us by filling the form on right.
          </p>
        </div>
        <div>
          <form className="font-medium flex flex-col" action="#">
            <label htmlFor="name">
              Your Name
              <br />
              <input
                className="border border-solid px-4 py-2 rounded"
                type="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <br />
            <label htmlFor="email">
              Your Email
              <br />
              <input
                className="border border-solid px-4 py-2 rounded"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <br />
            <label htmlFor="message">
              Your Message
              <br />
              <input
                className="border border-solid px-4 py-2 rounded"
                type="message"
                name="message"
                placeholder="Enter your message"
                required
              />
            </label>
            <br />
            <input
              className="bg-dark-01 text-white px-4 py-2 rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hire;
