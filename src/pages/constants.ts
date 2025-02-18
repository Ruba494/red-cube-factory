import {IImageInfo} from "../components/imageCard.tsx";
import {Quote} from "../components/GalleryComponents/quote.tsx";
import * as _ from 'lodash';
import {ImageNode} from "../components/canvasComponents/imageNode.tsx";
import {EmojiNode} from "../components/canvasComponents/emojiNode.tsx";


export const COMPONENTS: IImageInfo[] = [
    {
        type: 'component',
        component: Quote,
        quote:''
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
    {
        type: 'component',
        component: Quote
    },
]
export const IMAGES: IImageInfo[] = [
    {
        type: 'image',
        imageSrc: "/posts/202201.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202202.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202203.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202204.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202205.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202206.jpg"

    },
    {
        type: 'image',
        imageSrc: "/posts/202207.jpg"

    },
    {
        type: 'image',
        imageSrc: "/posts/202208.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202209.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202210.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202211.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202212.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202301.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202302.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202303.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202304.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202305.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202306.jpg"

    }, {
        type: 'image',
        imageSrc: "/posts/202307.jpg"

    },
    {
        type: 'image',
        imageSrc: "/posts/202308.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202309.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202310.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202311.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202312.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202401.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202402.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202403.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202404.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202405.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202406.jpg"

    }, {
        type: 'image',
        imageSrc: "/posts/202407.jpg"

    },
    {
        type: 'image',
        imageSrc: "/posts/202408.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202409.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202410.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202411.jpg"
    },
    {
        type: 'image',
        imageSrc: "/posts/202412.jpg"
    },
    {
        type: 'image',
        imageSrc: "/ruba.png"
    },

]

let maxX=1000
let size=200


const IMAGES_NODES=IMAGES.map((image,index)=>{
    return {
        id: `image${index}`,
        width: size,
        height: size,
        position: {
            x: 0,
            y: 0,
        },
        type:'ImageNode',
        hidden:false,
        data: {
            imageSrc: image.imageSrc,
        }
    }
})

const EMOJI_NODES=['🥳','👊🏼','🪄','😶‍🌫️','🐮'].map((emoji,index)=>{
    return {
        id: `emoji${index}`,
        width: size,
        height: size,
        position: {
            x: 0,
            y: 0,
        },
        type:'EmojiNode',
        hidden:false,
        data: {
            emoji:emoji
        }
    }
})

const NODES= _.shuffle([
    ..._.shuffle(IMAGES_NODES),
    ..._.shuffle(EMOJI_NODES),
])
export const initialNodes = [...NODES];
export const initialEdges = [];
export const nodeTypes = {
    ImageNode: ImageNode,
    EmojiNode:EmojiNode
};