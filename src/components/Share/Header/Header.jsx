import { useContext } from "react";
import { Link } from "react-router-dom";
import defaultPhoto from "../../../assets/default-photo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, auth, logOut } = useContext(AuthContext);
  console.log(user);

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            {!user ? (
              <Link to="/login">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Login
                </button>
              </Link>
            ) : (
              <div>
                <button onClick={handleLogOut}>
                  <img
                    title={user?.displayName ? user?.displayName : ""}
                    className="w-10 h-10 rounded-full"
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
