import {Navigation} from "./components/navigation.tsx";
import {Outlet} from "react-router";
import {PageRoutes} from "./routes";

function App() {

    return <div className={'app'}  >
        <Navigation/>
        <PageRoutes/>
        <Outlet />
    </div>
}

export default App
