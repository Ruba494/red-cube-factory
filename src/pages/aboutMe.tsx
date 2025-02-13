import { motion } from "motion/react"
import RubaImage from "../../public/ruba.png"

const floatVariants = {
    animate: {
        y: [0, -1, 0],
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
                    <div className="card-image" >
                        <img src={RubaImage} alt={'profile'} />
                    </div>
                    <div className="card-text" >
                        <div className={""}>
                            <h1>It's me <span>Ruba</span>! 👋🏼 </h1>
                            <p>
                                bla bla bla bla
                                bla bla bla bla
                                bla bla bla bla
                            </p>
                        </div>

                        <div className={""}>
                            <h1>It's me <span>Ruba</span>! 👋🏼 </h1>
                            <p>
                                bla bla bla bla
                                bla bla bla bla
                                bla bla bla bla
                            </p>
                        </div>
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