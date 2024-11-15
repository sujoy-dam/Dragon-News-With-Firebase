import LeftNavbar from "../components/homeComponents/LeftNavbar";
import RightNavbar from "../components/homeComponents/RightNavbar";


const Home = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 mt-8 gap-5">
            <aside className="left col-span-3">
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className="col-span-6">Main Content</section>
            <aside className="right col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
        </div>
    );
};

export default Home;