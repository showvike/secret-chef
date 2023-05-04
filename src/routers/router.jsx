import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Main from "../components/Layout/Main/Main";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import Recipes from "../components/Recipes/Recipes";

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
      {
        path: "recipes/:id",
        element: <Recipes />,
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-showvike-showvike.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
