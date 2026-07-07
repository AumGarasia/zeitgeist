import { useEffect, useRef } from "react";
import gsap from "gsap";

function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Follow cursor
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

        // Adding event listener for the cursor
        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX - 10);
            yTo(e.clientY - 10);
        };

        window.addEventListener("mousemove", onMouseMove);
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.body.style.cursor = "auto";
        }
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-5 h-5 bg-red rounded-full \
            pointer-events-none z-[10000] mix-blend-difference"
        />
    );
}

export default Cursor;