import {motion} from "motion/react";

export const ImageNode = ({ data }) => {    
    return (<motion.div
                whileHover={{
                    scale: 1.3,
                    transition: {
                        duration: 1 },

                }}
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
                className={'image'}><img src={data?.imageSrc} alt="Image"  style={{width: '200px', height: 'auto' }} />
    </motion.div>
    );
}