import { createBrowserRouter, } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Page/Home/Home";
import Login from "../Shared/AuthenticationPart/Login";
import SignUp from "../Shared/AuthenticationPart/SignUp";
import Instructors from "../Page/Instructors";
import Classes from "../Page/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ManageClasses from "../Page/Dashboard/ManageClasses";
import ManageUsers from "../Page/Dashboard/ManageUsers";
import AddClass from "../Page/Dashboard/AddClass";
import MyClasses from "../Page/Dashboard/MyClasses";
import SelectedClasses from "../Page/Dashboard/SelectedClasses";
import EnrolledClasses from "../Page/Dashboard/EnrolledClasses";

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
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'selectedClasses',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
        ]
    }
]);