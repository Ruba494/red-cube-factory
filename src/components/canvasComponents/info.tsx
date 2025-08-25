import { motion } from "motion/react"
import {INodeData} from "../../pages/constants/nodes";
import {Profile} from "./profile";
import { GoToInstagram} from "./goToInstagram";

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
        <GoToInstagram data={data}/>
        }
    </motion.div>
}