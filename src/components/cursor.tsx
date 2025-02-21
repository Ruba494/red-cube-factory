import AnimatedCursor from "react-animated-cursor";
export const Cursor = () => {
        return <AnimatedCursor
            innerSize={8}
            outerSize={8}
            outerScale={5.5}
            outerAlpha={0.9}
            outerStyle={{
                borderRadius:'0'
            }}
            innerStyle={{
                borderRadius:'0'
            }}
            color='255, 0, 0'
            clickables={[
                'a',
                'button',
                '.react-flow__node',
                '.navigation__list-item'
            ]}
        />
}