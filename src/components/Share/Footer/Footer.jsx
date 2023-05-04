import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-01 text-white px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 rounded">
      <div>
        <h1 className="font-bold text-3xl">
          <Link to="/">Secret Chef</Link>
        </h1>
        <p className="mt-12">
          “A good chef is like a vacation, it transports you, and it becomes a
          lot more than just about the food.” - Unknown
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Available On 24/7</h1>
        <p className="mt-12">24 hours a day</p>
        <p className="mt-4">7 days in a week</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p className="mt-12">Road: Road No, Road Name</p>
        <p className="mt-4">City: City Name</p>
        <p className="mt-4">Phone: 01234567890</p>
        <p className="mt-4">Email: email@email.com</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Subscribe to Newsletter</h1>
        <form className="relative mt-12" action="#">
          <label htmlFor="email">
            <input
              className="p-4 rounded font-medium w-full"
              type="email"
              placeholder="Enter Your Email"
            />
          </label>
          <button
            className="m-1 p-3 bg-dark-01 font-medium absolute right-0 rounded"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
      <p className="font-semibold md:col-span-4 text-center">
        <small>Developed By showvike © Made With 💝 2023</small>
      </p>
    </footer>
  );
};

export default Footer;
