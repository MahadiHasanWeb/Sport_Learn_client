import { createBrowserRouter, } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Home/Home";
import Login from "../Shared/AuthenticationPart/Login";
import SignUp from "../Shared/AuthenticationPart/SignUp";
import Instructors from "../Page/Instructors";
import Classes from "../Page/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ManageClasses from "../Page/Dashboard/ManageClasses";

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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }
]);