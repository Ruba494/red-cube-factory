import { motion } from "motion/react"
export const ImageCard = ({imageInfo}:any) => {
    console.log(imageInfo)
    return <motion.div
        whileHover={{
            scale: 1.1,
            transition: { duration: 1.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className={'image'}>{imageInfo}</motion.div>
}