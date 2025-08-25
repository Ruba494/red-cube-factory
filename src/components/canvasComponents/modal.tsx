import gsap from "gsap";
import { useEffect, useRef, useState} from "react";
import {ImageNode} from "./imageNode";
import {getPosition} from "../../utils/getPosition";
import {Info} from "./info";
import {CloseButtonLottie} from "../lottie/closeButtonLottie";
import { motion } from "motion/react"
import {TemplateLinkModalContent} from "./templateLinkModalContent";
import { NodeTypesEnum} from "../../pages/constants/nodes";
import {ISelectedNode, useCanvasStore} from "../../stores/canvasStore";
import {PREVIEW_IMAGES, TEMPLATE_PREVIEW_IMAGES} from "../../pages/constants/images.ts";
import {preloadImages} from "../../utils/preLoadImages.ts";
import {getAsset} from "../../utils/getAsset.ts";

interface IModalContentProps {
    selectedNode:ISelectedNode | null
    isOpened:boolean
}
export const Modal = () => {
    gsap.registerPlugin(gsap)
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const {selectedNode,setSelectedNode} = useCanvasStore();
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


const ModalContent = ({ selectedNode, isOpened }: IModalContentProps) => {
    const galleryPreloadedImages = useCanvasStore(s => s.galleryPreloadedImages);
    const setGalleryPreloadedImages = useCanvasStore(s => s.setGalleryPreloadedImages);

    const [isImagesLoaded, setIsImagesLoaded] = useState(false)
    useEffect(() => {
        if (!selectedNode?.data?.previewAccessor) return;

        const { type, previewAccessor } = selectedNode.data;

        if (type === NodeTypesEnum.galleryNode || type === NodeTypesEnum.templateNode) {
            // if not already preloaded, start preloading in background
            if (!galleryPreloadedImages?.[previewAccessor]) {
                const images =
                    type === NodeTypesEnum.galleryNode
                        ? PREVIEW_IMAGES[previewAccessor]
                        : TEMPLATE_PREVIEW_IMAGES[previewAccessor];

                preloadImages(images?.map(img => getAsset(img)),()=>{

                }, {
                    width: 200,
                }).then(preloaded => {
                    setIsImagesLoaded(true)
                    setGalleryPreloadedImages(previewAccessor,preloaded);
                });
            }
        }
    }, [selectedNode?.data]); // runs when selection changes

    if (!selectedNode?.data) return null;

    const type = selectedNode.data.type;

    if (type === NodeTypesEnum.templateNode || type === NodeTypesEnum.galleryNode) {
        return (
            <TemplateLinkModalContent
                data={selectedNode.data}
                isOpened={isOpened}
                type={type}
                isImagesLoaded={isImagesLoaded}
            />
        );
    }

    if (type === NodeTypesEnum.imageNode) {
        return (
            <>
                <ImageNode data={selectedNode.data} id="---" WithClickAction={false} />
                {isOpened && <Info data={selectedNode.data} />}
            </>
        );
    }

    return null;
};