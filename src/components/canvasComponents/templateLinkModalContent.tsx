import {TemplateLink} from "./templateLink";
import { PreviewGallery} from "./imageGallery";
import {INodeData, NodeTypes, NodeTypesEnum} from "../../pages/constants/nodes";
import {PREVIEW_IMAGES, TEMPLATE_PREVIEW_IMAGES} from "../../pages/constants/images";


interface ITemplateLinkModalContent {
    data:INodeData
    isOpened:boolean
    type:NodeTypes
    isImagesLoaded:boolean
}
export const TemplateLinkModalContent = ({data,isOpened,type,isImagesLoaded}:ITemplateLinkModalContent) => {
    const imagesSource =
        type === NodeTypesEnum.galleryNode ? PREVIEW_IMAGES : TEMPLATE_PREVIEW_IMAGES;
    return <>
        {isOpened&& <>
            <PreviewGallery previewAccessor={data.previewAccessor} imagesSource={imagesSource} isImagesLoaded={isImagesLoaded} />
        </>}
         <TemplateLink data={data} WithClickAction={false} type={type}/>
    </>
}