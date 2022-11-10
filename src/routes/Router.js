import { createBrowserRouter } from "react-router-dom";
import Add from "../components/pages/Add";
import Blog from "../components/pages/Blog";
import Detail from "../components/pages/Detail";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Reviews from "../components/pages/Reviews";
import Services from "../components/pages/Services";
import Update from "../components/pages/Update";
import NotFound from "../components/shared/NotFound";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://wild-with-harry-server.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add></Add>
          </PrivateRoute>
        ),
      },
      {
        path: "/detail/:id",
        element: <Detail></Detail>,
        loader: ({ params }) =>
          fetch(
            `https://wild-with-harry-server.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);
