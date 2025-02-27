import {createContext, useState} from "react";
import {INodeData, NodeTypes} from "../../pages/constants/nodes.ts";

interface ICanvasContext {
    selectedNode:ISelectedNode | null;
    setSelectedNode:any
}
export const CanvasContext = createContext<ICanvasContext>({
    selectedNode:null,
    setSelectedNode:()=>{}
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
    return <CanvasContext.Provider value={{
        selectedNode: selectedNode,
        setSelectedNode: setSelectedNode,
    } }>
        {children}
    </CanvasContext.Provider>
}