import {Background, ReactFlow, ReactFlowProvider, useNodesState} from "@xyflow/react";
import {initialNodes, nodeTypes} from "./constants.ts";
import '@xyflow/react/dist/style.css';

const getLayoutedElements = (nodes,) => {
    const getRandomPosition = (containerWidth, containerHeight, nodeWidth, nodeHeight) => {
        const x = Math.floor(Math.random() * (containerWidth - nodeWidth));
        const y = Math.floor(Math.random() * (containerHeight - nodeHeight));
        return { x, y };
    }

    const isOverlappingRect = (rect1, rect2) => {
        // Two rectangles do not overlap if one is completely to the left/right or above/below the other.
        if (rect1.x + rect1.width <= rect2.x || rect2.x + rect2.width <= rect1.x) {
            return false;
        }
        if (rect1.y + rect1.height <= rect2.y || rect2.y + rect2.height <= rect1.y) {
            return false;
        }
        return true;
    };

    const { innerWidth: containerWidth, innerHeight: contianerHeight } = window;
    const generateUniquePositions = () => {
        const positions = [];
        const positionedNodes = [];

        nodes.forEach((node) => {
            let position;
            let isOverlapping;
            let newRect;

            try {
                do {
                    position = getRandomPosition(containerWidth,contianerHeight,node.width,node.height);
                    newRect = { x: position.x, y: position.y ,width: node.width,height: node.height};

                    isOverlapping = positions.some(
                        (existingNode) => isOverlappingRect({
                            ...existingNode, width: node.width,height: node.height
                        }, newRect)
                    );

                } while (isOverlapping);
            }catch (e) {
                console.log(e)
            }

            positions.push(position);
            positionedNodes.push({
                ...node,
                position:position
            })
        });

        return positionedNodes;
    }

    const newNodes=generateUniquePositions()
    return { nodes: newNodes };
};

const AnotherCanvas = () => {
    const { nodes: layoutedNodes } = getLayoutedElements(
        initialNodes,
    );

    const [nodes,setNodes , onNodesChange] = useNodesState(layoutedNodes);

    return <ReactFlow nodes={nodes} edges={[]}
               nodeTypes={nodeTypes}
               onlyRenderVisibleElements
               onNodesChange={onNodesChange}
               fitView={true}
    >
        <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
}


export const AnotherCanvasContainer = () => {
    return <ReactFlowProvider>
        <div  className={'canvas'} id={'canvas'} style={{ width: '100vw', height: '100vh' }}>
            <AnotherCanvas/>
        </div>
    </ReactFlowProvider>
}