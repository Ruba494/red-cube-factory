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
export const LINKS: ILinkData[] = [
    {

        emoji:'🔗',
        title:'2024 template',
        url:'https://drive.google.com/file/d/1AX080sh9WAa8VW1jLl1bumP0n5gUBC2x/view?usp=drivesdk',
        description:[
            {tag:'test', color:Colors.RED},
            {tag:'test', color:Colors.BLUE},
            {tag:'test', color:Colors.GREEN},
            {tag:'test', color:Colors.YELLOW},
            {tag:'test', color:Colors.PINK},
            {tag:'test', color:Colors.PURPLE},
            {tag:'test', color:Colors.GRAY},
        ],
        previewAccessor:LinksAccessorEnum.DIARY_2024
    },    {

        emoji:'🔗',
        title:'2023 template',
        url:'https://drive.google.com/file/d/170QjA0TcV2nKpcfskfm5rMVyw_dOdOu1/view',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.DIARY_2023
    },   {

        emoji:'🔗',
        title:'2022 template',
        url:'https://www.youtube.com/watch?app=desktop&v=SbU37scy-uE&t=82s',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.DIARY_2022
    },   {

        emoji:'🔗',
        title:'2025 template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.DIARY_2025
    },
]



export const TEMPLATES_LINKS: ILinkData[] = [
    {
        emoji:'🔗',
        title:'2023 template',
        url:'https://drive.google.com/file/d/170QjA0TcV2nKpcfskfm5rMVyw_dOdOu1/view',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.DIARY_2023
    },
    {
        emoji:'🔗',
        title:'2024 template',
        url:'https://drive.google.com/file/d/1AX080sh9WAa8VW1jLl1bumP0n5gUBC2x/view?usp=drivesdk',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.DIARY_2024
    },
    {

        emoji:'🔗',
        title:'2025 template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.DIARY_2025
    },  {

        emoji:'🔗',
        title:'2022 weekly template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.WEEKLY_2021
    }, {

        emoji:'🔗',
        title:'movies/books review',
        url:'https://drive.google.com/file/d/1UgA9XUSwDvUPTpv44fMkQddX-PEIx_iw/view',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.MB_REVIEW
    },{

        emoji:'🔗',
        title:'weekly vertical',
        url:'https://drive.google.com/drive/folders/1EMh6tQvyVxf-5vkZs7-si8Y9qbZkLWsn',
        description:[{tag:'test', color:Colors.RED}],
        previewAccessor:LinksAccessorEnum.WEEKLY_VERTICAL
    },
]

