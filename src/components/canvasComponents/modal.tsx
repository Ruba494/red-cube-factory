import gsap from "gsap";
import {useContext, useRef} from "react";
import {ImageNode} from "./imageNode.tsx";
import {CanvasContext} from "./canvasContext.tsx";

export const Modal = () => {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const {selectedNode} = useContext(CanvasContext);

    return <>
        <div className="modalOverlay" ref={overlayRef}></div>

        <div className="modal" ref={modalRef}>

            <div className={'content'}>
                <div  onClick={()=>{
                    gsap.set([overlayRef.current, modalRef.current], { autoAlpha: 0 });
                }}>close</div>
                    <ImageNode data={selectedNode} id={'---'} WithClickAction={false}/>
            </div>
        </div>
    </>
}