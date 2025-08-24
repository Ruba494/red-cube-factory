import {ImageNode} from "../components/canvasComponents/imageNode.tsx";
import {EmojiNode} from "../components/canvasComponents/emojiNode.tsx";
import {TemplateLink} from "../components/canvasComponents/templateLink.tsx";
import {NodeTypesEnum} from "./constants/nodes.ts";


export const nodeTypes = {
    [NodeTypesEnum.imageNode]: ImageNode,
    [NodeTypesEnum.emojiNode]:EmojiNode,
    [NodeTypesEnum.templateNode]:TemplateLink,
    [NodeTypesEnum.galleryNode]:TemplateLink
};