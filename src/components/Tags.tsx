import {Fragment} from "react";

export const Tags = ({tags}) => {
    return <div className={'tags'}>
        {tags?.map((tag, index) => (
            <Fragment key={index}>
                <div className={`tags-item ${tag.color}`}>
                    {tag.tag}
                </div>
            </Fragment>
        ))}
    </div>
}