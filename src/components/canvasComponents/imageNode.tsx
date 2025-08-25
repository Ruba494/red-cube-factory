import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useCanvasStore } from "../../stores/canvasStore";
import { INodeData, NodeTypesEnum } from "../../pages/constants/nodes";
import { getAsset } from "../../utils/getAsset";

interface IImageNodeProps {
    id: string;
    data: INodeData;
    WithClickAction: boolean;
}

export const ImageNode = ({ id, data, WithClickAction = true }: IImageNodeProps) => {
    const { setSelectedNode, preloadedImages } = useCanvasStore();
    const containerRef = useRef<HTMLDivElement>(null);

    const relativeSrc = getAsset(data?.imageSrc);
    const src = new URL(relativeSrc, window.location.origin).toString();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // clear previous child
        container.innerHTML = "";

        // use the preloaded <img> if available
        const preloaded = preloadedImages?.[src];
        if (preloaded) {
            preloaded.style.width = "200px";
            preloaded.style.height = "auto";
            container.appendChild(preloaded); // attach actual DOM img
        } else {
            const fallback = new Image();
            fallback.src = src;
            fallback.style.width = "200px";
            fallback.style.height = "auto";
            container.appendChild(fallback);
        }
    }, [src, preloadedImages]);

    return (
        <motion.div
            id={id}
            ref={containerRef}
            {...(WithClickAction
                ? {
                    initial: { opacity: 0 },
                    whileHover: { scale: 1.3, transition: { duration: 1 } },
                    animate: { opacity: 1, transition: { delay: 1 } },
                }
                : {})}
            onClick={(e) => {
                e.preventDefault();
                if (WithClickAction) {
                    setSelectedNode({ data: { ...data, type: NodeTypesEnum.imageNode }, ref: containerRef });
                }
            }}
            className={`image-container ${data?.isProfile ? "is-profile-image" : ""}`}
        />
    );
};
