import { useEffect, useState } from "react";

export const useAutoFontSize = (containerRef, textRef, max = 82, min = 10) => {
    const [fontSize, setFontSize] = useState(max);

    useEffect(() => {
        const resize = () => {
            const container = containerRef.current;
            const text = textRef.current;
            if (!container || !text) return;

            let size = max;
            text.style.fontSize = size + "px";

            while (
                (text.scrollWidth > container.clientWidth || text.scrollHeight > container.clientHeight) &&
                size > min
                ) {
                size--;
                text.style.fontSize = size + "px";
            }

            setFontSize(size);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [containerRef, textRef]);

    return fontSize;
};

