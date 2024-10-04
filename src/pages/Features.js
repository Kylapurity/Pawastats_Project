import NavBar from "../components/NavBar";
import OvalShape from "../components/UI/OvalShape";

function Features() {
    return (
        <div className="bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #03091E 0%, #03091E 85%, #126e7a 100%)' }}>
            <NavBar />
            <div className="text-white h-[95vh] flex justify-center mt-16">
                <div className="">
                    <OvalShape />
                   <span className="relative -top-80 left-[36rem] text-3xl font-bold">Our Top Features</span>
                </div>
            </div>
        </div>
    )
}

export default Features;