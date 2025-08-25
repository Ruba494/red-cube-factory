import { useEffect, useState } from "react";
import {SpinningCube} from "../spinningCube";

export const LoadingPage = ({ setIsLoaded }) => {
    const [counter, setCounter] = useState(1);


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
        </div>
    );
};
