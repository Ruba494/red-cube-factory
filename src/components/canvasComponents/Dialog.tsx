import {CanvasContext} from "./canvasContext.tsx";
import {useContext, useEffect} from "react";
import gsap from "gsap";
import {Flip} from "gsap/Flip";

export const Dialog = () => {
    const {setIsDialogOpened, isDialogOpened,selectedNode} = useContext(CanvasContext);
    gsap.registerPlugin(Flip)


    useEffect(() => {
        if(isDialogOpened){
            expandDialog()
        }
    }, [isDialogOpened]);
    let bg = document.querySelector(".dialog-container");
    const expandDialog = () => {
        if(selectedNode){
            const state = Flip.getState(selectedNode);

            console.log(state)
            // Animate from the initial state to the end state
            Flip.from(state, {
                duration: 1,
                ease: "power2.inOut",
                scale: false,
                spin:true,
                onComplete:()=>{
                    const backgroundState = Flip.getState('.dialog-container');
                    bg.classList.toggle('big')
                    Flip.from(backgroundState, {
                        duration: 1,
                        ease: "power2.inOut",
                        scale: true,
                    },);
                }

            });



        }
       }

    const minimize = () => {
        bg.classList.toggle("big")
    }

    return <div className={'dialog-container'}>

        <div className={'dialog'}>
            <div className={'close '} onClick={()=>minimize()}>close</div>

        </div>
    </div>

}