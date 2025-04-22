import {useMemo, useRef,} from "react";
import {PREVIEW_IMAGES} from "../../pages/constants/images.ts";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {INodeData} from "../../pages/constants/nodes.ts";

interface IPreviewGallery extends INodeData{

}
export const PreviewGallery = ({previewAccessor}:IPreviewGallery) => {

    const imagesList= useMemo(() => {
        // @ts-ignore
        let images:any= PREVIEW_IMAGES[previewAccessor]
        if(images){
           return images?.map((img:string) => {
                return {
                    original: img,
                    thumbnail: img,
                }
            })
        }else {
           return []
        }
    }, [previewAccessor]);

    return  <div className={'react-image-gallery'}>
        {imagesList.length===0?
            <div className={'empty-gallery image-gallery-image'}>
                <div className={'emoji'}>😔</div>
                sorry... there is no preview

            </div>:
            <ImageGallery
                renderRightNav={
                (onClick, disabled) => (
                    <NavButton onClick={onClick} disabled={disabled} position={'right'} />
                )}
                renderLeftNav={
                (onClick, disabled) => (
                    <NavButton onClick={onClick} disabled={disabled} position={'left'} />
                )}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                items={imagesList}/>
        }
    </div>

}


const NavButton = ({onClick,disabled,position}:{
    onClick:any
    disabled:boolean
    position:'right' |'left'
}) => {
    const ref = useRef(null);
    return <div style={{
        position:'absolute',
        zIndex:9999
    }} className={`${position==='right'?'image-gallery-right-nav':'image-gallery-left-nav'}`}>
        {!disabled? <div ref={ref}
                            className={`${position}-nav-btn`}
                         style={{
                             textOrientation:'mixed',
                             writingMode: 'vertical-rl',
                             color:'var(--color-ruba-red)'
                         }}
                            onClick={onClick}>
            {position}
        </div>:<></>}
    </div>

}