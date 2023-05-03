import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Main from "../components/Layout/Main/Main";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
