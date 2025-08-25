import {NodeTypesEnum} from "./constants/nodes";
import {ImageNode} from "../components/canvasComponents/imageNode";
import {EmojiNode} from "../components/canvasComponents/emojiNode";
import {TemplateLink} from "../components/canvasComponents/templateLink";


export const nodeTypes = {
    [NodeTypesEnum.imageNode]: ImageNode,
    [NodeTypesEnum.emojiNode]:EmojiNode,
    [NodeTypesEnum.templateNode]:TemplateLink,
    [NodeTypesEnum.galleryNode]:TemplateLink
};