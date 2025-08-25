import { create } from "zustand"
import {initialEdges, initialNodes, INodeData, NodeTypes} from "../pages/constants/nodes";

interface ISelectedNodeData extends INodeData{
    type:NodeTypes
}
export interface ISelectedNode {
    data:ISelectedNodeData
    ref:any
}
type ImgMap = Record<string, HTMLImageElement>;


interface CanvasState {
    selectedNode: ISelectedNode | null
    setSelectedNode: (node: ISelectedNode | null) => void

    canvasNodes: any
    setCanvasNodes: (nodes: any) => void

    canvasEdges: any
    setCanvasEdges: (edges: any) => void

    selectedTag: string | null
    setSelectedTag: (tag: string | null) => void

    // global startup images
    preloadedImages: ImgMap;
    setPreloadedImages: (imgs: ImgMap) => void;


    galleryPreloadedImages: Record<string, Record<string, HTMLImageElement>> | null;
    setGalleryPreloadedImages: (accessor: string, imgs: Record<string, HTMLImageElement>) => void;

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


    preloadedImages: null,
    setPreloadedImages: (images) => set({ preloadedImages: images }),

    galleryPreloadedImages: {},
    setGalleryPreloadedImages: (accessor, imgs) =>
        set((state) => {
            const existing = state.galleryPreloadedImages[accessor] ?? {};
            return {
                galleryPreloadedImages: {
                    ...state.galleryPreloadedImages,
                    [accessor]: { ...existing, ...imgs },
                },
            };
        }),

}))
