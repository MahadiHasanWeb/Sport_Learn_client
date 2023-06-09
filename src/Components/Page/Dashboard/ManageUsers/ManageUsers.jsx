import { useEffect } from 'react';
import ManageUsersRow from './ManageUsersRow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const ManageUsers = () => {
    useEffect(() => {
        AOS.init();
    }, [])


    const [axiosSecure] = useAxiosSecure();
    const { data: userData = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    return (
        <div>
            <h1 className="text-center mb-8 text-4xl">My Toys</h1>
            <div className={`overflow-x-auto ${userData?.length < 6 ? 'h-screen' : ''}`}>
                <table className="table w-full">
                    {/* head */}
                    <thead data-aos="fade-left">
                        <tr >
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map((RowData, index) => <ManageUsersRow
                                key={RowData._id}
                                index={index}
                                RowData={RowData}
                                refetch={refetch}
                            ></ManageUsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;