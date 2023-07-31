import { HomeIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import { PresenceContext } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiSolidContact } from "react-icons/bi";
import { MdContactSupport, MdWork, MdWorkOutline } from "react-icons/md";

export default function CenterBar({ children }) {

    const router = useRouter()
    const pathname = router.pathname

    return (
        <div id="center" className="bg-white w-[95%] lg:w-[60%] h-[90%] rounded-xl shadow-md mt-10 lg:mt-0 py-5" >
            <div className="menu-bar px-5 lg:px-10" >
                <ul className="p-2 shadow-xl rounded-xl  bg-[#F2F7FC] flex w-[90%] lg:w-[70%] justify-between " >
                    <Link href={"/"} className={`${pathname === "/" ? "bg-[#525FE1] text-white" : "bg-[#E1E8EF] text-[#606060]"} cursor-pointer hover:text-white transition-all hover:bg-[#525FE1] flex justify-center items-center flex-col w-[24%] py-6 rounded-xl`} >
                        <div  className="flex justify-center items-center flex-col font-f uppercase text-xs font-normal" ><HomeIcon className="w-6 h-6 p-1" /><span className="mt-2" >Home</span></div>
                    </Link>
                    <Link href={"/resume"} className={`${pathname === "/resume" ? "bg-[#525FE1] text-white" : "bg-[#E1E8EF] text-[#606060]"} cursor-pointer transition-all hover:text-white hover:bg-[#525FE1] text-[#606060] flex justify-center items-center flex-col w-[24%] rounded-xl`} >
                        <div  className="flex justify-center items-center flex-col font-f uppercase text-xs font-normal" ><ListBulletIcon className="w-6 h-6 p-1" /><span className="mt-2" >Resume</span></div>
                    </Link>
                    <Link  href={"/work"} className="bg-[#E1E8EF] cursor-pointer transition-all  hover:text-white hover:bg-[#525FE1] text-[#606060] flex justify-center items-center flex-col w-[24%] rounded-xl" >
                        <div className="flex justify-center items-center flex-col font-f uppercase text-xs font-normal" ><MdWorkOutline className="w-6 h-6 p-1" /><span className="mt-2" >Work</span></div>
                    </Link>
                    <Link  href={"/contact"} className="bg-[#E1E8EF] cursor-pointer transition-all  hover:text-white hover:bg-[#525FE1] text-[#606060] flex justify-center items-center flex-col w-[24%] rounded-xl" >
                        <div className="flex justify-center items-center flex-col font-f uppercase text-xs font-normal" ><BiSolidContact className="w-6 h-6 p-1" /><span className="mt-2" >Contact</span></div>
                    </Link>
                </ul>
            </div>
            <div className=" px-5 lg:px-10">
                {children}
            </div>
        </div>
    )
}