import {TemplateLink} from "./templateLink.tsx";
import { PreviewGallery} from "./imageGallery.tsx";
import {Info} from "./info.tsx";
import {INodeData} from "../../pages/constants/nodes.ts";

interface ITemplateLinkModalContent {
    data:INodeData
    isOpened:boolean
}
export const TemplateLinkModalContent = ({data,isOpened}:ITemplateLinkModalContent) => {

    return <>
        {isOpened&& <>
            <PreviewGallery previewAccessor={data.previewAccessor}  />
            <Info data={data}/>
        </>}
        <TemplateLink data={data} WithClickAction={false}/>
    </>
}