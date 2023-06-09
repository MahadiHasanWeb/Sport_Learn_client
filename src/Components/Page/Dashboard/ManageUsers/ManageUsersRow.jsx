import { useEffect } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ManageUsersRow = ({ RowData, refetch }) => {
    useEffect(() => {
        AOS.init();
    }, [])

    const { email, name, _id, role } = RowData;


    const handleMakeAdmin = RowData => {
        fetch(`http://localhost:5000/users/admin/${RowData._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${RowData.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



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
                            refetch()
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
                {role === 'admin' ? 'Admin' :
                    <button onClick={() => handleMakeAdmin(RowData)} className="button button-primary"><FaUserShield /></button>
                }
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="button button-primary"><FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default ManageUsersRow;