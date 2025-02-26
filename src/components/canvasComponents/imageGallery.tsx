import { useMemo, } from "react";
import {PREVIEW_IMAGES} from "../../pages/constants/images.ts";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const PreviewGallery = ({previewAccessor}) => {

    const imagesList= useMemo(() => {
        let images=PREVIEW_IMAGES[previewAccessor]
        if(images){
           return images?.map(img => {
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
            <div className={'image-gallery-image'}>empty gallery</div>:
            <ImageGallery showThumbnails={false} items={imagesList}/>
        }
    </div>

}