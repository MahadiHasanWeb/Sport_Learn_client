import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Shared/AuthenticationPart/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const notify = () => toast("Please Login!");
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(loading)
    // console.log(user)
    if (loading) {
        return <div className="flex items-center h-screen justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
            <div className="flex space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
        </div>
    }

    if (user) {
        return children;
    }
    else {
        notify()
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;