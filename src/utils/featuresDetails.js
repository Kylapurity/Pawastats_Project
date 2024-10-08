import { HiUsers } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { MdAutoGraph } from "react-icons/md";
import { IoMailOpenSharp } from "react-icons/io5";

export const featuresDetails = [
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