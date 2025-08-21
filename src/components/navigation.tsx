import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import {useLocation, useNavigate} from "react-router";
import gsap from "gsap";
import {Fragment, memo, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {SpinningCube} from "./spinningCube.tsx";
import {Tags} from "./Tags.tsx";
import {Colors} from "../pages/constants/colors.ts";
import {ClickableTags} from "./clickableTags.tsx";

export const Navigation = memo(() => {
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
        if (intervalRef.current) return;
        intervalRef.current = window.setInterval(() => {
            setTrigger(prev => !prev); // use functional update
        }, 500);
    };

    const handleMouseLeave = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    const pages=[
        {tag:'template',color:Colors.RED},
        {tag:'about me',color:Colors.RED},
    ]
    const years=[
        {tag:'2022',color:Colors.RED},
        {tag:'2023',color:Colors.RED},
        {tag:'2024',color:Colors.RED},
        {tag:'2025',color:Colors.RED},
    ]

    // ✅ Tag selection state
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Click handler for tags
    const handleTagClick = (_e: any, tag: { tag: string }) => {
        setSelectedTag(tag.tag===selectedTag?null:tag.tag); // set clicked tag as selected
    };

    // Selection checker
    const isTagSelected = (tag: { tag: string }) => selectedTag === tag.tag;

    return  <nav className={'navigation'}>
        <ul className={'navigation__list'}>
            <div className={`navigation__list-item navigation__list-logo`}  ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.HOME])}>
                <SpinningCube counter={trigger}/>
            </div>
            <div className={`navigation__list-item`}>
                <ClickableTags tags={years} handleTagClick={handleTagClick} isTagSelected={isTagSelected}/>
                <ClickableTags tags={pages} handleTagClick={handleTagClick} isTagSelected={isTagSelected}/>
            </div>

        </ul>
    </nav>
})
