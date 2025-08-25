import {TemplateLink} from "./templateLink";
import { PreviewGallery} from "./imageGallery";
import {INodeData, NodeTypes, NodeTypesEnum} from "../../pages/constants/nodes";
import {PREVIEW_IMAGES, TEMPLATE_PREVIEW_IMAGES} from "../../pages/constants/images";

interface ITemplateLinkModalContent {
    data:INodeData
    isOpened:boolean
    type:NodeTypes
}
export const TemplateLinkModalContent = ({data,isOpened,type}:ITemplateLinkModalContent) => {

    return <>
        {isOpened&& <>
            <PreviewGallery previewAccessor={data.previewAccessor} imagesSource={type===NodeTypesEnum.galleryNode?PREVIEW_IMAGES:TEMPLATE_PREVIEW_IMAGES}  />
        </>}
         <TemplateLink data={data} WithClickAction={false} type={type}/>
    </>
}