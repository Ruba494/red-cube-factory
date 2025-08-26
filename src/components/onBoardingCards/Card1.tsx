import {SpinningCube} from "../spinningCube.tsx";
import {useEffect, useRef, useState} from "react";

export const Card1 = () => {
    const [trigger, setTrigger] = useState(false);
    const intervalRef = useRef<number | null>(null);


    useEffect(() => {
        handleMouseEnter()
        return () => {
            handleMouseLeave()
        }
    }, []);
    const handleMouseEnter = () => {
        if (intervalRef.current) return;
        intervalRef.current = window.setInterval(() => {
            setTrigger(prev => !prev); // use functional update
        }, 900);
    };

    const handleMouseLeave = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    return <div className={'card card-1'}>

        <div >
                <SpinningCube counter={trigger}/>
            </div>


        <div className={'description'}>
            Ruba’s Red Cube Factory is your space — each block holds a template design, or the year’s pages.
        </div>

    </div>
}