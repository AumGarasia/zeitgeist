import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import type React from "react";
gsap.registerPlugin(ScrambleTextPlugin);

function Menu() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const _handleMouseHover = (e: React.MouseEvent<HTMLSpanElement>) => {
        const target = e.currentTarget;

        gsap.to(target, {
            duration: 0.35,
            scrambleText: {
                text: target.textContent || "",
                chars: chars,
                revealDelay: 0.2,
            }
        })
    }

    return (
        <div className="grid grid-cols-[17.19vw_47.4vw_19.48vw] grid-rows-[9.26vh_76.85vh_9.26vh] h-full w-full font-hanken pl-[160px] select-none">
            
            {/* ================= ROW 1: HEADER ================= */}
            <div /> {/* Empty spacer block for column 1 */}
            
            <div className="flex items-end justify-start pb-[1.25rem] font-extralight text-[20px]">
                Chapters
            </div>
            
            <div /> {/* Empty spacer block for column 3 */}


            {/* ================= ROW 2: MAIN CONTENT ================= */}
            {/* Column 1: Navigation */}
            <div className="flex flex-col font-bricolage text-[2.5rem] font-normal tracking-[-4%]">
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">Home</span>
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">About</span>
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">Contact</span>
            </div>

            {/* Column 2: Chapters List */}
            <div className="flex flex-col font-bricolage text-[3.75rem] font-normal tracking-[-4%] leading-tight">
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">Origins</span>
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">Moog & Buchla Era</span>
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">Polyphony</span>
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">The Bedroom Studio</span>
                <span onMouseEnter={_handleMouseHover} className="max-w-fit">Epilogue</span>
            </div>

            {/* Column 3: Brand Description */}
            <div className="flex flex-col justify-start">
                <div className="flex items-baseline mt-[-2rem]">
                    <span className="font-bricolage text-[6rem] font-extrabold leading-none">
                        zeit
                    </span>
                    <span className="font-cormorant text-[8.16rem] font-bold italic text-[#D73340] tracking-[-4%] leading-none ml-[-0.313rem]">
                        geist
                    </span>
                </div>

                <p className="mt-[50px] font-hanken text-[1.25rem] font-light leading-none">
                    A project about <em>everything</em> at once.<br /><br />
                    Zeitgeist began as a question: what would it look like to care 
                    deeply about both editorial design and music history at the same time, 
                    in the same place?<br /><br />
                    This is that answer.<br /><br />
                    Built by someone trying to make the web <em>feel</em> like the actual printed thing.
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
                <span onMouseEnter={_handleMouseHover} onMouseLeave={_handleMouseHover} className="max-w-fit hover:underline">aumgarasia@gmail.com</span>
            </div>

        </div>
    );
}

export default Menu;