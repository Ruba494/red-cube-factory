import { motion } from "motion/react"
const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const AboutMe = () => {
    return (<div className="about-me">
                {/* Main Card */}
                <div className="card">
                    <div className="card-image" />
                    <div className="card-text" >

                    </div>
                    {/* Floating Emojis */}
                    <motion.span className="emoji emoji-top-left" variants={floatVariants} animate="animate">
                        🥳
                    </motion.span>
                    <motion.span className="emoji emoji-bottom-left" variants={floatVariants} animate="animate">
                        💫
                    </motion.span>
                    <motion.span className="emoji emoji-right" variants={floatVariants} animate="animate">
                        👊
                    </motion.span>
                </div>


            </div>
    );
}