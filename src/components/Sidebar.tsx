import { useRef, useState, useEffect } from "react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import gsap from "gsap";
import Menu from "./Menu";

// TODO: Fix the animation jitter on the side-pane when returning back

gsap.registerPlugin(ScrambleTextPlugin);

function Sidebar() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        const sidebar = sidebarRef.current;
        const overlay = overlayRef.current;
        if (!overlay || !sidebar)   return;

        if (isClicked) {
            const tl = gsap.timeline();

            // First ensure the overlay container wrapper is visible
            gsap.set(overlay, { display: "block", pointerEvents: "auto" });

            // Expand the side pane to full width cleanly
            tl.to(sidebar, {
                width: "100vw",
                duration: 0.8,
                ease: "power4.out"
            })
            // Slide and fade the menu columns into view seamlessly
            .fromTo(overlay.querySelectorAll(".grid > div"), 
                { opacity: 0, x: 50 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 1.3, 
                    stagger: 0.08, 
                    ease: "power3.out" 
                }, 
                "-=0.5" // Start displaying text while the panel is still moving
            );

        } else {
            // Smoothly reverse everything when "Back" is clicked without any jitter
            const tl = gsap.timeline();
            
            // Fade the inner grid items back out first matching your forward style
            tl.to(overlay.querySelectorAll(".grid > div"), {
                opacity: 0,
                x: -30,
                duration: 0.4,
                stagger: 0.04,
                ease: "power3.in"
            })
            .to(sidebar, {
                width: "3.125rem",
                duration: 0.5,
                ease: "power4.inOut"
            }, "-=0.2")
            // Crucial: Only hide the interaction block AFTER the full animation sequence completes
            .set(overlay, { display: "none", pointerEvents: "none" });
        }
    }, [isClicked]);

    return (
        <div className="flex fixed z-200">
            {/* SIDE-PANE PANEL: Handled entirely by GSAP layout engine now */}
            <div 
                ref={sidebarRef}
                className={`toHome flexbox h-[100vh] text-white bg-black \
                font-dancing font-bold text-[1.75rem] pl-[1rem] pt-[1.25rem] w-[3.125rem] select-none\
                ${!isClicked ? 'w-[3.125rem] hover:w-[4.5rem] hover:pl-[1.7rem] transition-all duration-500' : ''}`}
            >
                Z
                {/* FIXED: Removed conditional Tailwind opacity utility styles so they don't block the timeline */}
                <div 
                    ref={overlayRef} 
                    className="z-250 w-full h-full"
                    style={{ display: "none", pointerEvents: "none" }} // Clean structural baseline setup
                >
                    <Menu />
                </div>
            </div>

            {/* INTERACTIVE MENU TOGGLE BUTTON */}
            <div 
                onClick={_handleClick} 
                onMouseEnter={_handleHover}
                onMouseLeave={_handleHover}
                className={`menu group flex absolute max-h-fit ml-[5.625rem] mt-[1.25rem] z-10 \
                font-hanken text-[1.25rem] pt-[0.25rem] transition-all duration-900 \
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