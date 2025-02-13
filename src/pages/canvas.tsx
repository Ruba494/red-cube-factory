import {
  Background,
  ReactFlow,
  ReactFlowProvider, useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialEdges, initialNodes} from "./constants.ts";
import {ImageNode} from "../components/canvasComponents/imageNode.tsx";
import { useEffect } from "react";
import {useLayoutedElements} from "../utils/useLayoutedElements.ts";
import {EmojiNode} from "../components/canvasComponents/emojiNode.tsx";

const nodeTypes = {
  ImageNode: ImageNode,
  EmojiNode:EmojiNode
};
export const Canvas = () => {
  return <ReactFlowProvider>
    <div style={{ width: '100vw', height: '100vh' }}>
      <Flow/>
    </div>
  </ReactFlowProvider>

}



const Flow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [initialized, { toggle, isRunning }, dragEvents] =
      useLayoutedElements();

  useEffect(() => {
    if(initialized&& !isRunning()) {
      toggle()
    }else {
      console.log(nodes)
    }
  }, [initialized]);

  return   <ReactFlow nodes={nodes??[]} edges={edges} nodeTypes={nodeTypes}
                      onNodesChange={onNodesChange}
                      onEdgesChange={onEdgesChange}
                      onNodeDragStart={dragEvents.start}
                      onNodeDrag={dragEvents.drag}
                      onNodeDragStop={dragEvents.stop}
                      fitView={true}
                      zoomOnScroll
                      zoomOnPinch
                      panOnDrag>
    <Background variant="dots" gap={12} size={1} />
  </ReactFlow>
}