import { useEffect, useRef, useState } from "react";

export const LoadingPage = ({ setIsLoaded }) => {
    const [counter, setCounter] = useState(0);
    const [isDoneCounting, setIsDoneCounting] = useState(false);
    const cubeRef = useRef(null);
    const intervalRef = useRef(null);
    useEffect(() => {
        const handleRotation = () => {
            setCounter(prev => {
                const next = prev + 1;

                if (next >= 100) {
                    clearInterval(intervalRef.current);
                    startFadeOut();
                }

                return next;
            });
        };

        // Use a timer for consistent increments per 2s rotation
        intervalRef.current = setInterval(handleRotation, 500); // 1 increment per full rotation (2s)

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const startFadeOut = () => {
        setCounter(100);
        setIsDoneCounting(true);

        setTimeout(() => {
            setIsLoaded(true); // Finish after fade-out
        }, 1000); // match fade-out duration
    };


    return (
        <div className={`loading-page  ${isDoneCounting ? "fade-out" : ""}`}>
            <div className="scene">
                <div className="cube-wrapper">
                    <a href="#">
                        <div
                            className={`cube ${isDoneCounting ? "stopped" : ""}`}
                            ref={cubeRef}
                        >
                            <div className="cube-faces">
                                <div className="cube-face shadow text">{counter}</div>
                                <div className="cube-face bottom text">{counter}</div>
                                <div className="cube-face top text">{counter}</div>
                                <div className="cube-face left text">{counter}</div>
                                <div className="cube-face right text">{counter}</div>
                                <div className="cube-face front text">{counter}</div>
                                <div className="cube-face back text">{counter}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
