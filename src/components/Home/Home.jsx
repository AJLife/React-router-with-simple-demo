import { Outlet } from "react-router-dom";
import Header from "../Headers/Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div> 
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;