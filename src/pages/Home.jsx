import { useLoaderData } from "react-router-dom";
// import Carousel from "../components/Carousel";
// import TabCategories from "../components/TabCategories";
// import AllJobs from "../components/AllJobs";


const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            {/* <Carousel /> */}
            {/* <AllJobs /> */}
            {/* <TabCategories jobs={jobs} /> */}
        </div>
    );
};

export default Home;