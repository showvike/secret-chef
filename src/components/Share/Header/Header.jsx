import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import defaultPhoto from "../../../assets/default-photo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, auth, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut(auth)
      .then(() => {})
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <header>
      <nav className="flex justify-between bg-dark-01 text-white py-12 items-center px-4 rounded">
        <h1 className="font-bold text-5xl">
          <Link to="/">Secret Chef</Link>
        </h1>
        <ul className="flex gap-8 font-medium items-center">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "text-green-500" : isPending ? "text-yellow-500" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "text-green-500" : isPending ? "text-yellow-500" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            {!user ? (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-green-500"
                    : isPending
                    ? "text-yellow-500"
                    : "text-black"
                }
              >
                <button className="bg-white px-4 py-2 rounded">Login</button>
              </NavLink>
            ) : (
              <div>
                <button onClick={handleLogOut}>
                  <img
                    title={user?.displayName ? user?.displayName : ""}
                    className="w-10 h-10 rounded-full object-cover"
                    src={user?.photoURL ? user?.photoURL : defaultPhoto}
                    alt={user?.email}
                  />
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
