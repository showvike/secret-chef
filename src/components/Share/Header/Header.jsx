import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between bg-dark-01 text-white px-4 py-12 items-center">
        <h1 className="font-bold text-5xl">Secret Chef</h1>
        <ul className="flex gap-8 font-medium items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-white text-black px-4 py-2 rounded">
                Login
              </button>
            </Link>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
