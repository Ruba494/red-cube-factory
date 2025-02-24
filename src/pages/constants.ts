import {IImageInfo} from "../components/imageCard.tsx";
import {Quote} from "../components/GalleryComponents/quote.tsx";
import * as _ from 'lodash';
import {ImageNode} from "../components/canvasComponents/imageNode.tsx";
import {EmojiNode} from "../components/canvasComponents/emojiNode.tsx";
import {TemplateLink} from "../components/canvasComponents/templateLink.tsx";


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

export const LINKS = [
    {

        emoji:'🔗',
        title:'2024 template',
        url:'',
        description:'test'
    },    {

        emoji:'🔗',
        title:'2023 template',
        url:'',
        description:'test'
    },   {

        emoji:'🔗',
        title:'2025 template',
        url:'',
        description:'test'
    }, {

        emoji:'🔗',
        title:'2022 template',
        url:'',
        description:'test'
    },{

        emoji:'🔗',
        title:'weekly template',
        url:'',
        description:'test'
    },
]

let maxX=1000
let size=200
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
        width: size,
        height: size,
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
        width: size,
        height: size,
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

export const nodeTypes = {
    [NodeTypesEnum.imageNode]: ImageNode,
    [NodeTypesEnum.emojiNode]:EmojiNode,
    [NodeTypesEnum.templateNode]:TemplateLink
};

export const possitionsNodes=[
    {
        "id": "image30",
        "width": 200,
        "height": 200,
        "position": {
            "x": 189,
            "y": 763
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202407.jpg"
        }
    },
    {
        "id": "image27",
        "width": 200,
        "height": 200,
        "position": {
            "x": 942,
            "y": 877
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202404.jpg"
        }
    },
    {
        "id": "image13",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1978,
            "y": 984
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202302.jpg"
        }
    },
    {
        "id": "image4",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1768,
            "y": 103
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202205.jpg"
        }
    },
    {
        "id": "emoji3",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2102,
            "y": 691
        },
        "type": "EmojiNode",
        "hidden": false,
        "data": {
            "emoji": "😶‍🌫️"
        }
    },
    {
        "id": "image8",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1752,
            "y": 923
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202209.jpg"
        }
    },
    {
        "id": "image36",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1192,
            "y": 518
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/ruba.png"
        }
    },
    {
        "id": "image7",
        "width": 200,
        "height": 200,
        "position": {
            "x": 462,
            "y": 158
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202208.jpg"
        }
    },
    {
        "id": "image17",
        "width": 200,
        "height": 200,
        "position": {
            "x": 707,
            "y": 641
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202306.jpg"
        }
    },
    {
        "id": "image1",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1564,
            "y": 31
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202202.jpg"
        }
    },
    {
        "id": "image25",
        "width": 200,
        "height": 200,
        "position": {
            "x": 806,
            "y": 125
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202402.jpg"
        }
    },
    {
        "id": "image33",
        "width": 200,
        "height": 200,
        "position": {
            "x": 102,
            "y": 176
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202410.jpg"
        }
    },
    {
        "id": "image3",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1214,
            "y": 918
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202204.jpg"
        }
    },
    {
        "id": "image32",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1818,
            "y": 418
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202409.jpg"
        }
    },
    {
        "id": "emoji4",
        "width": 200,
        "height": 200,
        "position": {
            "x": 458,
            "y": 479
        },
        "type": "EmojiNode",
        "hidden": false,
        "data": {
            "emoji": "🐮"
        }
    },
    {
        "id": "image18",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1185,
            "y": 175
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202307.jpg"
        }
    },
    {
        "id": "image20",
        "width": 200,
        "height": 200,
        "position": {
            "x": 802,
            "y": 1086
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202309.jpg"
        }
    },
    {
        "id": "image24",
        "width": 200,
        "height": 200,
        "position": {
            "x": 25,
            "y": 1008
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202401.jpg"
        }
    },
    {
        "id": "image15",
        "width": 200,
        "height": 200,
        "position": {
            "x": 874,
            "y": 337
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202304.jpg"
        }
    },
    {
        "id": "image22",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1553,
            "y": 656
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202311.jpg"
        }
    },
    {
        "id": "image31",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1450,
            "y": 364
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202408.jpg"
        }
    },
    {
        "id": "image11",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2,
            "y": 426
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202212.jpg"
        }
    },
    {
        "id": "image16",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2199,
            "y": 352
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202305.jpg"
        }
    },
    {
        "id": "image9",
        "width": 200,
        "height": 200,
        "position": {
            "x": 539,
            "y": 1126
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202210.jpg"
        }
    },
    {
        "id": "image0",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1464,
            "y": 990
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202201.jpg"
        }
    },
    {
        "id": "image19",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2249,
            "y": 1078
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202308.jpg"
        }
    },
    {
        "id": "image26",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2305,
            "y": 783
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202403.jpg"
        }
    },
    {
        "id": "image10",
        "width": 200,
        "height": 200,
        "position": {
            "x": 282,
            "y": 1051
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202211.jpg"
        }
    },
    {
        "id": "emoji2",
        "width": 200,
        "height": 200,
        "position": {
            "x": 956,
            "y": 646
        },
        "type": "EmojiNode",
        "hidden": false,
        "data": {
            "emoji": "🪄"
        }
    },
    {
        "id": "image14",
        "width": 200,
        "height": 200,
        "position": {
            "x": 602,
            "y": 889
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202303.jpg"
        }
    },
    {
        "id": "image12",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2080,
            "y": 34
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202301.jpg"
        }
    },
    {
        "id": "image5",
        "width": 200,
        "height": 200,
        "position": {
            "x": 389,
            "y": 781
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202206.jpg"
        }
    },
    {
        "id": "image28",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2357,
            "y": 93
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202405.jpg"
        }
    },
    {
        "id": "emoji1",
        "width": 200,
        "height": 200,
        "position": {
            "x": 222,
            "y": 415
        },
        "type": "EmojiNode",
        "hidden": false,
        "data": {
            "emoji": "👊🏼"
        }
    },
    {
        "id": "emoji0",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1754,
            "y": 720
        },
        "type": "EmojiNode",
        "hidden": false,
        "data": {
            "emoji": "🥳"
        }
    },
    {
        "id": "image29",
        "width": 200,
        "height": 200,
        "position": {
            "x": 660,
            "y": 376
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202406.jpg"
        }
    },
    {
        "id": "image34",
        "width": 200,
        "height": 200,
        "position": {
            "x": 2349,
            "y": 576
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202411.jpg"
        }
    },
    {
        "id": "image21",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1287,
            "y": 718
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202310.jpg"
        }
    },
    {
        "id": "image2",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1238,
            "y": 1125
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202203.jpg"
        }
    },
    {
        "id": "image35",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1704,
            "y": 1123
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202412.jpg"
        }
    },
    {
        "id": "image23",
        "width": 200,
        "height": 200,
        "position": {
            "x": 1010,
            "y": 1087
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202312.jpg"
        }
    },
    {
        "id": "image6",
        "width": 200,
        "height": 200,
        "position": {
            "x": 430,
            "y": 1061
        },
        "type": "ImageNode",
        "hidden": false,
        "data": {
            "imageSrc": "/posts/202207.jpg"
        }
    }
]