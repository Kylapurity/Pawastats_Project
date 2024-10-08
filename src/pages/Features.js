import { HiUsers } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { MdAutoGraph } from "react-icons/md";
import { IoMailOpenSharp } from "react-icons/io5";

import NavBar from "../components/NavBar";
import { Elipsis1, Elipsis2 } from "../components/UI/OvalShape";



const featuresDetails = [
    {
        id: '1',
        icon: <HiUsers size={24} color="#64e6de" />,
        title:'Relationship Management',
        info: 'We put the R for Relationships back into CRM.Contact management solution for individuals & teams managing relationships.'
    },
    {
        id: '2',
        icon: <FaRegUserCircle size={24} color="#64e6de"  />,
        title: 'Social Profile Enrichment',
        info: 'Let Pawastats find social profile information, emails, phone numbers, addresses, etc. for your prospects & existing contacts.'
    },
    {
        id: '3',
        icon: <FiPieChart size={24} color="#64e6de" />,
        title: 'Sales Reporting',
        info: 'Completely customizable deals and reports. Advanced search, automation, forecasting, templates & email tracking.'
    },
    {
        id: '4',
        icon: <GrMail size={24} color="#64e6de" />,
        title: 'Browser & Email Extension',
        info: 'Contact management solution for individuals & teams managing relationships.',
    },
    {
        id: '5',
        icon: <MdAutoGraph size={24} color="#64e6de" />,
        title: 'Workflows & Automation',
        info: 'Manage business workflows across departments.Ditch spreadsheets. Save time with templates.'
    },
    {
        id: '6',
        icon: <IoMailOpenSharp size={24} color="#64e6de" />,
        title: 'Group Email Marketing',
        info: 'One-on-one messaging at scale. Know who, when, how many times opened your emails and/or clicked on a link.'
    }
]


function Features() {
    return (
        <div className="bg-[#03091E]">
            <NavBar />
            <div className="text-white h-[92.2vh] flex flex-col items-center ">
                <div className="h-36">
                    <Elipsis1 />
                    <span className="relative bottom-24 left-72 text-3xl font-bold">Our Top Features</span>
                </div>
                <div className="z-10 md:grid grid-cols-3 gap-10">
                    {
                        featuresDetails.map((details) => (
                            <div className="text-center flex flex-col items-center w-80">
                                <div className=" rounded-xl shadow-inner-xl p-1  bg-gray-600 my-2">
                                    <p className=" bg-[#03091E] p-2 rounded-full shadow-inner -inset-20 shadow-gray-500">{details.icon}</p>
                                </div>
                                <span className="text-2xl bg-gradient-to-r from-[#64e6de] via-[#64e6de] to-[#25575c] bg-clip-text text-transparent  font-bold h-14">{details.title}</span>
                                <span>{details.info}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute bottom-56 -left-16 ">
                    <Elipsis2 color1={'#03091E'} color2={'#126e7a'} />
                </div>
                <div className="absolute bottom-10 right-[30rem] ">
                    <Elipsis2 color1={'#03091E'} color2={'#126e7a'} />
                </div>

            </div>
        </div>
    )
}

export default Features;