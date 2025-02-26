import * as _ from "lodash";
import {LINKS} from "./links.ts";
import {IMAGES} from "./images.ts";
export enum NodeTypesEnum {
    imageNode='image-node',
    templateNode='template-node',
    emojiNode='emoji-node'
}
const LINKS_NODES=LINKS.map((link,index)=>{
    return {
        id: `link${index}`,
        width: 150,
        height: 20,
        position: {
            x: 0,
            y: 0,
        },
        type:NodeTypesEnum.templateNode,
        hidden:false,
        data: {
            ...link
        }
    }
})
const IMAGES_NODES=IMAGES.map((image,index)=>{
    return {
        id: `image${index}`,
        width: 200,
        height: 200,
        position: {
            x: 0,
            y: 0,
        },
        type:NodeTypesEnum.imageNode,
        hidden:false,
        data: {
            imageSrc: image.imageSrc,
        }
    }
})
const EMOJI_NODES=['🥳','👊🏼','🪄','😶‍🌫️','🐮'].map((emoji,index)=>{
    return {
        id: `emoji${index}`,
        width: 200,
        height: 200,
        position: {
            x: 0,
            y: 0,
        },
        type:NodeTypesEnum.emojiNode,
        hidden:false,
        data: {
            emoji:emoji
        }
    }
})

const NODES= [
    ..._.shuffle(IMAGES_NODES),
    ..._.shuffle(EMOJI_NODES),
    ..._.shuffle(LINKS_NODES),
]

export const initialNodes = [...NODES];
export const initialEdges = [];

