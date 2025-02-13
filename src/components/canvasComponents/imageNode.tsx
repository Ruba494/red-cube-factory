import {motion} from "motion/react";

export const ImageNode = ({ data }) => {
    return (
        <div className="text-updater-node">
            <motion.div
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className={'image'}><img src={data?.imageSrc} alt="Image"  style={{ width: '200px', height: 'auto' }} /></motion.div>
        </div>
    );
}