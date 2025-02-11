import { useCallback } from 'react';
import {motion} from "motion/react";

export const ImageNode = ({ data, isConnectable }) => {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);
    const {imageSrc}=data
    return (
        <div className="text-updater-node">

            <motion.div
                // whileHover={{
                //     scale: 1.1,
                //     transition: { duration: 0.5 },
                // }}
                // whileTap={{ scale: 0.9 }}
                className={'image'}><img src={imageSrc} alt="Image"  style={{ width: '200px', height: 'auto' }} /></motion.div>
        </div>
    );
}