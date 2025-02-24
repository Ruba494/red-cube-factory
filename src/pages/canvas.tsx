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
import {Modal} from "../components/canvasComponents/modal.tsx";


export const Canvas = () => {
  return<CanvasContextProvider>
    <div className={'canvas-container'}>
        <ReactFlowProvider >
          <div  className={'canvas'} style={{ width: '100%', height: '100%' }}>
            <Flow/>
          </div>
        </ReactFlowProvider>

    </div>
    <Modal/>
  </CanvasContextProvider>
}


const Flow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const { innerWidth: width, innerHeight: height } = window;
  const centerPoint={ x:  width / 2 - 100, y:  height / 2 - 70, zoom: 1 }
  
  const [,, dragEvents] =
      useLayoutedElements(centerPoint,width,height);


  return <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}
  onlyRenderVisibleElements
                      onNodesChange={onNodesChange}
                      onEdgesChange={onEdgesChange}
                      onNodeDragStart={dragEvents.start}
                      onNodeDrag={dragEvents.drag}
                      onNodeDragStop={dragEvents.stop}
                      fitView={true}
                      panOnDrag
                      zoomOnScroll
  >
    <Background variant="dots" gap={12} size={1} />
  </ReactFlow>
}