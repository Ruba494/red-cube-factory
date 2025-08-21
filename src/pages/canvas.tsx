import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useLayoutedElements } from "../utils/useLayoutedElements.ts";
import {
  CanvasContext,
} from "../components/canvasComponents/canvasContext.tsx";
import { Modal } from "../components/canvasComponents/modal.tsx";
import {
  nodeTypes,
} from "./constants.ts";
import { useContext, useState, useEffect } from "react";
import { LoadingPage } from "../components/loading/loadingPage.tsx";
import {initialEdges, initialNodes, NodeTypesEnum} from "./constants/nodes.ts";
import {Profile} from "../components/canvasComponents/profile.tsx";
import {ImageNode} from "../components/canvasComponents/imageNode.tsx";
import {Info} from "../components/canvasComponents/info.tsx";

export const Canvas = () => {
  const [isLoaded, setIsLoaded] = useState(false);

    const {selectedTag} = useContext(CanvasContext);

    return (
      <>
        {!isLoaded && <LoadingPage setIsLoaded={setIsLoaded} />}
        <div className={"canvas-container"}>
            {selectedTag!==null? <ReactFlowProvider>
                <div className={"canvas"} style={{ width: "100%", height: "100%" }}>
                    <GridFlow setIsLoaded={setIsLoaded} />
                </div>
            </ReactFlowProvider>:  <ReactFlowProvider>
                <div className={"canvas"} style={{ width: "100%", height: "100%" }}>
                    <AnimatedFlow setIsLoaded={setIsLoaded} />
                </div>
            </ReactFlowProvider>
            }
        </div>
        <Modal />
      </>
  );
};

const AnimatedFlow = ({setIsLoaded}) => {
  // @ts-ignore
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const { innerWidth: width, innerHeight: height } = window;
  const centerPoint={ x:  width / 2 - 100, y:  height / 2 - 70, zoom: 1 }
  
  const {dragEvents} = useLayoutedElements({centerPoint, width, height});

  // @ts-ignore
  return <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}
                      onNodesChange={onNodesChange}
                      onEdgesChange={onEdgesChange}
                      onNodeDragStart={dragEvents.start}
                      onNodeDrag={dragEvents.drag}
                      onNodeDragStop={dragEvents.stop}
                      fitView={true}
                      panOnDrag
                      zoomOnScroll
                    onInit={()=>{
                      setTimeout(()=>{
                        setIsLoaded(true)
                      },1000)
                    }}
  >
    <Background variant={BackgroundVariant.Dots} gap={12} size={1}  color="var(--color-ruba-red)" />
  </ReactFlow>
}

const GridFlow = ({ setIsLoaded }) => {
    const { canvasEdges, canvasNodes } = useContext(CanvasContext);


    const [nodes, setNodes, ] = useNodesState([]);
    const [edges, setEdges, ] = useEdgesState([]);

    // Node size (match your node component)
    let nodeWidth=222;
    let nodeHeight=86;
    let columns=3;
    const xGap = 20; // horizontal gap between nodes
    const yGap = 20; // vertical gap between nodes

    if(canvasNodes.length>0 && canvasNodes[0].type !==  NodeTypesEnum.templateNode){
        nodeWidth=200;
        nodeHeight=200;
        columns = 4; // fixed number of columns
    }


    useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;

        const rows = Math.ceil(canvasNodes.length / columns);

        const totalWidth = columns * (nodeWidth + xGap) - xGap;
        const totalHeight = rows * (nodeHeight + yGap) - yGap;

        const offsetX = width / 2 - totalWidth / 2;
        const offsetY = height / 2 - totalHeight / 2;

        const gridNodes = canvasNodes.map((node, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;

            return {
                ...node,
                position: {
                    x: col * (nodeWidth + xGap) + offsetX,
                    y: row * (nodeHeight + yGap) + offsetY,
                },
                draggable: false,
            };
        });

        setNodes(gridNodes);
        setEdges(canvasEdges);
    }, [canvasNodes, canvasEdges, setNodes, setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            panOnDrag={false}
            zoomOnScroll={true}
        >
            <Background variant={BackgroundVariant.Dots} gap={12} size={1}  color="var(--color-ruba-red)" />
        </ReactFlow>
    );
};


