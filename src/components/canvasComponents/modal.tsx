import gsap from "gsap";
import {useContext, useEffect, useRef, useState} from "react";
import {ImageNode} from "./imageNode.tsx";
import {CanvasContext, ISelectedNode} from "./canvasContext.tsx";
import {getPosition} from "../../utils/getPosition.ts";
import {Info} from "./info.tsx";
import {CloseButtonLottie} from "../lottie/closeButtonLottie.tsx";
import { motion } from "motion/react"
import {TemplateLinkModalContent} from "./templateLinkModalContent.tsx";
import { NodeTypesEnum} from "../../pages/constants/nodes.ts";

interface IModalContentProps {
    selectedNode:ISelectedNode | null
    isOpened:boolean
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
            handelModalExpand(selectedNode?.ref)
        }else {
            gsap.set([overlayRef.current, modalRef.current], {autoAlpha: 0});
        }
    }, [selectedNode]);


    const handelModalExpand = (ref:any) => {
        setIsOpened(false)
        let newRect =ref?.current? getPosition(modalRef.current, ref?.current):{
            left:0,
            top:0,
            width:0,
            height:0
        };
        gsap.set(modalRef.current, {
            x: newRect?.left,
            y: newRect?.top,
            width: newRect?.width,
            height: newRect?.height
        });
        let tl = gsap.timeline();
        tl.to(overlayRef.current, 0.1, { autoAlpha: 1 });
        tl.to(modalRef.current, 1, {
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
                <div className={`content ${selectedNode?.data?.type} ${isOpened?'is-opened':''}`}>
                     <ModalContent selectedNode={selectedNode} isOpened={isOpened}/>
                </div>
            </motion.div>
        </div>
    </>
}


const ModalContent = ({selectedNode,isOpened}:IModalContentProps) => {
    if( selectedNode?.data?.type===NodeTypesEnum.templateNode) {
        return <TemplateLinkModalContent  data={selectedNode?.data} isOpened={isOpened}/>
    } else if( selectedNode?.data?.type===NodeTypesEnum.imageNode) {
        return <>
            <ImageNode data={selectedNode?.data} id={'---'} WithClickAction={false}/>
            {isOpened&&<Info data={selectedNode?.data}/>}
        </>
    }else {
        return null
    }
}