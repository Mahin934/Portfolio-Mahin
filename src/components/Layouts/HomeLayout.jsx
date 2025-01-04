import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";


const HomeLayout = () => {
    return (
        <div className='md:container mx-auto'>
            <div><NavBar></NavBar></div>
            <div><Outlet></Outlet></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default HomeLayout;