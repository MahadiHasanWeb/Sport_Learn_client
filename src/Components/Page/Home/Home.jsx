import Banner from "./Banner";
import PopularClasses from "./Popular Classes/PopularClasses";
import PopularInstructors from "./Popular Instructors/PopularInstructors";
import StudentSay from "./StudentSay";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <StudentSay></StudentSay>
        </div>
    );
};

export default Home;