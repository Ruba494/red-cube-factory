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

    const dotQuantity = 30;
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
            window.getComputedStyle(emitterRef.current).fontSize
        );

        // Set explosion container position
        gsap.set(container, {
            x: bounds.left + bounds.width / 2,
            y: bounds.top + bounds.height / 2,
        });

        const tl = gsap.timeline();
        const dots: HTMLElement[] = [];

        for (let i = 0; i < dotQuantity; i++) {
            const dot = document.createElement("div");
            dot.textContent = data.emoji;
            dot.style.position = "absolute";

            // 🎨 Randomize size per dot
            const baseSize = emitterFontSize * 0.5;
            const size = baseSize * (0.5 + Math.random() * 0.7); // 50%–120%
            dot.style.fontSize = `${size}px`;

            dot.style.opacity = "1";
            container.appendChild(dot);
            dots.push(dot);

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * (emitterFontSize * 0.5);

            gsap.set(dot, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                xPercent: -50,
                yPercent: -50,
                force3D: true,
                // rotation: Math.random() * 360, // 🔄 random initial rotation
            });

            tl.to(
                dot,
                {
                    physics2D: {
                        angle: (angle * 180) / Math.PI,
                        velocity: (100 + Math.random() * 300) * speed,
                        gravity: (400 + Math.random() * 200) * gravity,
                    },
                    // rotation: `+=${180 + Math.random() * 360}`, // spin while flying
                    duration: 1.2 + Math.random(),
                    ease: "power1.out",
                },
                0
            ).to(
                dot,
                {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.6,
                    ease: "power1.in",
                },
                0.7
            );
        }

        // Remove dots after animation
        tl.call(() => {
            dots.forEach((dot) => dot.remove());
            if (container.childElementCount === 0) {
                container.remove();
                containerRef.current = null;
            }
        });
    };

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
