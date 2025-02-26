import {motion} from "motion/react";
import {CanvasContext} from "./canvasContext.tsx";
import {useContext, useRef} from "react";
import {NodeTypesEnum} from "../../pages/constants/nodes.ts";



export const ImageNode = ({ id,data,WithClickAction=true }) => {
    const {setSelectedNode,} = useContext(CanvasContext);
    const ref = useRef(null);

    return (<motion.div
                id={id}
                ref={ref}
                {...WithClickAction?{
                    initial: {
                    opacity:0 },
                    whileHover:{
                    scale: 1.3,
                    transition: { duration: 1 },
                    },
                    animate:{
                    opacity:1,
                    transition: {
                    delay: 1 },
                }
                }:{}}
                onClick={(e)=>{//
                    e.preventDefault()
                    if(WithClickAction) {
                        setSelectedNode({data: {...data,type:NodeTypesEnum.imageNode},ref:ref})
                    }
                }}
                className={'image-container'}>
                <img src={data?.imageSrc} alt="Image"  style={{width: '200px', height: 'auto' }} />
            </motion.div>
    );
}