import { motion } from "motion/react"
import {INodeData} from "../../pages/constants/nodes.ts";
import {Profile} from "./profile.tsx";
import { GoToInstagram} from "./goToInstagram.tsx";

const variants = {
    hidden: {
        opacity:0,
    },
    visible: {
        opacity:1,
        transition: {
            delay: 0.2,
        }
    }
}
export const Info = ({data}: { data:INodeData }) => {
    return <motion.div
        className={'info'}
        variants={variants}
        initial={'hidden'}
        animate={'visible'}
    >
        {data.isProfile?<Profile/>:
        <GoToInstagram/>
        }
    </motion.div>
}