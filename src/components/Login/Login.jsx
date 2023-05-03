import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[80vh] flex flex-col gap-12 justify-center items-center">
      <h2 className="font-semibold text-4xl">Login</h2>
      <form className="font-medium flex flex-col" action="#">
        <label htmlFor="email">
          Your Email
          <br />
          <input
            className="border border-solid px-4 py-2 rounded"
            type="email"
            name="email"
            placeholder="Enter your email"
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
          />
        </label>
        <br />
        <input
          className="bg-black text-white px-4 py-2 rounded"
          type="submit"
          value="Login"
        />
      </form>
      <div>
        <h3 className="text-center font-semibold">
          <span className="font-medium">Or</span>
          <br />
          Sign-in with
        </h3>
        <div className="mt-4">
          <button className="bg-dark-01 text-white font-medium px-4 py-2 rounded">
            <FaGoogle className="inline mr-1" />
            Google
          </button>
          <button className="bg-dark-01 text-white font-medium px-4 py-2 rounded ml-1">
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
