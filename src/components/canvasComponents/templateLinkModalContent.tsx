import {TemplateLink} from "./templateLink.tsx";
import { PreviewGallery} from "./imageGallery.tsx";
import {Info} from "./info.tsx";
import {INodeData, NodeTypes, NodeTypesEnum} from "../../pages/constants/nodes.ts";
import {PREVIEW_IMAGES, TEMPLATE_PREVIEW_IMAGES} from "../../pages/constants/images.ts";

interface ITemplateLinkModalContent {
    data:INodeData
    isOpened:boolean
    type:NodeTypes
}
export const TemplateLinkModalContent = ({data,isOpened,type}:ITemplateLinkModalContent) => {

    return <>
        {isOpened&& <>
            <PreviewGallery previewAccessor={data.previewAccessor} imagesSource={type===NodeTypesEnum.galleryNode?TEMPLATE_PREVIEW_IMAGES:PREVIEW_IMAGES}  />
        </>}
        {type===NodeTypesEnum.templateNode
        &&  <TemplateLink data={data} WithClickAction={false} type={type}/>
        }
    </>
}