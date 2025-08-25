import {Navigation} from "./components/navigation";
import {Cursor} from "./components/cursor";
import {Canvas} from "./pages/canvas";

function Layout() {
    return <>
        <Cursor />
        <Navigation />
        <Canvas />
    </>
}

export default Layout
