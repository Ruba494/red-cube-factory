import * as _ from "lodash";
import {ILinkData, LINKS, TEMPLATES_LINKS} from "./links";
import {IImageData, IMAGES} from "./images";


export enum NodeTypesEnum {
    imageNode='image-node',
    templateNode='template-node',
    galleryNode='gallery-node',
    emojiNode='emoji-node',
    onBoarding='on-boarding'
}
export type NodeTypes=
    NodeTypesEnum.imageNode |
    NodeTypesEnum.templateNode |
    NodeTypesEnum.galleryNode |
    NodeTypesEnum.emojiNode |
    NodeTypesEnum.onBoarding ;

export interface INodeData extends IImageData,ILinkData {

}

export interface INodePosition {
    x: number
    y: number
}
export interface INode{
    id: string
    width: number
    height: number
    position:INodePosition
    type:NodeTypes
    hidden:boolean
    data: INodeData
    year?: number
}

export const TEMPLATE_LINKS_NODES:INode[] =TEMPLATES_LINKS.map((link,index)=>{
    return {
        id: `template-link${index}`,
        width: 150,
        height: 20,
        position: {
            x: 0,
            y: 0,
        } as INodePosition,
        type:NodeTypesEnum.templateNode as NodeTypes,
        hidden:false,
        data: {
            ...link
        } as INodeData
    }
})
export const LINKS_NODES:INode[] =LINKS.map((link,index)=>{
    return {
        id: `link${index}`,
        width: 150,
        height: 20,
        position: {
            x: 0,
            y: 0,
        } as INodePosition,
        type:NodeTypesEnum.galleryNode as NodeTypes,
        hidden:false,
        year:link.year,
        data: {
            ...link
        } as INodeData
    }
})
const IMAGES_NODES:INode[] =IMAGES.map((image,index)=>{
    // Extract filename from path
    const filename = image?.imageSrc.split("/").pop() ?? "";

    // Extract first 4 digits as year and convert to number
    const yearMatch = filename.match(/^(\d{4})/);
    const year = yearMatch ? Number(yearMatch[1]) : undefined;

    return {
        id: `image${index}`,
        width: 200,
        height: 200,
        position: {
            x: 0,
            y: 0,
        } as INodePosition,
        type:NodeTypesEnum.imageNode as NodeTypes,
        hidden:false,
        year:year, // extracted year as number
        data: {
            ...image,
        } as INodeData
    }
})
const EMOJI_NODES :INode[] =['🥳','👊🏼','🪄','😶‍🌫️','🐮'].map((emoji,index)=>{
    return {
        id: `emoji${index}`,
        width: 200,
        height: 200,
        position: {
            x: 0,
            y: 0,
        } as INodePosition,
        type: NodeTypesEnum.emojiNode as NodeTypes,
        hidden:false,
        data: {
            emoji:emoji
        } as INodeData
    }
})

export const NODES:INode[] = [
    ..._.shuffle(IMAGES_NODES),
    ..._.shuffle(EMOJI_NODES),
    ..._.shuffle(LINKS_NODES),
    ..._.shuffle(TEMPLATE_LINKS_NODES),
]

export const initialNodes:INode[] = [...NODES];
export const initialEdges = [];

