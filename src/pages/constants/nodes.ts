import * as _ from "lodash";
import {ILinkData, LINKS} from "./links.ts";
import {IImageData, IMAGES} from "./images.ts";

export enum NodeTypesEnum {
    imageNode='image-node',
    templateNode='template-node',
    emojiNode='emoji-node'
}
export type NodeTypes=
    NodeTypesEnum.imageNode |
    NodeTypesEnum.templateNode |
    NodeTypesEnum.emojiNode ;

export interface INodeData extends IImageData,ILinkData {

}

interface INodePosition {
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
}

const LINKS_NODES:INode[] =LINKS.map((link,index)=>{
    return {
        id: `link${index}`,
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
const IMAGES_NODES:INode[] =IMAGES.map((image,index)=>{
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

const NODES:INode[] = [
    ..._.shuffle(IMAGES_NODES),
    ..._.shuffle(EMOJI_NODES),
    ..._.shuffle(LINKS_NODES),
]

export const initialNodes:INode[] = [...NODES];
export const initialEdges = [];

