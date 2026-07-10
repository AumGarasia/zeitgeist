import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function ScrollHint() {
    const [isVisible, setIsVisible] = useState(false);
    const lineRef = useRef<SVGLineElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const delay = 1500;
        let tl: gsap.core.Timeline | null = null;

        // Trigger visibility and Text Split after delay
        const timer = setTimeout(() => {
            setIsVisible(true);

            if (textRef.current) {
                // Splitting text and adding a timeline for looping
                const split = new SplitText(textRef.current, { type: "chars" });

                tl = gsap.timeline({
                    repeat: -1, 
                    repeatDelay: 1.8,
                })

                tl.from(split.chars, {
                    opacity: 0,
                    y: 10,
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power2.out",
                })

                .to(split.chars, {
                    opacity: 0,
                    y: -5,
                    duration: 0.4,
                    stagger: 0.04,
                    ease: "power2.in"
                }, "+=2"); // Wait 2 seconds while the fully typed word stays visible
            }
        }, delay);

        // Line Pulsing animation
        if (lineRef.current) {
            gsap.fromTo(lineRef.current, 
                { strokeDashoffset: 64 }, 
                { 
                    strokeDashoffset: 0, 
                    duration: 1.5, 
                    repeat: -1, 
                    yoyo: true, 
                    ease: "power2.inOut" }
            );
        }

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            data-cursor="scroll"
            className={`absolute bottom-[50px] right-[50px] z-100\
            text-white font-hanken font-thin text-[32px] text-[1.25rem]
            ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            style={{ transform: 'rotate(90deg)', userSelect: 'none' }}
        >
            <svg
                className="scrollHintLine absolute top-[-8px] right-[140%] translate-x-[-100%]"
                width="3" height="64" viewBox="0 0 3 64" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)">
                <line 
                    ref={lineRef}
                    x1="1.5" 
                    x2="1.5" 
                    y2="64" 
                    stroke="#D73340" 
                    strokeOpacity="0.25" 
                    strokeWidth="3"
                    strokeDasharray="64"
                    strokeDashoffset="64"
                    />
            </svg>
            
            <div ref={textRef} className="overflow-hidden inline-block">
                Scroll
            </div>
        </div>
    );
}

export default ScrollHint;