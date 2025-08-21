import {createContext, useState} from "react";
import {initialEdges, initialNodes, INodeData, NodeTypes} from "../../pages/constants/nodes.ts";

interface ICanvasContext {
    selectedNode:ISelectedNode | null;
    setSelectedNode:any
    canvasNodes: any | null;
    setCanvasNodes:any
    canvasEdges: any | null;
    setCanvasEdges:any
    selectedTag: string | null;
    setSelectedTag: any;
}
export const CanvasContext = createContext<ICanvasContext>({
    selectedNode:null,
    setSelectedNode:()=>{} ,
    canvasNodes:null,
    setCanvasNodes:()=>{},
    canvasEdges:null,
    setCanvasEdges:()=>{},
    selectedTag: null,
    setSelectedTag: () => {},
});

interface ISelectedNodeData extends INodeData{
    type:NodeTypes
}
export interface ISelectedNode {
    data:ISelectedNodeData
    ref:any
}
export const CanvasContextProvider = ({children}:any) => {
    const [selectedNode, setSelectedNode] = useState<ISelectedNode|null>(null);
    const [canvasNodes, setCanvasNodes] = useState(initialNodes);
    const [canvasEdges, setCanvasEdges] = useState(initialEdges);
    const [selectedTag, setSelectedTag] = useState<string|null>(null);

    return <CanvasContext.Provider value={{
        selectedNode: selectedNode,
        setSelectedNode: setSelectedNode,
        canvasNodes:canvasNodes,
        setCanvasNodes:setCanvasNodes,
        canvasEdges:canvasEdges,
        setCanvasEdges:setCanvasEdges,
        selectedTag: selectedTag,
        setSelectedTag: setSelectedTag,
    } }>
        {children}
    </CanvasContext.Provider>
}