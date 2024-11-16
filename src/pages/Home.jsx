import { Outlet } from "react-router-dom";
// import CategoryNews from "../components/homeComponents/CategoryNews";
import LeftNavbar from "../components/homeComponents/LeftNavbar";
import RightNavbar from "../components/homeComponents/RightNavbar";
import Header from "../components/sharedComponents/Header";
import Markquee from "../components/sharedComponents/Markquee";
import Navbar from "../components/sharedComponents/Navbar";


const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Markquee></Markquee>
                <Navbar></Navbar>
            </header>
            <main>

                <div className="container mx-auto grid grid-cols-12 mt-8 gap-5">
                    <aside className="left col-span-3">
                        <LeftNavbar></LeftNavbar>
                    </aside>
                    <section className="col-span-6">
                        <Outlet></Outlet>
                    </section>
                    <aside className="right col-span-3">
                        <RightNavbar></RightNavbar>
                    </aside>
                </div>
            </main>

        </div>
    );
};

export default Home;