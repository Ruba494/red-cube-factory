import {Navigation} from "./components/navigation.tsx";
import { Outlet} from "react-router";
import {PageRoutes} from "./routes";
import {Cursor} from "./components/cursor.tsx";

function App() {
    return<div className={'app'}  >
        <Cursor/>
            <Navigation/>
            <PageRoutes/>
            <Outlet />
        </div>
}

export default App
