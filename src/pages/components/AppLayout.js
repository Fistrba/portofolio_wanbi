import CenterBar from "./CenterBar";
import LeftBar from "./LeftBar";
import Meta from "./Meta";
import TopBar from "./TopBar";

export default function AppLayout({children}) {
    return (
        <div id="app" >
            <Meta />
            <TopBar />
            <div className="container" >
                <LeftBar />
                <CenterBar>
                    {children}
                </CenterBar>
            </div>
        </div>
    )
}