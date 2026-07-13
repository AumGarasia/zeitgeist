function Origins() {
    return (
        <div 
            className="h-[100vh] w-[100vw] pl-[6.77vw] 
            pb-[9.259vh] pt-[9.259vh] pr-[50px] grid grid-cols-[55.46vw_29.037vw] gap-x-[4.278vw] select-none" 
        >
            <div className="relative h-full w-full">
                <img className="absolute bottom-0" src="images/origins.png" />
            </div>

            <div className="relative h-full w-full">
                <div className="absolute bottom-0 left-0 mb-[-0.926vh]">
                        <div className="flex">
                            <h1 className="font-bricolage font-normal text-[18.89vh] leading-none">01</h1>
                            <span className="font-hanken font-normal text-[2.23vh] pl-[1.07vw] pt-[13vh]">Origins</span>
                        </div>

                        <h3 
                            className="font-bricolage font-normal text-[3.703vh] pb-[3.703vh]"
                        >
                            Before the Minimoog, there was electricity itself.
                        </h3>

                        <p className="font-hanken font-light text-[2.23vh]">
                            Maurice Martenot built his instrument to sing 
                            where no instrument had sung before. The
                            Hammond followed — designed for churches,
                            stolen by jazz.

                            <br/><br/>

                            The world was not yet ready for the synthesizer. 
                            But the synthesizer was <em>already here</em>.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Origins;