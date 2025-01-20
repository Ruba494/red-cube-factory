import { motion } from "motion/react"

export interface IImageInfo {
    type?:"image"|'component';
    imageSrc?:string;
    component?:any;

}

interface IImageCard {
    imageInfo:IImageInfo
}
export const ImageCard = (props:IImageCard) => {
    const {imageInfo}=props
    return <motion.div
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className={'image'}>{
        imageInfo.type==="image"?<>
            <img src={imageInfo.imageSrc} alt="Image"  style={{ width: '100%', height: 'auto' }} />
            </>:
            <>{imageInfo.component}</>
    }</motion.div>
}