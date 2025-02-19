import {motion} from "motion/react";
import {CanvasContext} from "./canvasContext.tsx";
import {useContext, useEffect, useRef} from "react";
import {getPosition} from "../../utils/getPosition.ts";

import gsap from "gsap";



export const ImageNode = ({ id,data,WithClickAction=true }) => {
    gsap.registerPlugin(gsap)
    const {setSelectedNode,} = useContext(CanvasContext);
    const ref = useRef(null);

    let modalOverlay = document.querySelector(".modalOverlay");
    let modal = document.querySelector(".modal");

    useEffect(() => {
        if(WithClickAction){
            gsap.set([modalOverlay, modal], { autoAlpha: 0 });
        }
    }, []);


    const handelImageClick = () => {
        setSelectedNode(data)
        let newRect = getPosition(modal, ref.current);
        gsap.set(modal, {
            x: newRect.left,
            y: newRect.top,
            width: newRect.width,
            height: newRect.height
        });

        let tl = gsap.timeline();

        tl.to(modalOverlay, 0, { autoAlpha: 1 });
        tl.to(modal, 0.5, {
            x: 0,
            y: 0,
            ease: "power2.inOut",
            width: '100vw',
            height: '100vh',
            autoAlpha: 1
        });
    }
    return (<motion.div
                id={id}
                ref={ref}
                initial={{
                    opacity:0
                }}
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 1 },
                    transition: {
                        duration: 1 },

                }}
                animate={{
                    opacity:1,
                    transition: {
                        delay: 1 },
                }
                }
                onClick={(e)=>{//
                    e.preventDefault()
                    if(WithClickAction) {
                        handelImageClick()
                    }
                }}
                className={'image-container'}>
                <img src={data?.imageSrc} alt="Image"  style={{width: '200px', height: 'auto' }} />
            </motion.div>
    );
}