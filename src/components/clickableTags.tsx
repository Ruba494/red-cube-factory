import {Fragment} from "react";

export const ClickableTags = ({tags,handleTagClick,
                                  isTagSelected}) => {
    return   <div className={'tags'}>
        {tags?.map((tag, index) => (
            <Fragment key={index}>
                <div className={`tags-item ${tag.color} is-selectable`} lang={tag?.lang??'en'}
                     onClick={(e)=>handleTagClick(e,tag)}
                     aria-selected={isTagSelected(tag)}>
                    {tag.tag}
                </div>
            </Fragment>
        ))}
    </div>
}