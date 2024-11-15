import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CategoryNews from "../components/homeComponents/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "",
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
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    }
])
export default router