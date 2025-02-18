import {CanvasContext} from "./canvasContext.tsx";
import {useContext, useEffect} from "react";
import gsap from "gsap";
import {Flip} from "gsap/Flip";

export const Dialog = () => {
    const {setIsDialogOpened, isDialogOpened,selectedNode,setSelectedNode} = useContext(CanvasContext);
    gsap.registerPlugin(Flip)

    useEffect(() => {
        if(isDialogOpened){
            expandDialog()
        }
    }, [selectedNode]);

    let bg = document.querySelector(".dialog-container");
    const expandDialog = () => {
        if(selectedNode){
            const state = Flip.getState(selectedNode);
            // Animate from the initial state to the end state
            bg.classList.toggle('big')
            Flip.from(state, {
                duration: 1,
                ease: "expo",
                scale: true,
            },);
        }
       }

    const minimize = () => {
        bg.classList.toggle("big")
        setIsDialogOpened(false)
        setSelectedNode(null)
    }

    return <div className={'dialog-container'}>
        {isDialogOpened&&<div className={'dialog'}  >
            <div className={'close '} onClick={() => minimize()}>close</div>

        </div>}
    </div>

}