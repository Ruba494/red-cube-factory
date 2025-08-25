import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import {useNavigate, useParams} from "react-router";
import gsap from "gsap";
import {memo, useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {SpinningCube} from "./spinningCube";
import {Colors} from "../pages/constants/colors";
import {ClickableTags} from "./clickableTags";
import { NODES,  TEMPLATE_LINKS_NODES} from "../pages/constants/nodes";
import {useCanvasStore} from "../stores/canvasStore";
import {ITag, NAVIGATION_PAGES, NAVIGATION_YEARS, NavigationsLabelEnum} from "../pages/constants/links.ts";

export const Navigation = memo(() => {
    const {setCanvasNodes, selectedTag, setSelectedTag}= useCanvasStore()

    const { tag: urlTag } = useParams<{ tag?: string }>();
    // --- Track if we've already used the URL once ---
    const [urlConsumed, setUrlConsumed] = useState(false);

    useEffect(() => {
        // Only apply URL filter on first mount
        if (!urlConsumed) {
            if (urlTag) {
                setSelectedTag(urlTag);
                updateNodes(urlTag, urlTag);
            } else {
                setSelectedTag(null);
                setCanvasNodes(NODES);
            }
            setUrlConsumed(true); // mark as consumed
        }
    }, [urlTag, urlConsumed]);


    const navigate=useNavigate()
    const navigateToHome = (e:any) => {
        e.preventDefault()
        setSelectedTag(null);
        navigate("/"); // reset URL
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



// Click handler for tags
    const handleTagClick = (_e: any, tag: { tag: string }) => {
        // First click after URL init → clear URL and switch to local mode
        if (urlTag) {
            navigate("/"); // reset URL
        }
        const newTag = tag.tag === selectedTag ? null : tag.tag;
        updateNodes(newTag,tag.tag)
        setSelectedTag(newTag); // set clicked tag as selected
    };

    // Selection checker
    const isTagSelected = (tag: { tag: string }) => selectedTag === tag.tag;

    const updateNodes = (newTag,tag) => {
        if (newTag === null) {
            // Deselecting - restore all nodes
            setCanvasNodes(NODES);
        } else {
            // Selecting a tag - filter nodes
            switch (tag) {
                case NavigationsLabelEnum.TEMPLATES:
                    setCanvasNodes(TEMPLATE_LINKS_NODES);
                    break;
                case NavigationsLabelEnum._2022:
                case NavigationsLabelEnum._2023:
                case NavigationsLabelEnum._2024:
                case NavigationsLabelEnum._2025:
                    setCanvasNodes(NODES.filter(item => item.year === Number(tag)));
                    break;
                case NavigationsLabelEnum.ABOUT_ME:
                    setCanvasNodes(NODES.filter(item => item?.data?.isProfile === true));
                    break;
                default:
                    setCanvasNodes(NODES);
            }
        }
    }

    return  <nav className={'navigation'}>
        <ul className={'navigation__list'}>
            <div className={`navigation__list-item navigation__list-logo`}  ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e)=>navigateToHome(e)}>
                <SpinningCube counter={trigger}/>
            </div>
            <div className={`navigation__list-item`}>
                <ClickableTags tags={NAVIGATION_YEARS} handleTagClick={handleTagClick} isTagSelected={isTagSelected}/>
                <ClickableTags tags={NAVIGATION_PAGES} handleTagClick={handleTagClick} isTagSelected={isTagSelected}/>
            </div>

        </ul>
    </nav>
})
