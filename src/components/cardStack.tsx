import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {Card1} from "./onBoardingCards/Card1.tsx";
import {Card2} from "./onBoardingCards/Card2.tsx";
import {Card3} from "./onBoardingCards/Card3.tsx";
import {Card4} from "./onBoardingCards/Card4.tsx";
import {Card5} from "./onBoardingCards/Card5.tsx";

const CARD_COLORS = [
    { id: 1, title: 'Welcome ✨',component: Card1 ,color:'--tag-color-red'},
    { id: 2, title: 'Tap & Open 📝',component: Card2, color:'--tag-color-blue' },
    { id: 3, title: 'Play with Emojis 🎉',component: Card3 , color:'--tag-color-green'},
    { id: 4, title: 'Find What You Need 🔍',component: Card4, color:'--tag-color-purple' },
    { id: 5, title: 'Start Your Journey 🚀',component: Card5, color:'--tag-color-pink' },
];

// Fixed scatter positions
const SCATTER_PATTERN = [
    { x: -10, y: 0, rotate: -5 },
    { x: 5, y: -5, rotate: 3 },
    { x: -8, y: -10, rotate: -3 },
    { x: 6, y: -15, rotate: 5 },
    { x: -4, y: -20, rotate: -2 },
];

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export const CardStack = () => {
    const [cards, setCards] = useState(CARD_COLORS);
    const [scattered, setScattered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScattered(true);
        }, 800);
        return () => clearTimeout(timeout);
    }, []);

    // Move top card to end
    const moveTopToEnd = () => {
        setCards((prev) => {
            const [top, ...rest] = prev;
            return [...rest, top];
        });
        setIsAnimating(false);
    };

    return (
        <div  className={'stacked-cards'}>
            <ul  className={'stacked-cards-card'}>
                {cards.map((card, index) => {
                    const isTop = index === 0;

                    // Determine target position
                    const scatter = scattered
                        ? SCATTER_PATTERN[card.id - 1]
                        : { x: 0, y: 0, rotate: 0 };
                    const CardComponent = card.component; // capitalize

                    return (
                        <motion.li
                            key={card.id}
                            className={'stacked-cards-card-item'}
                            style={{
                                border:`1px dashed var(${card.color})`,
                                cursor: isTop ? "grab" : "auto",
                                zIndex: cards.length - index,
                            }}
                            drag={isTop ? "y" : false}
                            dragConstraints={{ top: 0, bottom: 0 }}
                            onDragEnd={() => {
                                if (!isAnimating) setIsAnimating(true);
                            }}
                            onClick={() => {
                                if (!isAnimating) setIsAnimating(true);
                            }}
                            animate={
                                isTop && isAnimating
                                    ? SCATTER_PATTERN[0]// swipe out
                                    : {
                                        x: scatter.x,
                                        y: index * -CARD_OFFSET + scatter.y,
                                        scale: 1 - index * SCALE_FACTOR,
                                        rotate: scatter.rotate,
                                    }
                            }
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onAnimationComplete={() => isTop && isAnimating && moveTopToEnd()}
                        >
                            <div className={'stacked-cards-card-item-content'} style={{color:`var(${card.color})`}}>
                                <div className={'stacked-cards-card-item-content-header'}
                                >{card.title}</div>
                                <div className={'stacked-cards-card-item-content-content'}>

                                    <CardComponent isTop={isTop}/>
                                </div>

                            </div>

                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};
