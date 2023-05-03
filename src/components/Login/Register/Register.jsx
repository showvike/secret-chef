import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { auth, registerUser, updateUser } = useContext(AuthContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form["photo-url"].value;
    console.log(name, email, password, photoUrl);

    if (!emailAndPasswordValidation(email, password)) return;

    userRegistration(email, password, name, photoUrl);
  };

  const emailAndPasswordValidation = (email, password) => {
    if (!(email && password))
      return setError("Error: Please Enter Email & Password Both!");
    else if (password.length < 6)
      return setError("Error: Password Should Be Six Character Long!");
    return true;
  };

  const userRegistration = (email, password, name, photoUrl) => {
    registerUser(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userUpdate(name, photoUrl);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  const userUpdate = (name, photoUrl) => {
    updateUser(auth.currentUser, { displayName: name, photoURL: photoUrl })
      .then(() => {})
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="my-4 flex flex-col gap-12 justify-center items-center">
      <h2 className="font-semibold text-4xl">Register</h2>
      <form
        onSubmit={handleFormSubmit}
        className="font-medium flex flex-col"
        action="#"
      >
        <label htmlFor="name">
          Your Name
          <br />
          <input
            className="border border-solid px-4 py-2 rounded"
            type="text"
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
        <label htmlFor="photo-url">
          Your Photo URL
          <br />
          <input
            className="border border-solid px-4 py-2 rounded"
            type="text"
            name="photo-url"
            placeholder="Enter your photo url"
            required
          />
        </label>
        <br />
        <input
          className="bg-black text-white px-4 py-2 rounded"
          type="submit"
          value="Register"
        />
      </form>
      {error && <p className="font-semibold text-red-700">{error}</p>}
      <p>
        Already have an account? Please{" "}
        <Link className="underline text-blue-700 font-semibold" to="/login">
          login
        </Link>
        !
      </p>
    </div>
  );
};

export default Register;
