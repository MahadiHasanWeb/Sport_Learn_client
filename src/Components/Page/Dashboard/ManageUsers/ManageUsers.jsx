import { useEffect, useState } from 'react';
import ManageUsersRow from './ManageUsersRow';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ManageUsers = () => {
    useEffect(() => {
        AOS.init();
    }, [])

  


    const [userData, setUserData] = useState([])
    // console.log(myToys)

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    return (
        <div>
            <h1 className="text-center mb-8 text-4xl">My Toys</h1>
            <div className={`overflow-x-auto ${userData?.length < 6 ? 'h-screen' : ''}`}>
                <table className="table w-full">
                    {/* head */}
                    <thead data-aos="fade-left">
                        <tr >
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map(RowData => <ManageUsersRow
                                key={RowData._id}
                                RowData={RowData}
                                setUserData={setUserData}
                                userData={userData}
                            ></ManageUsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;