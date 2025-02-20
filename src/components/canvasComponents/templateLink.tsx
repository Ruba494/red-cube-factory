export const TemplateLink = ({data}) => {
    return<div className={'template-link'}>
        <div className={'emoji'}>{data.emoji}</div>
        <div className={'title'}>{data.title}</div>
        <div className={'description'}>{data.title}</div>
    </div>
}