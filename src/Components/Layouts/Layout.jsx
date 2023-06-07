import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <div className='my-container'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <ScrollRestoration></ScrollRestoration>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Layout;