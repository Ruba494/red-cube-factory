export const Tags = ({tags}) => {
    console.log(tags)
    return <div className={'tags'}>
        {tags?.map((tag) => (
            <div className={`tags-item ${tag.color}`} >
                {tag.tag}
            </div>
        ))}
    </div>
}