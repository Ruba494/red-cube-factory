import { create } from "zustand"
import {initialEdges, initialNodes, INodeData, NodeTypes} from "../pages/constants/nodes";

interface ISelectedNodeData extends INodeData{
    type:NodeTypes
}
export interface ISelectedNode {
    data:ISelectedNodeData
    ref:any
}

interface CanvasState {
    selectedNode: ISelectedNode | null
    setSelectedNode: (node: ISelectedNode | null) => void

    canvasNodes: any
    setCanvasNodes: (nodes: any) => void

    canvasEdges: any
    setCanvasEdges: (edges: any) => void

    selectedTag: string | null
    setSelectedTag: (tag: string | null) => void
}

export const useCanvasStore = create<CanvasState>((set) => ({
    selectedNode: null,
    setSelectedNode: (node) => set({ selectedNode: node }),

    canvasNodes: initialNodes,
    setCanvasNodes: (nodes) => set({ canvasNodes: nodes }),

    canvasEdges: initialEdges,
    setCanvasEdges: (edges) => set({ canvasEdges: edges }),

    selectedTag: null,
    setSelectedTag: (tag) => set({ selectedTag: tag }),
}))
