// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const navlinks= [
    {
        id: '1',
        name: 'Home',
        path: '/'
    },
    {
        id: '2',
        name: 'Features',
        path: '/features'
    },
    {
        id: '3',
        name: 'Pricing',
        path: '/pricing',
    },
    {
        id: '4',
        name: 'Resources',
        path: '/resources'
    }
]

function NavBar() {
    return (
        <div className="hidden md:flex text-gray-200 px-10 h-14 items-center justify-between max-w-7xl rounded-xl mt-8  shadow-gray-700 shadow-lg fixed top-0 w-full z-20 bg-[#03091E]">
           <div className="flex items-center space-x-56 ">
                <div className="">
                    <img src="/static/images/logo.png" alt="LOGO" />
                </div>
                <div className="flex  space-x-10">
                    { 
                        navlinks.map((link) => (
                            <div className=" flex items-end space-x-1">
                                <Link to={link.path} className="text-xl">{link.name}</Link>
                                {/* <MdOutlineKeyboardArrowDown className="space-x-2" size={20} /> */}
                            </div>
                        ))
                    }
                </div>
           </div>
           <div className="space-x-4">
                <button className="bg-gradient-to-b from-[#042D3A] to-[#0B7CA0] rounded-full px-2 py-1 text-xl font-semibold">Get A Demo</button>
                <button className="bg-gradient-to-b from-[#2ED6E1] to-[#19757B]  rounded-full px-2 py-1 text-xl text-black font-semibold">Try For Free</button>
           </div>
        </div>
    )
}

export default NavBar;