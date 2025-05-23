import gsap from "gsap";
import {useContext, useEffect, useRef, useState} from "react";
import {getPosition} from "../../utils/getPosition.ts";
import {CloseButtonLottie} from "../lottie/closeButtonLottie.tsx";
import {motion} from "motion/react"
import {ISelectedNode, TemplateContext} from "./templateContext.tsx";
import {PreviewGallery} from "../canvasComponents/imageGallery.tsx";
import {useNavigate, useParams} from "react-router";
import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../../routes";
import {TEMPLATE_PREVIEW_IMAGES} from "../../pages/constants/images.ts";
import {TemplateNode} from "../../pages/Templates.tsx";
import {TEMPLATES_LINKS} from "../../pages/constants/links.ts";

interface IModalContentProps {
    selectedNode:ISelectedNode | null
    isOpened:boolean
}
export const Modal = () => {
    gsap.registerPlugin(gsap)
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const { id } = useParams();
    const { selectedNode, setSelectedNode } = useContext(TemplateContext);
    const [isOpened, setIsOpened] = useState(false);

    const navigate=useNavigate()
    useEffect(() => {
        if (id) {
            const el = document.querySelector(`[data-node-id="${id}"]`);
            if (el) {
                // You might want to improve this with actual data resolution logic
                const dummyData = TEMPLATES_LINKS.find(node => node.previewAccessor === id) ;
                setSelectedNode({ data: dummyData, ref: { current: el } });
            }
        }
    }, [id]);

    // ✨ Animate modal on selectedNode change
    useEffect(() => {
        if (selectedNode) {
            gsap.set([overlayRef.current, modalRef.current], { autoAlpha: 1 });
            handelModalExpand(selectedNode.ref);
        } else {
            gsap.set([overlayRef.current, modalRef.current], { autoAlpha: 0 });
            setIsOpened(false);
        }
    }, [selectedNode]);


    const handelModalExpand = (ref:any) => {
        setIsOpened(false)
        let newRect = getPosition(modalRef.current, ref.current);
        gsap.set(modalRef.current, {
            x: newRect.left,
            y: newRect.top,
            width: newRect.width,
            height: newRect.height
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

    const handleClose = (e) => {
        e.preventDefault()
        setSelectedNode(null)
        gsap.set([overlayRef.current, modalRef.current], { autoAlpha: 0 });
        navigate(PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.TEMPLATES].replace('/:id?',''));
    };

    return <>
        <div className="modalOverlay" ref={overlayRef}></div>
        <div className="modal" ref={modalRef}>
            <motion.div
                className={'content-wrapper'}
            >
                {isOpened&&
                    <div className={'close-btn'} onClick={(e) => handleClose(e)}><CloseButtonLottie/></div>}
                <div className={`content ${selectedNode?.data?.type} ${isOpened?'is-opened':''}`}>
                    <ModalContent selectedNode={selectedNode} isOpened={isOpened}/>
                </div>
            </motion.div>
        </div>
    </>
}


const ModalContent = ({selectedNode,isOpened}:IModalContentProps) => {
   return<div className={'template-node'}>
       {isOpened&& <>
           <PreviewGallery previewAccessor={selectedNode?.data.previewAccessor} imagesSource={TEMPLATE_PREVIEW_IMAGES}  />
       </>}
       <TemplateNode data={selectedNode?.data} withOpenModal={false}/>
   </div>

}