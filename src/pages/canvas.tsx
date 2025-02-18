import {
  Background,
  ReactFlow,
  ReactFlowProvider, useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialEdges, initialNodes, nodeTypes} from "./constants.ts";
import {useLayoutedElements} from "../utils/useLayoutedElements.ts";
import {CanvasContextProvider} from "../components/canvasComponents/canvasContext.tsx";
import {Dialog} from "../components/canvasComponents/Dialog.tsx";


export const Canvas = () => {
  return <div className={'canvas-container'}>
    <CanvasContextProvider>
      <ReactFlowProvider >
        <div  className={'canvas'} style={{ width: '100vw', height: '100vh' }}>
          <Flow/>
        </div>
      </ReactFlowProvider>
      <Dialog/>
    </CanvasContextProvider>
  </div>
}





const Flow = () => {
  const [nodes,setNodes , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { innerWidth: width, innerHeight: height } = window;
  const centerPoint={ x:  width / 2 - 100, y:  height / 2 - 70, zoom: 1 }
  
  const [initialized, { toggle, isRunning }, dragEvents] =
      useLayoutedElements(centerPoint,width,height);


  return   <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}

  onlyRenderVisibleElements
                      onNodesChange={onNodesChange}
                      onEdgesChange={onEdgesChange}
                      onNodeDragStart={dragEvents.start}
                      onNodeDrag={dragEvents.drag}
                      onNodeDragStop={dragEvents.stop}
                      fitView={true}
                      panOnDrag
                      viewport={centerPoint}
  >
    <Background variant="dots" gap={12} size={1} />
  </ReactFlow>
}