import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../AuthenticationPart/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";
import useStudent from "../../Hooks/useStudent";
import useSelectedClass from "../../Hooks/useSelectedClass";


const Navbar = () => {

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