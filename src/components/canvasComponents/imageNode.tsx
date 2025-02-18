import {motion} from "motion/react";
import {CanvasContext} from "./canvasContext.tsx";
import {useContext, useRef} from "react";

export const ImageNode = ({ id,data }) => {
    const {setSelectedNode,setIsDialogOpened, isDialogOpened} = useContext(CanvasContext);
    const ref = useRef(null);

    return (<div >
            <motion.div
                id={id}
                ref={ref}
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    transition: {
                        delay: 1 },
                }
                }
                onClick={()=>{
                    setIsDialogOpened(!isDialogOpened)
                    setSelectedNode(ref.current)
                }}
                className={'image-container'}>
                <img src={data?.imageSrc} alt="Image"  style={{width: '200px', height: 'auto' }} />
            </motion.div>

    </div>

    );
}