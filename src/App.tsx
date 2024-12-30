import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {ImageCard} from "./components/imageCard.tsx";

function App() {

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


    return <div className={'app'}  >
        <div className={'container'}   ref={containerRef}>
            {[1,2,3,4,5].map(item=>{
                return  <div className={`corner c-${item}`}>box-{item}</div>
            })}
            <div className={'gallery'}>
                {Array.from(Array(60).keys()).map(item=>{
                    return  <ImageCard imageInfo={item}/>
                })}
            </div>
        </div>
    </div>
}

export default App
