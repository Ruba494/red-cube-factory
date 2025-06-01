import {Colors} from "./colors.ts";

export interface ILinkData {
    emoji?:string
    title?:string
    url?:string
    description?: { tag:string, color:Colors }[]
    previewAccessor?:LinksAccessorTypes
}
export enum LinksAccessorEnum {
    DIARY_2025 ='DIARY_2025',
    DIARY_2024='DIARY_2024',
    DIARY_2023='DIARY_2023',
    DIARY_2022='DIARY_2022',
    MB_REVIEW='MB_REVIEW',
    WEEKLY_2021='WEEKLY_2021',
    WEEKLY_VERTICAL='WEEKLY_VERTICAL',
}

export type LinksAccessorTypes=
    LinksAccessorEnum.DIARY_2022 |
    LinksAccessorEnum.DIARY_2023 |
    LinksAccessorEnum.DIARY_2024 |
    LinksAccessorEnum.DIARY_2025 |
    LinksAccessorEnum.MB_REVIEW |
    LinksAccessorEnum.WEEKLY_VERTICAL |
    LinksAccessorEnum.WEEKLY_2021 ;


const LinksTags={
    [LinksAccessorEnum.DIARY_2022] : [
        {tag:'A-hong', color:Colors.BLUE},
        {tag:'textured', color:Colors.GREEN},
    ],
    [LinksAccessorEnum.DIARY_2023] : [
        {tag:'red-cube-factory', color:Colors.RED},
        {tag:'かわいい', color:Colors.GREEN,lang:'jp'},
        {tag:'colorful', color:Colors.YELLOW},
        {tag:'DIARY OF 2023', color:Colors.PINK},

    ],
    [LinksAccessorEnum.DIARY_2024] : [
        {tag:'red-cube-factory', color:Colors.RED},
        {tag:'MY RED 2024', color:Colors.PINK},
        {tag:'مره احمر', color:Colors.PURPLE ,lang:'ar'},

    ],
    [LinksAccessorEnum.DIARY_2025] : [
        {tag:'red-cube-factory', color:Colors.RED},
        {tag:'just memories and feelings', color:Colors.BLUE},
        {tag:'Grid', color:Colors.YELLOW},
    ],
    [LinksAccessorEnum.WEEKLY_2021] : [
        {tag:'red-cube-factory', color:Colors.RED},
        {tag:'初デザイン', color:Colors.YELLOW,lang:'jp'},
    ],
    [LinksAccessorEnum.MB_REVIEW] : [
        {tag:'red-cube-factory', color:Colors.RED},
        {tag:'not my favorite', color:Colors.BLUE},
    ],
    [LinksAccessorEnum.WEEKLY_VERTICAL] : [
        {tag:'red-cube-factory', color:Colors.RED},
        {tag:'UN-DATED', color:Colors.GRAY},
    ]
}



export const LINKS: ILinkData[] = [
    {

        emoji:'🔗',
        title:'2024 template',
        url:'https://drive.google.com/file/d/1AX080sh9WAa8VW1jLl1bumP0n5gUBC2x/view?usp=drivesdk',
        description:LinksTags[LinksAccessorEnum.DIARY_2024],
        previewAccessor:LinksAccessorEnum.DIARY_2024
    },    {

        emoji:'🔗',
        title:'2023 template',
        url:'https://drive.google.com/file/d/170QjA0TcV2nKpcfskfm5rMVyw_dOdOu1/view',
        description:LinksTags[LinksAccessorEnum.DIARY_2023],
        previewAccessor:LinksAccessorEnum.DIARY_2023
    },   {

        emoji:'🔗',
        title:'2022 template',
        url:'https://www.youtube.com/watch?app=desktop&v=SbU37scy-uE&t=82s',
        description:LinksTags[LinksAccessorEnum.DIARY_2022],
        previewAccessor:LinksAccessorEnum.DIARY_2022
    },   {

        emoji:'🔗',
        title:'2025 template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:LinksTags[LinksAccessorEnum.DIARY_2025],
        previewAccessor:LinksAccessorEnum.DIARY_2025
    },
]



export const TEMPLATES_LINKS: ILinkData[] = [
    {
        emoji:'🔗',
        title:'2023 template',
        url:'https://drive.google.com/file/d/170QjA0TcV2nKpcfskfm5rMVyw_dOdOu1/view',
        description:LinksTags[LinksAccessorEnum.DIARY_2023],
        previewAccessor:LinksAccessorEnum.DIARY_2023
    },
    {
        emoji:'🔗',
        title:'2024 template',
        url:'https://drive.google.com/file/d/1AX080sh9WAa8VW1jLl1bumP0n5gUBC2x/view?usp=drivesdk',
        description:LinksTags[LinksAccessorEnum.DIARY_2024],
        previewAccessor:LinksAccessorEnum.DIARY_2024
    },
    {

        emoji:'🔗',
        title:'2025 template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:LinksTags[LinksAccessorEnum.DIARY_2025],
        previewAccessor:LinksAccessorEnum.DIARY_2025
    },  {

        emoji:'🔗',
        title:'2022 weekly template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:LinksTags[LinksAccessorEnum.WEEKLY_2021],
        previewAccessor:LinksAccessorEnum.WEEKLY_2021
    }, {

        emoji:'🔗',
        title:'movies/books review',
        url:'https://drive.google.com/file/d/1UgA9XUSwDvUPTpv44fMkQddX-PEIx_iw/view',
        description:LinksTags[LinksAccessorEnum.MB_REVIEW],
        previewAccessor:LinksAccessorEnum.MB_REVIEW
    },{

        emoji:'🔗',
        title:'weekly vertical',
        url:'https://drive.google.com/drive/folders/1EMh6tQvyVxf-5vkZs7-si8Y9qbZkLWsn',
        description:LinksTags[LinksAccessorEnum.WEEKLY_VERTICAL],
        previewAccessor:LinksAccessorEnum.WEEKLY_VERTICAL
    },
]

