import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import {useLocation, useNavigate} from "react-router";
import gsap from "gsap";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {SpinningCube} from "./spinningCube.tsx";

export const Navigation = () => {
    const navigate=useNavigate()
    const onNavigation = (e:any,path:any) => {
        e.preventDefault()
        navigate(path)
    }
    const containerRef = useRef(null);

    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            const textElements = gsap.utils.toArray(".navigation__list-item");

            textElements.forEach((text) => {
                // @ts-ignore
                const t = gsap.to(text, {
                    backgroundSize: "100%",
                })
                    .reverse();
                // @ts-ignore
                text.addEventListener("mouseenter", () => t.reversed(!t.reversed()));
                // @ts-ignore
                text.addEventListener("mouseleave", () => t.reversed(!t.reversed()));
            });
        },
        { scope: containerRef }
    ); // <-- scope is for selector text (optional)

    const [trigger, setTrigger] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const handleMouseEnter = () => {
        if (intervalRef.current) return; // already spinning
        intervalRef.current = setInterval(()=>{
            setTrigger(!trigger);
        },500)

    };

    const handleMouseLeave = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };


    return  <nav className={'navigation'}>
        <ul className={'navigation__list'} ref={containerRef}>
            <div className={`navigation__list-item navigation__list-logo`}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.HOME])}>
                <SpinningCube counter={trigger}/>
            </div>
        </ul>
    </nav>
}