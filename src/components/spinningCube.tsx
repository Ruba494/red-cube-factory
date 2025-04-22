import AutoFitText from "./autoFitText.tsx";
import {useRotatingCube} from "../utils/useRotatingCube.ts";

export const SpinningCube = ({counter}) => {
    const {
        cubeRef,
        faceRefs
    } = useRotatingCube(counter);


    return (
        <div className="scene">
            <div className={'camera'}>
                <div className="cube" ref={cubeRef}>
                    <div className="face front" ref={faceRefs.front}>
                        <AutoFitText>{counter}</AutoFitText>
                    </div>
                    <div className="face back" ref={faceRefs.back}>
                        <AutoFitText>{counter}</AutoFitText>
                    </div>
                    <div className="face right" ref={faceRefs.right}>
                         <AutoFitText>{counter}</AutoFitText>
                    </div>
                    <div className="face left" ref={faceRefs.left}>
                          <AutoFitText>{counter}</AutoFitText>
                    </div>
                    <div className="face top"/>
                    <div className="face bottom">
                           <AutoFitText>{counter}</AutoFitText>
                    </div>
                </div>
            </div>
        </div>
    );
};
