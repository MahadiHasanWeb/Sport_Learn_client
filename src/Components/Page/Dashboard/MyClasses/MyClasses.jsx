import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MyClassCard from "./MyClassCard";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classData = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })


    console.log(classData)

    return (
        <div className="grid md:grid-cols-2 gap-10 md:gap-x-10">
            {
                classData?.map(data => <MyClassCard
                    key={data._id}
                    data={data}
                ></MyClassCard>)
            }
        </div>
    );
};

export default MyClasses;