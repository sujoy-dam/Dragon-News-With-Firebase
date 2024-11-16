import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CategoryNews from "../components/homeComponents/CategoryNews";
import AuthLayout from "../pages/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/news/:id",
        element: <PrivetRout>
            <NewsDetails></NewsDetails>
        </PrivetRout>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/career",
        element: <Career></Career>
    },
    {
        path: "*",
        element: <h2>Error</h2>
    }
])
export default router