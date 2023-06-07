import { createBrowserRouter, } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Home/Home";
import Login from "../Shared/AuthenticationPart/Login";
import SignUp from "../Shared/AuthenticationPart/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
]);