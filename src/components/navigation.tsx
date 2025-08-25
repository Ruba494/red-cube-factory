import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import { useNavigate} from "react-router";
import gsap from "gsap";
import { memo,  useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {SpinningCube} from "./spinningCube.tsx";
import {Colors} from "../pages/constants/colors.ts";
import {ClickableTags} from "./clickableTags.tsx";
import { NODES,  TEMPLATE_LINKS_NODES} from "../pages/constants/nodes.ts";
import {useCanvasStore} from "../stores/canvasStore.ts";

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

   const {setCanvasNodes, selectedTag, setSelectedTag}= useCanvasStore()

// Click handler for tags
    const handleTagClick = (_e: any, tag: { tag: string }) => {
        const newTag = tag.tag === selectedTag ? null : tag.tag;

        if (newTag === null) {
            // Deselecting - restore all nodes
            setCanvasNodes(NODES);
        } else {
            // Selecting a tag - filter nodes
            switch (tag.tag) {
                case "template":
                    setCanvasNodes(TEMPLATE_LINKS_NODES);
                    break;
                case "2022":
                case "2023":
                case "2024":
                case "2025":
                    setCanvasNodes(NODES.filter(item => item.year === Number(tag.tag)));
                    break;
                default: // "about me" case
                    setCanvasNodes(NODES.filter(item => item?.data?.isProfile === true));
            }
        }
        setSelectedTag(newTag); // set clicked tag as selected
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
