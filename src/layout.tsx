import {Navigation} from "./components/navigation.tsx";
import {Cursor} from "./components/cursor.tsx";
import {Canvas} from "./pages/canvas.tsx";

function Layout() {
    return <>
        <Cursor />
        <Navigation />
        <Canvas />
    </>
}

export default Layout
