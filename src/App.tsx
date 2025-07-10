import {Navigation} from "./components/navigation.tsx";
import {BrowserRouter, Outlet, useLocation,} from "react-router";
import {PageRoutes, PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "./routes";
import {Cursor} from "./components/cursor.tsx";
import {GoToTemplates} from "./components/templatesComponents/goToTemplates.tsx";
function App() {
    const location = useLocation();
    const isTemplatePage = location.pathname === PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.TEMPLATES];
    return <BrowserRouter basename="/red-cube-factory">
        <div className={'app'}  >
            <Cursor/>
            {!isTemplatePage&&<GoToTemplates/>}
            <Navigation/>
            <PageRoutes/>
            <Outlet />
        </div>
    </BrowserRouter>

}

export default App
