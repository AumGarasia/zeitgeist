function Polyphony() {
    return (
        <div 
            className="h-[100vh] w-[100vw] ml-[1vw]
            pb-[9.259vh] pt-[9.259vh] pr-[3vw] select-none
            grid grid-cols-[26.56vw_60vw] gap-x-[3.125vw]"
        >
            <div className="relative h-full">
                <div className="absolute bottom-0 left-0">

                    {/* HEADING + SUBHEADING */}
                    <div className="flex">
                        <h1 className="font-bricolage font-normal text-[200px] leading-none">03</h1>
                        <p className="font-hanken font-normal text-[24px] pl-[1.04vw] pt-[13vh]">Polyphony</p>
                    </div>
                    <h3 className="font-bricolage font-normal text-[40px] pb-[3.703vh] leading-none">
                        Five Voices. One Memory. Everything changes.
                    </h3>

                    {/* COPY */}
                    <p className="font-hanken font-light text-[2.23vh]">
                        The Prophet-5 could play five notes at once and 
                        remember twenty-four sounds. A small thing,
                        unless you understood what it meant:
                        the musician could now <em>compose, save, and perform</em>.

                        <br/><br/>

                        The synthesizer had become a studio in a box.
                    </p>
                </div>
            </div>

            {/* EDITED PROPHET-5 POSTER */}
            <div>
                <img src="images/poly.png"/>
            </div>
        </div>
    );
}

export default Polyphony;