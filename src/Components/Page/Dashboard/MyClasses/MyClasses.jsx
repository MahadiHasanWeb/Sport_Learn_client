import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MyClassCard from "./MyClassCard";
import { useContext } from "react";
import { AuthContext } from "../../../Shared/AuthenticationPart/AuthProvider";


const MyClasses = () => {

    const { user } = useContext(AuthContext);

    console.log(user)

    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [] } = useQuery([`/classes/${user?.email}`], async () => {
        const res = await axiosSecure.get(`/classes/${user?.email}`)
        return res.data;
    })


    console.log(classData)

    return (
        <div>
            <h1 className="text-center text-gray-500 text-4xl font-semibold my-10">My Courses</h1>
            {classData.length === 0 && <h1 className="text-center text-gray-500 text-5xl font-semibold my-24">Please add your course</h1>}
            <div className="grid md:grid-cols-2 gap-10 md:gap-x-10">
                {
                    classData?.map(data => <MyClassCard
                        key={data._id}
                        data={data}
                    ></MyClassCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;