import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { FaFolderOpen, FaFolderPlus, FaUsers } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";


const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="flex gap-4 md:gap-10">
                <div className=" h-[400px] ">
                    <div className="sidebar h-[400px] w-[3.35rem] overflow-hidden border-r md:w-56 hover:bg-white hover:shadow-lg">

                        <ul className="mt-6 space-y-2 tracking-wide">

                            <li className="min-w-max">
                                <Link to={'manageClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderOpen className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Manage Classes</span>
                                </Link>
                            </li>

                            <li className="min-w-max">
                                <Link to={'manageUsers'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaUsers className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Manage Users</span>
                                </Link>
                            </li>

                            <li className="min-w-max">
                                <Link to={'addClass'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderPlus className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Add a Class</span>
                                </Link>
                            </li>

                            <li className="min-w-max">
                                <Link to={'myClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderOpen className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">My Classes</span>
                                </Link>
                            </li>

                            <li className="min-w-max">
                                <Link to={'selectedClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <FaFolderOpen className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Selected Classes</span>
                                </Link>
                            </li>

                            <li className="min-w-max">
                                <Link to={'enrolledClasses'} className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <RiSecurePaymentFill className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-600" />
                                    <span className="group-hover:text-gray-700">Enrolled Classes</span>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Dashboard;