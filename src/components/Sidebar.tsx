import { useState } from "react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import gsap from "gsap";

// TODO: Fix the animation jitter on the side-pane when returning back

gsap.registerPlugin(ScrambleTextPlugin);

function Sidebar() {
    const [isClicked, setIsClicked] = useState(false);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const _handleClick = () => {
        setIsClicked(!isClicked);
    };

    const _handleHover = () => {
        gsap.to("#text", {
            duration: 0.35,
            scrambleText: {
                text: isClicked ? "Back" : "Menu",
                chars: chars,
                revealDelay: 0.2,
            },
        });
    }

    return (
        <div className="flex">
            <div className={`toHome flexbox h-[100vh] text-white bg-black \
            font-dancing font-bold text-[1.75rem] pl-[1rem] pt-[1.25rem] transition-all \
            ${isClicked 
                ? 'w-[100vw] pointer-events-none duration-900' 
                : 'w-[3.125rem] cursor-pointer hover:w-[4.5rem] hover:pl-[1.7rem] duration-900'
            }`}>
                Z
            </div>

            <div 
                onClick={_handleClick} 
                onMouseEnter={_handleHover}
                onMouseLeave={_handleHover}
                className={`menu group flex absolute max-h-fit ml-[5.625rem] mt-[1.25rem] \
                font-hanken text-[20px] pt-[0.25rem] cursor-pointer transition-all duration-900 \
                ${isClicked ? 'text-white' : 'text-black'}`}
            >
                <div className="mt-[0.65rem] mr-[5px]">
                    <svg className="menuIcon" width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className={`transition-all duration-900 group-hover:stroke-[2px] ${isClicked ? 'stroke-white' : 'stroke-black'}`} y1="0.25" x2="20" y2="0.25" strokeWidth="0.5"/>
                        <line className={`transition-all duration-900 group-hover:stroke-[2px] ${isClicked ? 'stroke-white' : 'stroke-black'}`} y1="6.25" x2="20" y2="6.25" strokeWidth="0.5"/>
                    </svg>
                </div>

                <div 
                    id="text" 
                    className="font-extralight group-hover:font-normal transition-all duration-500 will-change-transform"
                >
                    {isClicked ? 'Back' : 'Menu'}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;