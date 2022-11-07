import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/pages/Blog";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Reviews from "../components/pages/Reviews";
import Services from "../components/pages/Services";
import NotFound from "../components/shared/NotFound";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
        ]
    },
    { path: '*', element: <NotFound></NotFound> }
]);