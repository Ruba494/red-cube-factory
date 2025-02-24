import { motion } from "motion/react"

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
export const Info = ({data}) => {
    return <motion.div
        className={'info'}
        variants={variants}
        initial={'hidden'}
        animate={'visible'}
    >
    </motion.div>
}