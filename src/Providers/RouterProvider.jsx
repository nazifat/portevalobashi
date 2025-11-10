import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Courses from "../Pages/Courses/Courses";
import Blog from "../Pages/Blog/Blog";
import ShopPage from "../Pages/ShopPage/ShopPage";
import ReviewFeed from "../Pages/ReviewFeed/ReviewFeed";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/registration",
                element: <Registration></Registration>

            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/shop",
                element: <ShopPage></ShopPage>
            },
            {
                path: "review-feed",
                element: <ReviewFeed></ReviewFeed>
            }

        ]
    },
]);