import {Background, ReactFlow} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialEdges, initialNodes} from "./constants.ts";
import {ImageNode} from "../components/canvasComponents/imageNode.tsx";

const nodeTypes = { ImageNode: ImageNode };

export const Canvas = () => {

  return <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} >
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>
}