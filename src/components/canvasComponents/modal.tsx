import gsap from "gsap";
import {useContext, useEffect, useRef, useState} from "react";
import {ImageNode} from "./imageNode.tsx";
import {CanvasContext} from "./canvasContext.tsx";
import {getPosition} from "../../utils/getPosition.ts";
import {Info} from "./info.tsx";
import {CloseButtonLottie} from "../lottie/closeButtonLottie.tsx";
import { motion } from "motion/react"

const variants = {
    hidden: {
        backgroundColor:'transparent',
    },
    visible: {
        backgroundColor:'white',
        transition: {
            delay: 2,
        }
    }
}
export const Modal = () => {
    gsap.registerPlugin(gsap)
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const {selectedNode,setSelectedNode} = useContext(CanvasContext);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if(selectedNode!==null){
            gsap.set([overlayRef.current, modalRef.current], { autoAlpha: 1 });
            handelModalExpand(selectedNode.ref)
        }else {
            gsap.set([overlayRef.current, modalRef.current], {autoAlpha: 0});
        }
    }, [selectedNode]);


    const handelModalExpand = (ref) => {
        setIsOpened(false)
        let newRect = getPosition(modalRef.current, ref.current);
        gsap.set(modalRef.current, {
            x: newRect.left,
            y: newRect.top,
            width: newRect.width,
            height: newRect.height
        });
        let tl = gsap.timeline();

        tl.to(overlayRef.current, 0, { autoAlpha: 1 });
        tl.to(modalRef.current, 0.9, {
            x: 0,
            y: 0,
            ease: "power2.inOut",
            width: '100vw',
            height: '100vh',
            autoAlpha: 1,
            onComplete:()=>{setIsOpened(true)}
        });
    }

    return <>
        <div className="modalOverlay" ref={overlayRef}></div>
        <div className="modal" ref={modalRef}>
            <motion.div
                className={'content-wrapper'}
            >
                {isOpened&&
                    <div className={'close-btn'} onClick={() => {
                    setSelectedNode(null)
                    gsap.set([overlayRef.current, modalRef.current], {autoAlpha: 0});
                }}><CloseButtonLottie/></div>}
                <div className={'content'}>
                    <ImageNode data={selectedNode?.data} id={'---'} WithClickAction={false}/>
                    <Info isOpened={isOpened} data={selectedNode?.data}/>
                </div>
            </motion.div>
        </div>
    </>
}