import {
  Background,
  ReactFlow,
  ReactFlowProvider, useEdgesState,
  useNodesState,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {useLayoutedElements} from "../utils/useLayoutedElements.ts";
import {CanvasContextProvider} from "../components/canvasComponents/canvasContext.tsx";
import {Modal} from "../components/canvasComponents/modal.tsx";
import {initialEdges, initialNodes} from "./constants/nodes.ts";
import {nodeTypes} from "./constants.ts";
import {useState} from "react";
import {LoadingPage} from "../components/loading/loadingPage.tsx";
import {SpinningCube} from "../components/spinningCube.tsx";


export const Canvas = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  return<CanvasContextProvider>
    {!isLoaded&&<LoadingPage setIsLoaded={setIsLoaded}/>}
    {/*{true && <SpinningCube/>}*/}
    <div className={'canvas-container'}>
        <ReactFlowProvider >
          <div  className={'canvas'} style={{ width: '100%', height: '100%' }}>
            <Flow setIsLoaded={setIsLoaded}/>
          </div>
        </ReactFlowProvider>
    </div>
    <Modal/>
  </CanvasContextProvider>
}


const Flow = ({setIsLoaded}) => {
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
    <Background variant={BackgroundVariant.Dots} gap={12} size={1}  color="#f00" />
  </ReactFlow>
}