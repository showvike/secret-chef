import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home/Home";
import Main from "../components/Layout/Main/Main";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import Recipes from "../components/Recipes/Recipes";
import Private from "./Private";

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
        path: "blog",
        element: <Blog />,
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
        element: (
          <Private>
            <Recipes />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-showvike-showvike.vercel.app/chefs/${params.id}`
          ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
