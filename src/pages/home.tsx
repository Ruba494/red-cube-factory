import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {IImageInfo, ImageCard} from "../components/imageCard.tsx";
import {IMAGES} from "./constants.ts";
import {Title} from "../components/GalleryComponents/title.tsx";
// @ts-ignore
import * as _ from "lodash";


export const Home = () => {
    gsap.registerPlugin(useGSAP);

    const containerRef = useRef(null);

    useGSAP(
        () => {
            const container=containerRef.current;
            const handelMouseMove = (e:MouseEvent) => {
                // @ts-ignore
                let eX = container.offsetWidth
                // @ts-ignore
                let eY = container.offsetHeight
                let cX = e.clientX
                let cY = e.clientY
                let wX = window.innerWidth
                let wY = window.innerHeight
                let difX = eX - wX
                let difY = eY - wY

                let tX = gsap.utils.mapRange(0, window.innerWidth, 0, -difX);
                let tY = gsap.utils.mapRange(0, window.innerHeight, 0, -difY);

                gsap.to(container, .5, {
                    x: tX(cX),
                    y: tY(cY)
                })
            };
            window.addEventListener("mousemove", (e)=>handelMouseMove(e));
            },
        { scope: containerRef }
    ); // <-- scope is for selector text (optional)

    const addObjectToCenter = (arr:any[], newObj:any) => {
        const middleIndex = Math.floor(arr.length / 2); // Calculate middle index
        arr.splice(middleIndex, 0, newObj); // Insert the new object at the middle index
        return arr;
    };

    const cards: IImageInfo[]=addObjectToCenter(_.shuffle(IMAGES),{
        id: 'title',
        type: 'component',
        component: Title
    })


    return <div className={'home'}  >
        <div className={'container'}   ref={containerRef}>
            {[1,2,3,4,5].map(item=>{
                return  <div className={`corner c-${item}`}>box-{item}</div>
            })}
            <div className={'gallery'}>
                {cards.map((item,index)=>{
                    return  <ImageCard imageInfo={item} index={index}/>
                })}
            </div>
        </div>
    </div>
}