import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useRotatingCube = (trigger) => {
    const cubeRef = useRef(null);
    const rotationRef = useRef({x: 0, y: 0}); // keeps track of total rotation
    // Refs for each face
    const faceRefs = {
        front: useRef(null),
        back: useRef(null),
        left: useRef(null),
        right: useRef(null),
    };
    const leftFaceIndex = useRef(0); // track which face should be dark
    const faceOrder = ['left', 'front', 'right', 'back'];

    useEffect(() => {
        // Rotate rightward
        rotationRef.current.y -= 90;

        // Move to next face in cycle
        leftFaceIndex.current = (leftFaceIndex.current + 1) % 4;
        const currentLeftFace = faceOrder[leftFaceIndex.current];

        // Animate to target rotation
        gsap.to(cubeRef.current, {
            rotationX: 0,
            rotationY: rotationRef.current.y,
            duration: 1,
            ease: 'expo',
            onStart: () => {
                // Reset all face backgrounds
                Object.keys(faceRefs).forEach((key) => {
                    faceRefs[key].current.style.background = 'var(--cube-right-background-color)';
                });
                // Apply dark background to current left face
                faceRefs[currentLeftFace].current.style.background = 'var(--cube-left-background-color)';
            }
        });
    }, [trigger]);

    return { cubeRef, faceRefs };
};
