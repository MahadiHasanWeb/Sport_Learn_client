import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";


const ManageClasses = () => {

    const [classData, setClassData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/classes`)
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [])

    return (
        <div className="grid md:grid-cols-2 gap-10 md:gap-x-10">
            {
                classData?.map(data => <ClassCard
                    key={data._id}
                    data={data}
                ></ClassCard>)
            }
        </div>
    );
};

export default ManageClasses;