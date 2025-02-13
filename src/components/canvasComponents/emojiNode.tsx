import {motion} from "motion/react";

export const EmojiNode = ({ data }) => {
    return (
        <div className="text-updater-node">
            <motion.div
                whileTap={{ scale: 0.9 }}
                style={{ width: '200px', height: 'auto', fontSize:'150px'}}
            >
                {data?.emoji}
            </motion.div>
        </div>
    );
}