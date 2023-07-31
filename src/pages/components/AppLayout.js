import { useDark } from "src/context/DarkContext";
import CenterBar from "./CenterBar";
import LeftBar from "./LeftBar";
import Meta from "./Meta";
import TopBar from "./TopBar";

export default function AppLayout({children}) {

    const { darkMode } = useDark()

    return (
        <div id="app" className={!darkMode ? "bg-[#F2F5F9]  transition-colors pb-20 lg:pb-0" : "bg-[#0c0e2d] transition-colors pb-20 lg:pb-0"} >
                <Meta />
                <TopBar />
                <div className="wrapper lg:pb-0 flex justify-center items-start  lg:items-center" >
                    <div className="container  content-wrp px-5 flex-col justify-center lg:flex-row flex mx-auto lg:justify-between  items-center lg:items-end" >
                        <LeftBar />
                        <CenterBar>
                            {children}
                        </CenterBar>
                    </div>
                </div>
        </div>
    )
}