import {Route, Routes} from "react-router";
import {Canvas} from "../pages/canvas.tsx";

export enum PATHS_CONSTANTS_ENUM {
    HOME = 'HOME',
    CANVAS = 'CANVAS',
    ANOTHER_CANVAS = 'ANOTHER_CANVAS',
    ABOUT_ME = 'ABOUT_ME',
    DESIGNS = 'DESIGNS'
}

export const PATHS_CONSTANTS = {
    [PATHS_CONSTANTS_ENUM.HOME]: "/",
    [PATHS_CONSTANTS_ENUM.CANVAS]: "/canvas",
    [PATHS_CONSTANTS_ENUM.ANOTHER_CANVAS]: "/another-canvas",
    [PATHS_CONSTANTS_ENUM.ABOUT_ME]: "/about-me",
    [PATHS_CONSTANTS_ENUM.DESIGNS]: "/designs/:id?",
};

export const ROUTES = [
    {
        id: PATHS_CONSTANTS.HOME,
        path: PATHS_CONSTANTS.HOME,
        element:  <Canvas/>,
        index: true,
    },
];


export const PageRoutes = () => {
    return (
        <Routes>
            {
                ROUTES.map(route => {
                    return <Route
                        index={route.index}
                        path={route.path}
                        element={route.element}
                    />
                })

            }
        </Routes>
    )
}