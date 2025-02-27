import {motion} from "motion/react";
import {INodeData} from "../../pages/constants/nodes.ts";

interface IEmojiNodeProps {
    data:INodeData
}
export const EmojiNode = ({ data }:IEmojiNodeProps) => {
    return (
        <div className="text-updater-node">
            <motion.div
                whileTap={{ scale: 0.9 }}
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    transition: {
                        delay: 1 },
                }
                }
                style={{ width: '200px', height: 'auto', fontSize:'150px'}}
            >
                {data?.emoji}
            </motion.div>
        </div>
    );
}