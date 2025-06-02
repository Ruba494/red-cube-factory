import {motion,useMotionValue,
    useSpring} from "motion/react";
import {TEMPLATES_LINKS} from "./constants/links.ts";
import {Modal} from "../components/templatesComponents/modal.tsx";
import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import {useNavigate} from "react-router";
import {TemplateContextProvider} from "../components/templatesComponents/templateContext.tsx";
import {Tags} from "../components/Tags.tsx";
import InflatedRuba from '../../public/InflatedText.png'
import {useEffect, useRef, useState} from "react";
import {LoadingPage} from "../components/loading/loadingPage.tsx";
export const Templates = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setTimeout(()=>{
                setIsLoaded(true)
            },1000)
        });
    }, []);

    return <div className={'templates'}>
        {!isLoaded&&<LoadingPage setIsLoaded={setIsLoaded}/>}
        <TemplateContextProvider>
            <motion.div
                className={'templates-title'}>
                <div className={'templates-title-title'}>
                    <img src={InflatedRuba} alt="Ruba's" height={250}/>
                </div>
                <div className={'templates-title-subtitle'}>  red cube factory</div>

            </motion.div>
        <div className={'templates-items'}>
            {TEMPLATES_LINKS.map((item)=> <TemplateNode data={{
                previewAccessor:item.previewAccessor,
                emoji:item.emoji,
                title:item.title,
                description:item.description
            }}/>)}
        </div>
        <Modal isLoaded={isLoaded}/>
        </TemplateContextProvider>
    </div>
}

export const TemplateNode = ({data,withOpenModal=true}) => {
    const navigate = useNavigate();
    const handleClick = (e,id) => {
        e.preventDefault()
        const routeTemplate = PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.TEMPLATES]; // "/templates/:id?"
        const templatePath = routeTemplate.replace(":id?", id); // "/templates/123"
        withOpenModal?navigate(templatePath):window.open(data.url, "_blank", "noreferrer");
    };

    return <motion.div className={'template-link'}
                    data-node-id={data?.previewAccessor}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                    }}
                    onClick={(e)=>handleClick(e,data?.previewAccessor)}>
            <div className={'emoji'}>{data?.emoji}</div>
            <div className={'title'}>{data?.title}</div>
            <div className={'description'}><Tags tags={data?.description}/></div>
        </motion.div>
}