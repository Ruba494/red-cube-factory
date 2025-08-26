import { motion } from "motion/react";
import {Tags} from "../Tags.tsx";
import {LINKS} from "../../pages/constants/links.ts";

export const Card2 = ({isTop}) => {

    return <div className={'card card-2'}>
        <div className={'description'}>
            Tap on a block to peek inside — my memories, template designs, or the year’s pages
        </div>

        <div className={'templates-container'}>
            {LINKS.map((link, index) => (
                <TempTemplateLink key={index} data={link} index={index} animate={isTop}/>
            ))}
        </div>
    </div>
}

const TempTemplateLink = ({ data, index ,animate}) => {
    const yOffset = 40; // diagonal distance between cards
    const xOffset = 30; // diagonal distance between cards

    return (
        <motion.div
            className="template-link"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={animate ?{
                opacity: 1,
                x: `calc(30% + ${-index * xOffset}px)`, // 75px = half card width
                y: `calc(150% + ${-index * yOffset}px)`, // 50px = half card height
                transition: {
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                },
            }:{}}
            style={{ position: "absolute" }}
        >
            <div className="emoji">{data.emoji}</div>
            <div className="title">{data.title}</div>
            <div className="description">
                <Tags tags={data.description} />
            </div>
        </motion.div>
    );
};