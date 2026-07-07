function Menu() {
    return (
        <div className="grid grid-cols-[17.19vw_47.4vw_19.48vw] grid-rows-[9.26vh_76.85vh_9.26vh] h-full w-full font-hanken pl-[160px]">
            
            {/* ================= ROW 1: HEADER ================= */}
            <div /> {/* Empty spacer block for column 1 */}
            
            <h3 className="flex items-end justify-start pb-[1.25rem] font-extralight text-[20px]">
                Chapters
            </h3>
            
            <div /> {/* Empty spacer block for column 3 */}


            {/* ================= ROW 2: MAIN CONTENT ================= */}
            {/* Column 1: Navigation */}
            <nav className="flex flex-col font-bricolage text-[2.5rem] font-normal tracking-[-4%]">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </nav>

            {/* Column 2: Chapters List */}
            <div className="flex flex-col font-bricolage text-[3.75rem] font-normal tracking-[-4%] leading-tight">
                <span>Origins</span>
                <span>Moog & Buchla Era</span>
                <span>Polyphony</span>
                <span>The Bedroom Studio</span>
                <span>Epilogue</span>
            </div>

            {/* Column 3: Brand Description */}
            <div className="flex flex-col justify-start">
                <div className="flex items-baseline">
                    <span className="font-bricolage text-[6rem] font-extrabold leading-none">
                        zeit
                    </span>
                    <span className="font-cormorant text-[8.16rem] font-bold italic text-[#D73340] tracking-[-4%] leading-none ml-2">
                        geist
                    </span>
                </div>

                <p className="mt-6 font-hanken text-[1.25rem] font-light tracking-[-4%] leading-relaxed">
                    A project about <em>everything</em> at once.<br /><br />
                    Zeitgeist began as a question: what would it look like to care 
                    deeply about both editorial design and music history at the same time, 
                    in the same place?<br /><br />
                    This is that answer.<br /><br />
                    Built by someone trying to make the web <em>feel</em> like a printed thing.
                </p>
            </div>


            {/* ================= ROW 3: FOOTER ================= */}
            <div className="flex font-bricolage text-[1.25rem] font-light">
                Built by Aum G.
            </div>

            <div className="flex font-bricolage text-[1.25rem] font-light">
                Zeitgeist — A short history of synthesis ©
            </div>

            <div className="flex font-bricolage text-[1.25rem] font-light">
                aumgarasia@gmail.com
            </div>

        </div>
    );
}

export default Menu;