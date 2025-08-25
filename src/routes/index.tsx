import {Route, Routes} from "react-router";
import Layout from "../layout";

export enum PATHS_CONSTANTS_ENUM {
    HOME = 'HOME',
}

export const PATHS_CONSTANTS = {
    [PATHS_CONSTANTS_ENUM.HOME]: "/:tag?",
};

export const ROUTES = [
    {
        id: PATHS_CONSTANTS.HOME,
        path: PATHS_CONSTANTS.HOME,
        element:  <Layout/>,
        index: true,
    }
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