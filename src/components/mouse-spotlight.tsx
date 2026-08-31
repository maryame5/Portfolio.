import { useEffect } from "react";

export function MouseSpotlight() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const root = document.documentElement;
            root.style.setProperty("--mouse-x", `${e.clientX}px`);
            root.style.setProperty("--mouse-y", `${e.clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return null;
}
