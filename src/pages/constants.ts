import {IImageInfo} from "../components/imageCard.tsx";
import {Quote} from "../components/GalleryComponents/quote.tsx";


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

    }, {
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
    ...COMPONENTS
]




export const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        type:'ImageNode',
        data: {
        imageSrc: "/posts/202201.jpg",
        label: '1' }
    },
    {
        id: '2',
        position: { x: 0, y: 100 },
        type:'ImageNode',
        data: {
        imageSrc: "/posts/202202.jpg",
            label: '2',
        } },
];
export const initialEdges = [];
