
function Ad() {
    return (
        <div className="text-white p-4 md:grid grid-cols-2 gap-2 h-[93vh] ">
            <div className="flex flex-col space-y-2 md:space-y-6  md:pl-28  justify-center">
                <span className="text-3xl md:text-5xl font-bold">Boost Sales With Our</span>
                <span className="text-2xl md:text-5xl bg-gradient-to-r from-[#64e6de] via-[#398485] to-[#25575c] bg-clip-text text-transparent  font-bold h-14">Cutting-Edge CRM Solution</span>
                <span className="text-sm md:text-md">
                    PawaStats helps you improve customer relationships 
                    by conducting sentimental analysis based on<br /> media feedback
                    and consumer reviews. It provides real-time insights into
                    trends making it easier<br /> to make informed decisions  and refine
                    your marketing strategies.
                </span>

                <div className="h-16 md:h-28 flex items-end">
                    <button className="rounded-full bg-gradient-to-b from-[#2cdbcc] to-[#1C858C]   px-3 py-1 text-xl font-bold text-black">Get a demo</button>
                </div>
            </div>
            <div className=" flex items-center">
                {/* <img src="/static/images/stats.png" className="h-[30rem] w-[44rem]"  alt="stats" /> */}
            </div>
        </div>
    )
}

export default Ad;