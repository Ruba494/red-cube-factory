import { useRef} from "react";
import {useAutoFontSize} from "../utils/useAutoFontSize";

const AutoFitText = ({ children }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const fontSize = useAutoFontSize(containerRef, textRef);


    return (
        <div
            ref={containerRef}
            style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
        >
            <div ref={textRef} style={{ fontSize: fontSize + "px", whiteSpace: "nowrap" }}>
                {children}
            </div>
        </div>
    );
};

export default AutoFitText;
