function TwoCoasts() {
    return (
        <div className="h-[100vh] w-[100vw]
            pb-[9.259vh] pt-[9.259vh] pr-[6.77vw] select-none
            grid grid-cols-[32.1875vw_52.447vw] gap-x-[4.167vw]">
                <div className="h-full w-full">
                    <img src="images/buchla.png" />
                </div>


                <div 
                    className="relative h-full w-full"
                >
                    <div className="absolute top-0 left-0">
                        <div className="flex">
                            <h1 className="font-bricolage font-normal text-[204px] leading-none">02</h1>
                            <div className="pl-[1.04vw] pt-[3vh]">
                                <p className="font-hanken font-normal text-[2.23vh] pb-[20px]">The Moog and Buchla Era</p>
                                <p className="font-bricolage font-normal text-[40px] leading-none">The machine that broke<br/> every studio.</p>
                            </div>
                        </div>

                        <p className="font-hanken font-light text-[20px] mt-[-20px]">
                                Robert Moog and Don Buchla arrived at the synthesizer independently,<br/>
                                in the same year, from opposite coasts — and disagreed about<br/>
                                everything except the voltage.

                                <br/><br/>
                                
                                Wendy Carlos used Moog's to reinterpret Bach. It sold a million<br/>
                                records. After that, everyone wanted one.
                            </p>
                    </div>
                    <img className="absolute scale-[95%_95%] bottom-0 right-0" src="images/moog.png"/>
                </div>
        </div>
    )
}

export default TwoCoasts;