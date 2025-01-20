import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import {useLocation, useNavigate} from "react-router";
import gsap from "gsap";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

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

    const location = useLocation();
    const pathnames = location.pathname.split(/[/]/).filter((x) => x)[0];

    return  <nav className={'navigation'}>
        <ul className={'navigation__list'} ref={containerRef}>
            <li className={`navigation__list-item`} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.HOME])}>logo</li>
            <li className={`navigation__list-item ${pathnames==='about-me'?"is-active":""}`} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.ABOUT_ME])}>about me</li>
            <li className={`navigation__list-item ${pathnames==='designs'?"is-active":""}`} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.DESIGNS])}>designs</li>
        </ul>
    </nav>
}