import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoGithub, BiDownload, BiDownArrow, BiSolidDownload, BiCloudDownload} from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { SlLocationPin } from "react-icons/sl"
import { GiSmartphone } from "react-icons/gi"
import { useDark } from "src/context/DarkContext"

export default function LeftBar() {

    const { darkMode } = useDark()

    return(
        <div id="left_bar" className="mt-24 lg_mt-0 w-5/6 md:w-[50%] h-[50rem] lg:w-[37%] flex justify-end items-end relative" >
            <img src="/profile_pic.png" alt="profile" className="h-44 absolute top-0 left-1/2 -translate-x-1/2" />
            
            <div className={!darkMode ? "bg-white w-full h-[90%] rounded-xl shadow-md flex items-end" : "bg-[#181c54] w-full h-[90%] rounded-xl shadow-md flex items-end"}  >
                <div className="h-[90%] py-3 w-full flex justify-around items-center flex-col" >
                    <div className="flex justify-center items-center flex-col mx-auto" >
                        <h3 className={darkMode ? "font-bold font-r tracking-widest text-[#FFFFFF] text-3xl": "font-bold font-r tracking-widest text-[#0B0909] text-3xl"} >Peter Wanbi</h3>
                        <p className={!darkMode ? "text-[#0B0909] text-lg font-r" :"text-[#FFFFFF] text-lg font-r" } >Frontend Developer</p>
                    </div>
                    <div className="flex justify-center items-center mx-auto" >
                        <BiLogoFacebook className="text-6xl bg-[#F2F7FC] text-[#525FE1] p-5 mx-1 rounded-lg cursor-pointer  hover:scale-105 transition-transform" />
                        <BiLogoLinkedin className="text-6xl bg-[#F2F7FC] text-[#525FE1] p-5 mx-1 rounded-lg cursor-pointer  hover:scale-105 transition-transform" />
                        <BiLogoTwitter  className="text-6xl bg-[#F2F7FC] text-[#525FE1] p-5 mx-1 rounded-lg cursor-pointer  hover:scale-105 transition-transform"/>
                        <BiLogoGithub  className="text-6xl bg-[#F2F7FC] text-[#525FE1] p-5 mx-1 rounded-lg  cursor-pointer hover:scale-105 transition-transform"/>
                    </div>
                    <div className="w-4/5 rounded-xl mt-2 mb-2 shadow-sm p-4 pb-2 bg-[#F2F7FC]" >
                        <div className="w-[95%] mx-auto bg-[#F2F7FC] transition-all cursor-pointer" >
                          <div className="flex py-4 px-1 items-center border-b-[1px] border-[#e4e4e4bc]" >
                            <GiSmartphone  className="text-xl text-[#525FE1] mr-3" />
                            <div>
                                <h4 className="text-lg leading-none text-[#969696] font-r " >Phone</h4>
                                <p className="text-base text-[#323232] font-r" >+86 997 766 668</p>
                            </div>
                          </div>
                          <div className="flex py-5 px-1 items-center border-b-[1px] border-[#e4e4e4bc]" >
                            <MdEmail  className="text-xl text-[#525FE1] mr-3" />
                            <div>
                            <h4 className="text-lg leading-none text-[#969696] font-r " >Phone</h4>
                                <p className="text-base text-[#323232] font-r" >peterwanbi@wanbi.com</p>
                            </div>
                          </div>
                          <div className="flex py-5 px-1 items-center border-b-[1px] border-[#e4e4e4bc]" >
                            <SlLocationPin className="text-xl text-[#525FE1] mr-3" />
                            <div>
                                 <h4 className="text-lg leading-none text-[#969696] font-r " >Location</h4>
                                <p className="text-base text-[#323232] font-r" >Abu dabi, 9</p>
                            </div>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-[#525ee1a2] to-[#525ee1] mt-5 mb-2 text-white flex justify-center items-center mx-auto py-3 px-7 rounded-lg text-sm" ><BiCloudDownload className="mr-2" /> Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}