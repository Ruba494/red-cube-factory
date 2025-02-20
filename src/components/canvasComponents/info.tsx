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
export const Info = ({isOpened,data}) => {
    return isOpened && <motion.div
        variants={variants}
        initial={'hidden'}
        animate={'visible'}
    >
        info here
        kfmelkrmflkermflkemrfer felkrmflkermfl
    </motion.div>
}