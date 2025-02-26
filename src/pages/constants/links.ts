export enum LinksAccessorEnum {
    DIARY_2025 ='DIARY_2025',
    DIARY_2024='DIARY_2024',
    DIARY_2023='DIARY_2023',
    MB_REVIEW='MB_REVIEW',
    WEEKLY_2021='WEEKLY_2021',
    WEEKLY_2022='WEEKLY_2022'
}

export const LINKS = [
    {

        emoji:'🔗',
        title:'2024 template',
        url:'https://drive.google.com/file/d/1AX080sh9WAa8VW1jLl1bumP0n5gUBC2x/view?usp=drivesdk',
        description:'test',
        previewAccessor:LinksAccessorEnum.DIARY_2024
    },    {

        emoji:'🔗',
        title:'2023 template',
        url:'https://drive.google.com/file/d/170QjA0TcV2nKpcfskfm5rMVyw_dOdOu1/view',
        description:'test',
        previewAccessor:LinksAccessorEnum.DIARY_2023
    },   {

        emoji:'🔗',
        title:'2025 template',
        url:'https://drive.google.com/file/d/1pk3r_el8wU2sMP7lhamwaxLc7jBpyoGi/view',
        description:'test',
        previewAccessor:LinksAccessorEnum.DIARY_2025
    }, {

        emoji:'🔗',
        title:'review template',
        url:'https://drive.google.com/file/d/1UgA9XUSwDvUPTpv44fMkQddX-PEIx_iw/view',
        description:'test',
        previewAccessor:LinksAccessorEnum.MB_REVIEW
    },{

        emoji:'🔗',
        title:'2022 weekly template',
        url:'https://drive.google.com/drive/folders/1EMh6tQvyVxf-5vkZs7-si8Y9qbZkLWsn',
        description:'test',
        previewAccessor:LinksAccessorEnum.WEEKLY_2022
    },{

        emoji:'🔗',
        title:'2021 weekly template',
        url:'https://drive.google.com/file/d/1fZmbeD17nyB6yWOLh1ifePIOvb6bKrXx/view',
        description:'test',
        previewAccessor:LinksAccessorEnum.WEEKLY_2021
    },
]

