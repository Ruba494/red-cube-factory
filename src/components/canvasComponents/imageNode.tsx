import {motion} from "motion/react";
import { useRef} from "react";
import {INodeData, NodeTypesEnum} from "../../pages/constants/nodes.ts";
import {useCanvasStore} from "../../stores/canvasStore.ts";

interface IImageNodeProps {
    id:string;
    data:INodeData;
    WithClickAction:boolean
}

export const ImageNode = ({ id,data,WithClickAction=true }:IImageNodeProps) => {
    const {setSelectedNode} = useCanvasStore();
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
                className={`image-container ${data?.isProfile?"is-profile-image":""}`}>
                <img src={data?.imageSrc} alt="Image"  style={{width: '200px', height: 'auto' }} />
            </motion.div>
    );
}