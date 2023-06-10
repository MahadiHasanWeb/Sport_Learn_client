import ClassCard from "./ClassCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    return (
        <div>
            <h1 className="text-center text-gray-500 text-4xl font-semibold my-10">Manage Classes</h1>
            <div className="grid md:grid-cols-2 gap-10 md:gap-x-10 mb-10">
                {
                    classData?.map(data => <ClassCard
                        key={data._id}
                        data={data}
                        refetch={refetch}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;