import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { auth, googleProvider, githubProvider, signIn, popUpSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSignIn(email, password);
  };

  const userSignIn = (email, password) => {
    setError("");
    signIn(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setError(message);
      });
  };

  const handleSignIn = (provider) => {
    popUpSignIn(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="my-4 flex flex-col gap-12 justify-center items-center">
      <h2 className="font-semibold text-4xl">Login</h2>
      <form
        onSubmit={handleFormSubmit}
        className="font-medium flex flex-col"
        action="#"
      >
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
        <label htmlFor="password">
          Your Password
          <br />
          <input
            className="border border-solid px-4 py-2 rounded"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <br />
        <input
          className="bg-black text-white px-4 py-2 rounded"
          type="submit"
          value="Login"
        />
      </form>
      {error && <p className="font-semibold text-red-700">{error}</p>}
      <div>
        <h3 className="text-center font-semibold">
          <span className="font-medium">Or</span>
          <br />
          Sign-in with
        </h3>
        <div className="mt-4">
          <button
            onClick={() => handleSignIn(googleProvider)}
            className="bg-dark-01 text-white font-medium px-4 py-2 rounded"
          >
            <FaGoogle className="inline mr-1" />
            Google
          </button>
          <button
            onClick={() => handleSignIn(githubProvider)}
            className="bg-dark-01 text-white font-medium px-4 py-2 rounded ml-1"
          >
            <FaGithub className="inline mr-1" />
            GitHub
          </button>
        </div>
      </div>
      <p>
        New to here? Please{" "}
        <Link className="underline text-blue-700 font-semibold" to="/register">
          register
        </Link>
        !
      </p>
    </div>
  );
};

export default Login;
