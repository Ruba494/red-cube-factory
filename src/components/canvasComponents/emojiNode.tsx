import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

import { INodeData } from "../../pages/constants/nodes";

gsap.registerPlugin(Physics2DPlugin);

interface IEmojiNodeProps {
    data: INodeData;
}

export const EmojiNode = ({ data }: IEmojiNodeProps) => {
    const emitterRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const emitterSize = 100;
    const dotQuantity = 30;
    const dotSizeMax = 30;
    const dotSizeMin = 10;
    const speed = 1;
    const gravity = 1;

    const explode = () => {
        if (!emitterRef.current) return;

        // Create container only when needed
        if (!containerRef.current) {
            const container = document.createElement("div");
            container.style.cssText =
                "position:absolute; left:0; top:0; overflow:visible; z-index:5000; pointer-events:none;";
            document.body.appendChild(container);
            containerRef.current = container;
        }

        const container = containerRef.current;

        // Get emitter bounds and font size
        const bounds = emitterRef.current.getBoundingClientRect();
        const emitterFontSize = parseFloat(
            window.getComputedStyle(emitterRef.current).fontSize || "10"
        );

        // Set explosion container position
        gsap.set(container, {
            x: bounds.left + bounds.width / 2,
            y: bounds.top + bounds.height / 2,
        });

        const tl = gsap.timeline();
        const dots: HTMLElement[] = [];

        // Calculate dot size as 60% of clicked emoji size
        const dotSize = emitterFontSize * 0.6;

        for (let i = 0; i < dotQuantity; i++) {
            const dot = document.createElement("div");
            dot.textContent = data.emoji;
            dot.style.position = "absolute";
            dot.style.fontSize = `${dotSize}px`;
            dot.style.opacity = "1";
            container.appendChild(dot);
            dots.push(dot);

            const angle = Math.random() * Math.PI * 2;
            const length = Math.random() * (emitterSize / 2);

            gsap.set(dot, {
                x: Math.cos(angle) * length,
                y: Math.sin(angle) * length,
                xPercent: -50,
                yPercent: -50,
                force3D: true,
            });

            tl.to(
                dot,
                {
                    physics2D: {
                        angle: (angle * 180) / Math.PI,
                        velocity: (100 + Math.random() * 250) * speed,
                        gravity: 500 * gravity,
                    },
                    duration: 1 + Math.random(),
                },
                0
            ).to(
                dot,
                {
                    opacity: 0,
                    duration: 0.4,
                },
                0.7
            );
        }

        // Remove dots after animation
        tl.call(() => {
            dots.forEach((dot) => dot.remove());
        });
    };


    const getRandom = (min: number, max: number) =>
        min + Math.random() * (max - min);

    return (
        <div className="text-updater-node">
            <motion.div
                ref={emitterRef}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
                onClick={explode}
                style={{
                    width: "200px",
                    height: "auto",
                    fontSize: "150px",
                    cursor: "pointer",
                }}
            >
                {data?.emoji}
            </motion.div>
        </div>
    );
};
