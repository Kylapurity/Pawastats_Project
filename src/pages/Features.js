import NavBar from "../components/NavBar";
import { featuresDetails } from "../utils/featuresDetails";
import { Elipsis1, Elipsis2 } from "../components/UI/OvalShape";


function Features() {
    return (
        <div className="bg-[#03091E]">
            <NavBar />
            <div className="text-white  flex flex-col items-center mt-14">
                <div className="h-36">
                    <Elipsis1 />
                    <span className="relative bottom-20 left-72 text-3xl font-bold">Our Top Features</span>
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
                <div className="z-10 mt-24 px-36 space-y-20">
                    <div className="flex space-x-24 items-center">
                        <img src='/static/images/stats2.png' alt='stats' />
                        <div className="flex flex-col space-y-4">
                            <span className="text-2xl font-bold" >Accelerate Revenue Growth</span>
                            <span>
                                Close more deals, faster with our AI-powered deal management tools that streamline 
                                your sales process, so your leads move seamlessly from qualified to closed-won. 
                                Introduce consistency into the customer journey and arm your sellers with all the 
                                data and insights they need to effectively prioritize the right deals at the right time.
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-24 items-center">
                        <div className="flex flex-col space-y-4">
                            <span className="text-2xl font-bold">Manage all your customer communications from one universal inbox.</span>
                            <span>
                                Use free customer management software to better support your customers with tools 
                                like ticketing and live chat. CRM includes a universal inbox, giving your whole team 
                                a centralized view of every customer interaction. From the universal inbox, your team 
                                can view, assign, and reply to every conversation, from any channel.
                            </span>
                        </div>
                        <img src="/static/images/stats1.png" alt="stats" />
                    </div>
                </div>
                <div>
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