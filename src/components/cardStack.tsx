import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CARD_COLORS = [
    { id: 1, component: <>Card 1</>, color: "#266678" },
    { id: 2, component: <>Card 2</>, color: "#cb7c7a" },
    { id: 3, component: <>Card 3</>, color: "#36a18b" },
    { id: 4, component: <>Card 4</>, color: "#cda35f" },
    { id: 5, component: <>Card 5</>, color: "#747474" },
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

                    return (
                        <motion.li
                            key={card.id}
                            className={'stacked-cards-card-item'}
                            style={{
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
                            {card.component}
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};
