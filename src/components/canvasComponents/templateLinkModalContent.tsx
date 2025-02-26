import {TemplateLink} from "./templateLink.tsx";
import { PreviewGallery} from "./imageGallery.tsx";
import {Info} from "./info.tsx";

export const TemplateLinkModalContent = ({data,isOpened}) => {

    return <>
        {isOpened&& <>
            <PreviewGallery previewAccessor={data.previewAccessor}  />
            <Info data={data}/>
        </>}
        <TemplateLink data={data} WithClickAction={false}/>
    </>
}