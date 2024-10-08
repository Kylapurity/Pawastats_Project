import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const navlinks= [
    {
        id: '1',
        name: 'Features'
    },
    {
        id: '2',
        name: 'Pricing'
    },
    {
        id: '3',
        name: 'Resources'
    }
]

function NavBar() {
    return (
        <div className="hidden md:flex text-gray-200 px-10 h-14 items-center justify-between  shadow-gray-700 shadow-lg">
           <div className="flex space-x-56">
                <span>LOGO</span>
                <div className="flex  space-x-10">
                    { 
                        navlinks.map((link) => (
                            <div className=" flex items-end space-x-1">
                                <span className="text-xl">{link.name}</span>
                                <MdOutlineKeyboardArrowDown className="space-x-2" size={20} />
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