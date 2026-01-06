import { motion } from "motion/react";
import { useState, useEffect } from "react";
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

const TempTemplateLink = ({ data, index, animate }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Responsive offsets
    const yOffset = isMobile ? 25 : 40;
    const xOffset = isMobile ? 20 : 30;
    const xPosition = isMobile ? '20%' : '30%';
    const yPosition = isMobile ? '100%' : '150%';

    return (
        <motion.div
            className="template-link"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={animate ? {
                opacity: 1,
                x: `calc(${xPosition} + ${-index * xOffset}px)`,
                y: `calc(${yPosition} + ${-index * yOffset}px)`,
                transition: {
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                },
            } : {}}
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