import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollHint from "../components/ScrollHint";

function Hero() {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const img = imgRef.current;
        if (!img)   return;

        const animation = gsap.to(img, {
            y: "-=15",
            rotate: 1.5,
            duration: 3.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        return () => {
            animation.kill();
        }
    }, []);

    return (
        <div className=" flex h-[100vh] w-[100vw] select-none">

            {/* LEFT PANE: TITLE AND SUBTITLE */}
            <div className="relative h-[100vh] w-[52.6vw]">

                <div className="fixed w-[42.7vw] h-[34.26vh] bottom-0 left-0  ml-[6.77vw] mb-[9.26vh]">
                    <div className="leading-none">
                        <span className="font-bricolage font-extrabold text-[12.375rem]">zeit</span>
                        <span className="font-cormorant font-bold italic text-[17rem] ml-[-0.625vw] tracking-[-4%] text-red">geist</span>
                    </div>

                    <p className="font-hanken font-extralight text-[1rem] mt-[3vh]">
                        How a machine built from oscillators and patch <br/>
                        cables rewired the nervous system of modern music.
                    </p>
                </div>

            </div>


            {/* RIGHT PANE: IMAGE AND SCROLL HINT */}
            <div className="grid place-items-center h-[100vh] w-[47.4vw] bg-black overflow-hidden">
                <div className="w-[99vh] h-[99vh] ml-[-9.375vw] bg-[radial-gradient(circle,_#D73340_0%,_#711B22_30%,_#161616_70%)] rounded-full"/>
                <img
                    ref={imgRef} 
                    className="absolute h-[82.13vh] w-[82.13vh] ml-[-120px] z-20 
                    drop-shadow-[-2px_15px_5px_rgba(0,0,0,0.25)] will-change-transform" 
                    src="images/landingImage.png"
                />
                <ScrollHint />
            </div>
        </div>
    )
}
export default Hero;