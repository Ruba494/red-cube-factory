import {ClickableTags} from "../clickableTags.tsx";
import { NAVIGATION_YEARS} from "../../pages/constants/links.ts";
import {useEffect, useState} from "react";
import {Colors} from "../../pages/constants/colors.ts";

export const Card4 = () => {
    const tags=NAVIGATION_YEARS.map(item=>{
        return {...item,color:Colors.PURPLE}
    })

    const [selectedTag, setSelectedTag] = useState(tags[0].tag)

        useEffect(() => {
            let index = 0;

            const intervalRef = setInterval(() => {
                index = (index + 1) % tags.length; // loop back to start
                setSelectedTag(tags[index].tag);
            }, 2000);

            return () => {
                clearInterval(intervalRef); // cleanup interval on unmount
            };
        }, []);

        const isSelectedTag = (tag) => selectedTag === tag.tag;


    return <div className={'card card-4'}>
        <div className={'description'}>
            pick a year, templates, or find about me and see only what matters right now.
        </div>
<div className={'years-filter'}>
        <div className={'navigation__list'}>
            <div className={`navigation__list-item`}>
                <ClickableTags tags={tags} handleTagClick={()=>{}} isTagSelected={(isSelectedTag)}/>
            </div>
        </div>
</div>

    </div>
}