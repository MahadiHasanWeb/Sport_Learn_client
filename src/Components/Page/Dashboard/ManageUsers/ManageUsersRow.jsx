import { useContext, useEffect } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../Shared/AuthenticationPart/AuthProvider';

const ManageUsersRow = ({ RowData, setUserData, userData }) => {
    useEffect(() => {
        AOS.init();
    }, [])

    const { user } = useContext(AuthContext);


    const handleMakeAdmin = id => {

    }



    const { email, name, _id } = RowData;

    const handleDelete = _id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = userData.filter(user => user._id !== _id)
                            setUserData(remaining)
                        }
                    })
                // console.log(result)
            }
        })
    }



    return (
        <tr className="hover" data-aos="fade-left">
            <th></th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {user?.role === 'admin' ? 'Admin' :
                    <button onClick={() => handleMakeAdmin(_id)} className="button button-primary"><FaUserShield /></button>
                }
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="button button-primary"><FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default ManageUsersRow;