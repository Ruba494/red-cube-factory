import {useEffect, useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const SpinningCube = ({counter}) => {
    const cubeRef = useRef(null);
    const rotationRef = useRef({ x: 0, y: 0 }); // keeps track of total rotation

    useEffect(() => {
        rotationRef.current.x -= 90;
        rotationRef.current.y += 0;

        // Animate to target rotation
        gsap.to(cubeRef.current, {
            rotationX: 0,
            rotationY: rotationRef.current.x,
            duration:1,
            ease: 'expo',
        });

    }, [counter]);

    return (
        <div className="scene">
            <div className={'camera'}>
                <div className="cube" ref={cubeRef}>
                    <div className="face front">{counter}</div>
                    <div className="face back">{counter}</div>
                    <div className="face right">{counter}</div>
                    <div className="face left">{counter}</div>
                    <div className="face top"></div>
                    <div className="face bottom">{counter}</div>
                </div>
            </div>
        </div>
            );
};
