function BedroomStudio() {
    return(
        <div 
            className="h-[100vh] w-[100vw] ml-[1vw]
            pb-[9.259vh] pt-[9.259vh] pr-[3vw] select-none 
            grid grid-rows-[52.963vh_27.12vh] gap-y-[3.7vh]"
        >
            <div className="w-[86.46vw]">
                <img src="images/studio.png" />
            </div>

            <div className="w-full h-full grid grid-cols-2 gap-x-[60px] mt-[-4.8vh]">
                <div className="relative">
                    <div className="absolute right-0 flex">
                        <h1 className="font-bricolage font-normal text-[200px] leading-none">04</h1>
                        <span className="font-hanken font-normal text-[24px] pl-[1.041vw] pt-[10.6vh]">The Bedroom <br/> Studio</span>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[-3vh]">
                        <h3 className="font-bricolage font-normal text-[40px]">
                            The studio moved into <br/> the bedroom.
                        </h3>
                    </div>
                </div>

                <div className="relative">
                    <p className="absolute left-0 font-hanken font-light text-[2.23vh]">
                        The Korg M1 cost less than a second-hand <br/> 
                        car. It sounded like a professional <br/>
                        recording. A teenager with a keyboard now <br/> 
                        had access to the same sonic palette as <br/>
                        a major label studio.

                        <br/><br/>

                        The synthesizer had completed its journey.

                        <br/><br/>

                        From laboratory to living room.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default BedroomStudio;