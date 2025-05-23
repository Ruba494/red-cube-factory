import {createContext, useState} from "react";
import {INodeData, NodeTypes} from "../../pages/constants/nodes.ts";

interface ITemplateContext {
    selectedNode:ISelectedNode | null;
    setSelectedNode:any
}
export const TemplateContext = createContext<ITemplateContext>({
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
export const TemplateContextProvider = ({children}:any) => {
    const [selectedNode, setSelectedNode] = useState<ISelectedNode|null>(null);
    return <TemplateContext.Provider value={{
        selectedNode: selectedNode,
        setSelectedNode: setSelectedNode,
    } }>
        {children}
    </TemplateContext.Provider>
}