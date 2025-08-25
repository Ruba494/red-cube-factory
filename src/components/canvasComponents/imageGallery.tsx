import {useRef,} from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {INodeData} from "../../pages/constants/nodes";
import {getAsset} from "../../utils/getAsset.ts";
import {useCanvasStore} from "../../stores/canvasStore.ts";

interface IPreviewGallery extends INodeData{
    imagesSource:any
    isImagesLoaded:boolean
}
export const PreviewGallery = ({previewAccessor,imagesSource,isImagesLoaded}:IPreviewGallery) => {
    const bucket = useCanvasStore(s => s.galleryPreloadedImages[previewAccessor]) || {};

    const imagesList = (imagesSource[previewAccessor] || []).map((rel: string) => {
        // normalize URL to match keys in preloadedImages
        const url = new URL(getAsset(rel), window.location.origin).toString();
        const preloaded = bucket[url];
        return {
            original: preloaded?.src || url,
            thumbnail: preloaded?.src || url,
        };
    });

    return  <div className={'react-image-gallery'}>

        {!isImagesLoaded ?
            <div className={'loading-gallery image-gallery-image'}>
                <div className={'emoji'}>🫣</div>
                waiting for the photos...
            </div>:<>
            {
                imagesList.length === 0 ?
                    <div className={'empty-gallery image-gallery-image'}>
                        <div className={'emoji'}>😔</div>
                        sorry... there is no preview

                    </div> :
                    <ImageGallery
                        renderRightNav={
                            (onClick, disabled) => (
                                <NavButton onClick={onClick} disabled={disabled} position={'right'}/>
                            )}
                        renderLeftNav={
                            (onClick, disabled) => (
                                <NavButton onClick={onClick} disabled={disabled} position={'left'}/>
                            )}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showThumbnails={false}
                        items={imagesList}/>
            }</>
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