import {Colors} from "../../pages/constants/colors";
import {ITag} from "../../pages/constants/links.ts";


export const Profile = () => {
    const ContactsTags:ITag[]=[
        {tag:'diaries account', color:Colors.RED,link:'https://www.instagram.com/ruu.diary'},
        {tag:'professional ruba', color:Colors.RED,link:'https://sa.linkedin.com/in/ruba-almutairi-2000/en'},
    ]
    const ExtraInfoTags:ITag[]=[
        {tag:'25', color:Colors.GREEN,},
        {tag:'INFJ', color:Colors.BLUE,},
        {tag:'ONEDOOR', color:Colors.PINK,},
        {tag:'احب اللون الاحمر', color:Colors.RED, lang:'ar'},
        {tag:'日本語', color:Colors.PURPLE, lang:'jp'},
        {tag:'English', color:Colors.GRAY},
        {tag:'عربي', color:Colors.YELLOW,lang:'ar'},
    ]

    return <div className={'profile'}>
        <span className={'title'}> Hi, I'm  <span className={'title-highlight'}>Ruba!</span></span>
        <div className={'extra-info'}>
            <ul className={'tags'}>
                {
                    ExtraInfoTags.map((tag, index) => (
                        <li className={`tags-item ${tag.color} `} lang={tag?.lang??'en'} key={index}>
                            {tag.tag}
                        </li>
                    ))
                }
            </ul>
        </div>
        <span className={'subtitle'}> I'm a software engineer who loves writing digital diaries.</span>
        <span className={'text'}>
            I created this website to share my own diary entries and the templates I design. My goal is to inspire others to start documenting their thoughts, memories, and everyday moments.
        </span>
        <span className={'text ending'}>
             <span className={'ending-hearts'}> </span>
            Feel free to explore and use anything you like—I’d love to see how you make it your own!
        </span>
        <div className={'contacts'}>
            <span className={'text'}>Whether it's a question, an idea, or just a hello—feel free to reach out on </span>
            <ul className={'tags'}>
                {
                    ContactsTags.map((tag, index) => (
                        <li className={`tags-item ${tag.color} `} lang={tag?.lang??'en'} key={index} onClick={()=>{
                            window.open(tag.link, "_blank", "noreferrer")
                        }}>
                            <a className={'link'}>{tag.tag}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
}


