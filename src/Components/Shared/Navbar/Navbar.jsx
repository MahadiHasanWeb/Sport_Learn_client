import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthenticationPart/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";
import useStudent from "../../Hooks/useStudent";
import useSelectedClass from "../../Hooks/useSelectedClass";


const Navbar = () => {
    // Theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    // Theme Done

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch()
    }

    const [admin] = useAdmin();
    const [Instructors] = useInstructors();
    const [student] = useStudent();
    const [selectedClass] = useSelectedClass()

    const navItems = <>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
        <ActiveLink to="/classes">Classes</ActiveLink>
        {admin && <ActiveLink to={`${admin && '/dashboard/manageClasses'}`}>Dashboard</ActiveLink>}
        {Instructors && <ActiveLink to={`${Instructors && '/dashboard/addClass'}`}>Dashboard</ActiveLink>}
        {student && < ActiveLink to={`${student && '/dashboard/selectedClasses'}`}>Dashboard {selectedClass && <sup className="font-semibold text-[15px]">{selectedClass?.length}</sup>}</ActiveLink>}

    </>
    const navEnd = <>
        <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate">
                <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                />
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
        </button>
        {user && <img title={user.displayName} className='w-[52px] md:w-[60px] rounded-full h-[52px] md:h-[60px]' src={user.photoURL} alt="" />}
        {user ? <Link to='/' onClick={handleLogOut} className="button button-primary ms-4 md:ms-8">Log Out</Link> :
            <Link to='/login' className="button button-primary ms-4 md:ms-8">Login</Link>}
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="flex normal-case">
                    <span className="self-center  text-[22px] md:text-3xl font-semibold whitespace-nowrap text-blue-600">Sport Learn</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {navEnd}
            </div>
        </div>
    );
};

export default Navbar;