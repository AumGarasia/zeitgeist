import { useEffect, useRef } from "react";
import gsap from "gsap";

function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null); // 1. Ref to handle the internal text layer

    useEffect(() => {
        const cursor = cursorRef.current;
        const textEl = textRef.current;
        if (!cursor || !textEl) return;

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

        const onMouseMove = (e: MouseEvent) => {
            const halfWidth = cursor.offsetWidth / 2;
            const halfHeight = cursor.offsetHeight / 2;
            xTo(e.clientX - halfWidth);
            yTo(e.clientY - halfHeight);

            const target = e.target as HTMLElement;
            const interactiveEl = target.closest("[data-cursor]");

            if (interactiveEl) {
                const cursorType = interactiveEl.getAttribute("data-cursor");

                if (cursorType === "scroll") {
                        // Morph into a larger red ring or circle when over ScrollHint
                        gsap.to(cursor, {
                            width: 80,
                            height: 80,
                            backgroundColor: "#D73340",
                            mixBlendMode: "normal",
                            duration: 0.3,
                            overwrite: "auto"
                        });

                        textEl.innerText = "Scroll";
                        gsap.to(textEl, {
                            opacity: 1,
                            scale: 1,
                            textAlign: "center", // Forces the text layout boundary to align to center
                            display: "block",    // Ensures it acts as a layout block inside the flex parent
                            duration: 0.2,
                            overwrite: "auto"
                        });
                    } else if (cursorType === "pointer") {
                    gsap.to(cursor, {
                        width: 40,
                        height: 40,
                        backgroundColor: "#ffffff",
                        duration: 0.3,
                        overwrite: "auto"
                    });

                    // Clear text if transitioning from scroll to a regular pointer link
                    gsap.to(textEl, { opacity: 0, scale: 0, duration: 0.15, onComplete: () => { textEl.innerText = ""; } });
                }
            } else {
                // 3. Reset to default small dot state and clear out text
                gsap.to(cursor, {
                    width: 20,
                    height: 20,
                    backgroundColor: "#D73340",
                    mixBlendMode: "difference",
                    duration: 0.3,
                    overwrite: "auto"
                });

                gsap.to(textEl, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.15,
                    onComplete: () => { textEl.innerText = ""; } // Clear string once hidden to keep layout clean
                });
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        /* Added flex centering utilities to keep the injected text layout locked into the absolute core of the cursor */
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-5 h-5 bg-[#D73340] rounded-full \
            pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        >
            <div 
                ref={textRef} 
                className="text-white font-hanken font-extralight text-[14px] opacity-0 scale-0 transition-colors pointer-events-none"
            />
        </div>
    );
}

export default Cursor;