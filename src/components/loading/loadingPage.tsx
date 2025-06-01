import { useEffect, useState } from "react";
import {SpinningCube} from "../spinningCube.tsx";

export const LoadingPage = ({ setIsLoaded }) => {
    const [counter, setCounter] = useState(1);
    // const [isDoneCounting, setIsDoneCounting] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => {
                if (prev >= 99) {
                    clearInterval(interval);
                    // setIsFinished(true);
                    setIsLoaded(true);
                    // return prev;
                }
                return prev + 1;
            });
        }, 400);

        return () => clearInterval(interval);
    }, [setIsLoaded]);


    return (
        <div className={`loading-page`}>
            <SpinningCube counter={counter}/>
            {/*<div className="scene">*/}
            {/*    <div className="cube-wrapper">*/}
            {/*        <a href="#">*/}
            {/*            <div*/}
            {/*                className={`cube ${isDoneCounting ? "stopped" : ""}`}*/}
            {/*                ref={cubeRef}*/}
            {/*            >*/}
            {/*                <div className="cube-faces">*/}
            {/*                    <div className="cube-face shadow text">{counter}</div>*/}
            {/*                    <div className="cube-face bottom text">{counter}</div>*/}
            {/*                    <div className="cube-face top text">{counter}</div>*/}
            {/*                    <div className="cube-face left text">{counter}</div>*/}
            {/*                    <div className="cube-face right text">{counter}</div>*/}
            {/*                    <div className="cube-face front text">{counter}</div>*/}
            {/*                    <div className="cube-face back text">{counter}</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};
