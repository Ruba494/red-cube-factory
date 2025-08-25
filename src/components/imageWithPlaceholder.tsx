import {cloneElement, useState} from "react";

export const ImageWithPlaceholder = ({ children,  }) => {
    const [loaded, setLoaded] = useState(false);

    // Ensure the child triggers onLoad
    const childWithOnLoad =
        children && typeof children === "object"
            ? cloneElement(children as any, {
                onLoad: () => setLoaded(true),
                style: {
                    ...(children as any).props.style,
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                },
            })
            : children;

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {!loaded && (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    {<div style={{ background: "#f00", width: "100%", height: "100%" }} />}
                </div>
            )}
            {childWithOnLoad}
        </div>
    );
}