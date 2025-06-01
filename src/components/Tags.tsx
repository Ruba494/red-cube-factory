import {Fragment} from "react";

export const Tags = ({tags}) => {
    return <div className={'tags'}>
        {tags?.map((tag, index) => (
            <Fragment key={index}>
                <div className={`tags-item ${tag.color} `} lang={tag?.lang??'en'}>
                    {tag.tag}
                </div>
            </Fragment>
        ))}
    </div>
}