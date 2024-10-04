import Ad from "../components/Ad";
import NavBar from "../components/NavBar";

function Landing() {
    return (
        <div className="bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #03091E 0%, #03091E 85%, #126e7a 100%)' }}>
            <NavBar />
            <Ad />
        </div>
    )
}

export default Landing;