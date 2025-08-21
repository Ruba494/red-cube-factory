import {Navigation} from "./components/navigation.tsx";
import { Outlet, useLocation,} from "react-router";
import {PageRoutes, PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "./routes";
import {Cursor} from "./components/cursor.tsx";
import {GoToTemplates} from "./components/templatesComponents/goToTemplates.tsx";
import {CanvasContextProvider} from "./components/canvasComponents/canvasContext.tsx";
function App() {
    console.log("React mounted")
    const location = useLocation();
    const isTemplatePage = location.pathname === PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.TEMPLATES];
    return<div className={'app'}  >
        <CanvasContextProvider>
        <Cursor/>
            {/*{!isTemplatePage&&<GoToTemplates/>}*/}
            <Navigation/>
            <PageRoutes/>
            <Outlet />
      </CanvasContextProvider>
        </div>

}

export default App
