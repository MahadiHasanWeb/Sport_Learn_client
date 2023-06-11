import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import TitleCover from "../../../Home/TitleCover";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";



const UpdateClass = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [], refetch } = useQuery([`/myClasses/update/${id}`], async () => {
        const res = await axiosSecure.get(`/myClasses/update/${id}`)
        return res.data;
    })
    const { className, instructorName, availableSeats, instructorEmail, price, _id } = classData;
    const imgHostingToken = import.meta.env.VITE_Image_Upload_Token
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Image Upload
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.ClassImage[0])

        fetch(imgHostingUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { availableSeats, className, instructorEmail, instructorName, price } = data;

                    const updateData = { availableSeats, className, instructorEmail, instructorName, price, ClassImage: imgUrl, role: 'pending' }
                    console.log(updateData)
                    axiosSecure.put(`/myClasses/update/${_id}`, updateData)
                        .then(data => {
                            console.log(data.data)
                            if (data.data.modifiedCount) {
                                refetch();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class updated successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }




    return (
        <div className="w-full mx-auto mb-8 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm min-h-screen">
            <div className="text-center">
                <TitleCover heading={`Update ${className}`}></TitleCover>
                <p className="">Fill up the form below to add a class.</p>
            </div>
            <div className="m-7">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                        <div className="relative h-12 mb-6">
                            <input type="text" {...register("className", { required: true })} className="peer add-input" placeholder=" " defaultValue={className} />
                            <label className="input-level">Class name</label>
                            {errors.className && <span className="text-red-600">Class name is required</span>}
                        </div>

                        <div className="relative h-12 mb-6">
                            <input type="text" {...register("instructorName", { required: true })} className="peer add-input" placeholder=" " defaultValue={instructorName} />
                            <label className="input-level">Instructor name</label>
                            {errors.instructorName && <span className="text-red-600">Instructor name is required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                        <div className="relative h-12 mb-6">
                            <input type="number" {...register("availableSeats", { required: true })} className="peer add-input" placeholder=" " defaultValue={availableSeats} />
                            <label className="input-level">Available seats</label>
                            {errors.availableSeats && <span className="text-red-600">Available seats is required</span>}
                        </div>

                        <div className="relative h-12 mb-6">
                            <input type="text" {...register("instructorEmail", { required: true })} className="peer add-input" placeholder=" " defaultValue={instructorEmail} />
                            <label className="input-level">Instructor email</label>
                            {errors.instructorEmail && <span className="text-red-600">Instructor email is required</span>}
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                        <div className="relative h-12 mb-6">
                            <input type="number" {...register("price", { required: true })} className="peer add-input" placeholder=" " defaultValue={price} />
                            <label className="input-level">Price</label>
                            {errors.price && <span className="text-red-600">Price is required</span>}
                        </div>

                        <div className="relative h-12 mb-6">
                            <input type="file" {...register("ClassImage", { required: true })} className="peer add-input" placeholder=" " />
                            <label className="input-level">Class Image</label>
                            {errors.ClassImage && <span className="text-red-600">Class Image is required</span>}
                        </div>
                    </div>

                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">Update class</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateClass;