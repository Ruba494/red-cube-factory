import {Home} from "../pages/home.tsx";
import {AboutMe} from "../pages/aboutMe.tsx";
import {Designs} from "../pages/designs.tsx";
import {Route, Routes} from "react-router";
import {AnotherCanvasContainer} from "../pages/anotherCanvas.tsx";
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
        element: <Home/>,
        index: true,
    },
    {
        id: PATHS_CONSTANTS.ABOUT_ME,
        path: PATHS_CONSTANTS.ABOUT_ME,
        element: <AboutMe/>,
        index: false,
    },
    {
        id: PATHS_CONSTANTS.DESIGNS,
        path: PATHS_CONSTANTS.DESIGNS,
        element: <Designs/>,
        index: false,
    },
    {
        id: PATHS_CONSTANTS.CANVAS,
        path: PATHS_CONSTANTS.CANVAS,
        element: <Canvas/>,
        index: false,
    },
    {
        id: PATHS_CONSTANTS.ANOTHER_CANVAS,
        path: PATHS_CONSTANTS.ANOTHER_CANVAS,
        element: <AnotherCanvasContainer/>,
        index: false,
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