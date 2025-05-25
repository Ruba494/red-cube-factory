import {LinksAccessorEnum} from "./links.ts";

export interface IImageData {
    imageSrc?:string;
    isProfile?:boolean;
}


export const IMAGES: IImageData[]= [
    {
        imageSrc: "/posts/202201.jpg"
    },
    {
        imageSrc: "/posts/202202.jpg"
    },
    {

        imageSrc: "/posts/202203.jpg"
    },
    {

        imageSrc: "/posts/202204.jpg"
    },
    {

        imageSrc: "/posts/202205.jpg"
    },
    {

        imageSrc: "/posts/202206.jpg"

    },
    {

        imageSrc: "/posts/202207.jpg"

    },
    {

        imageSrc: "/posts/202208.jpg"
    },
    {

        imageSrc: "/posts/202209.jpg"
    },
    {

        imageSrc: "/posts/202210.jpg"
    },
    {

        imageSrc: "/posts/202211.jpg"
    },
    {

        imageSrc: "/posts/202212.jpg"
    },
    {

        imageSrc: "/posts/202301.jpg"
    },
    {

        imageSrc: "/posts/202302.jpg"
    },
    {

        imageSrc: "/posts/202303.jpg"
    },
    {

        imageSrc: "/posts/202304.jpg"
    },
    {

        imageSrc: "/posts/202305.jpg"
    },
    {

        imageSrc: "/posts/202306.jpg"

    }, {

        imageSrc: "/posts/202307.jpg"

    },
    {

        imageSrc: "/posts/202308.jpg"
    },
    {

        imageSrc: "/posts/202309.jpg"
    },
    {

        imageSrc: "/posts/202310.jpg"
    },
    {

        imageSrc: "/posts/202311.jpg"
    },
    {

        imageSrc: "/posts/202312.jpg"
    },
    {

        imageSrc: "/posts/202401.jpg"
    },
    {

        imageSrc: "/posts/202402.jpg"
    },
    {

        imageSrc: "/posts/202403.jpg"
    },
    {

        imageSrc: "/posts/202404.jpg"
    },
    {

        imageSrc: "/posts/202405.jpg"
    },
    {

        imageSrc: "/posts/202406.jpg"

    }, {

        imageSrc: "/posts/202407.jpg"

    },
    {

        imageSrc: "/posts/202408.jpg"
    },
    {

        imageSrc: "/posts/202409.jpg"
    },
    {

        imageSrc: "/posts/202410.jpg"
    },
    {

        imageSrc: "/posts/202411.jpg"
    },
    {

        imageSrc: "/posts/202412.jpg"
    },
    {

        isProfile:true,
        imageSrc: "/ruba.png"
    },
]


export const PREVIEW_IMAGES = {
    [LinksAccessorEnum.DIARY_2022]: [
        "/posts/202201.jpg",
        "/posts/202202.jpg",
        "/posts/202203.jpg",
        "/posts/202204.jpg",
        "/posts/202205.jpg",
        "/posts/202206.jpg",
        "/posts/202207.jpg",
        "/posts/202208.jpg",
        "/posts/202209.jpg",
        "/posts/202210.jpg",
        "/posts/202211.jpg",
        "/posts/202212.jpg",
    ],
    [LinksAccessorEnum.DIARY_2023]: [
        "/posts/202301.jpg",
        "/posts/202302.jpg",
        "/posts/202303.jpg",
        "/posts/202304.jpg",
        "/posts/202305.jpg",
        "/posts/202306.jpg",
        "/posts/202307.jpg",
        "/posts/202308.jpg",
        "/posts/202309.jpg",
        "/posts/202310.jpg",
        "/posts/202311.jpg",
        "/posts/202312.jpg",
    ],
    [LinksAccessorEnum.DIARY_2024]: [
        "/posts/202401.jpg",
        "/posts/202402.jpg",
        "/posts/202403.jpg",
        "/posts/202404.jpg",
        "/posts/202405.jpg",
        "/posts/202406.jpg",
        "/posts/202407.jpg",
        "/posts/202408.jpg",
        "/posts/202409.jpg",
        "/posts/202410.jpg",
        "/posts/202411.jpg",
        "/posts/202412.jpg",
    ],
}

export const TEMPLATE_PREVIEW_IMAGES = {
    [LinksAccessorEnum.DIARY_2023]: Array.from({ length: 13 }).map((_,i)=>{
        const index= i+1 <10 ? `0${i+1}`:i+1
        return `/templates/${LinksAccessorEnum.DIARY_2023}/${LinksAccessorEnum.DIARY_2023}-${index}.png`
    }),
    [LinksAccessorEnum.DIARY_2024]: Array.from({ length: 15 }).map((_,i)=>{
        const index= i+1 <10 ? `0${i+1}`:i+1
        return `/templates/${LinksAccessorEnum.DIARY_2024}/${LinksAccessorEnum.DIARY_2024}-${index}.png`
        }),
    [LinksAccessorEnum.DIARY_2025]:Array.from({ length: 28 }).map((_,i)=>{
        const index= i+1 <10 ? `0${i+1}`:i+1
        return `/templates/${LinksAccessorEnum.DIARY_2025}/${LinksAccessorEnum.DIARY_2025}-${index}.png`
        }),
}
