import {createContext, useState} from "react";

export const CanvasContext = createContext({});

export const CanvasContextProvider = ({children}) => {

    const [selectedNode, setSelectedNode] = useState(null);
    const [isDialogOpened, setIsDialogOpened] = useState(false);
    return <CanvasContext.Provider value={{
        selectedNode: selectedNode,
        setSelectedNode: setSelectedNode,
        isDialogOpened:isDialogOpened,
        setIsDialogOpened:setIsDialogOpened,
    } }>
        {children}
    </CanvasContext.Provider>
}