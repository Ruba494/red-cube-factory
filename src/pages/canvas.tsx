import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {LoadingPage} from "../components/loading/loadingPage";
import {initialEdges, initialNodes, NodeTypesEnum} from "./constants/nodes";
import {useCanvasStore} from "../stores/canvasStore";
import {useLayoutedElements} from "../utils/useLayoutedElements";
import {nodeTypes} from "./constants";
import {useEffect, useState} from "react";
import {Modal} from "../components/canvasComponents/modal";


export const Canvas = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {setSelectedNode, visited,checkFirstVisit}=useCanvasStore()
  useEffect(() => {
    checkFirstVisit(); // initialize visited on mount
  }, []);

  useEffect(() => {
    if (isLoaded && !visited) {
      const timer = setTimeout(() => {
        setSelectedNode({ data: { type: NodeTypesEnum.onBoarding }, ref: null });
        useCanvasStore.getState().setVisited(); // mark as visited
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, visited, setSelectedNode]);

    return (
      <>
        {!isLoaded ? <LoadingPage setIsLoaded={setIsLoaded} />
        :
            <div className={"canvas-container"}>
      <ReactFlowProvider>
          <div className={"canvas"} style={{ width: "100%", height: "100%" }}>
              <AnimatedFlow setIsLoaded={setIsLoaded} />
          </div>
      </ReactFlowProvider>
      </div>
        }
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
        // @ts-ignore
      setNodes(initialNodes)
      setEdges(canvasEdges)
    }
  }, [selectedTag]);

  return <ReactFlow nodes={nodes} edges={edges}
                     // @ts-ignore
                    nodeTypes={nodeTypes}
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
                        // setIsLoaded(true)
                      },1000)
                    }}
  >
    <Background variant={BackgroundVariant.Dots} gap={12} size={1}  color="var(--color-ruba-red)" />
  </ReactFlow>
}


