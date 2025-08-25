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
import { Modal } from "../components/canvasComponents/modal.tsx";
import {
  nodeTypes,
} from "./constants.ts";
import { useState, useEffect, } from "react";
import { LoadingPage } from "../components/loading/loadingPage.tsx";
import {initialEdges, initialNodes, } from "./constants/nodes.ts";
import {useCanvasStore} from "../stores/canvasStore.ts";

export const Canvas = () => {
  const [isLoaded, setIsLoaded] = useState(false);

    return (
      <>
        {!isLoaded && <LoadingPage setIsLoaded={setIsLoaded} />}
        <div className={"canvas-container"}>
            <ReactFlowProvider>
                <div className={"canvas"} style={{ width: "100%", height: "100%" }}>
                    <AnimatedFlow setIsLoaded={setIsLoaded} />
                </div>
            </ReactFlowProvider>

        </div>
        <Modal />
      </>
  );
};

const AnimatedFlow = ({setIsLoaded}) => {
  // @ts-ignore
  const [nodes,setNodes , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const {selectedTag,canvasEdges, canvasNodes} = useCanvasStore();


  const { innerWidth: width, innerHeight: height } = window;
  const centerPoint={ x:  width / 2 - 100, y:  height / 2 - 70, zoom: 1 }

  const {dragEvents} = useLayoutedElements({centerPoint, width, height,selectedTag});

  useEffect(() => {
    if(selectedTag){
      setNodes(canvasNodes)
      setEdges(canvasEdges)
    } else {
      // When deselecting, restore all nodes
      setNodes(initialNodes)
      setEdges(canvasEdges)
    }
  }, [selectedTag]);

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


