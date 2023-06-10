import Banner from "./Banner";
import PopularClasses from "./Popular Classes/PopularClasses";
import PopularInstructors from "./Popular Instructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;