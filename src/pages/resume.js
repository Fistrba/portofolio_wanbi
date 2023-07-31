import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { BiCodeAlt } from "react-icons/bi";

export default function Resume() {
  return (
    <div>
      <article className="mt-10" >
        <div className="flex items-center" >
          <h1 className="text-5xl font-r font-bold tracking-wider" >Resume</h1>
          <div className="w-[20%] h-[2px] ml-4 bg-gradient-to-r from-[#525ee1a2] to-[#525ee1]" ></div>
        </div>
        <div className="grid grid-cols-2 gap-10" >
            <div className="flex justify-center flex-col mt-6" >
              
              <div className="flex items-center" >
                <AcademicCapIcon className=" w-8 h-8 text-xl text-[#f86d03d5]" />
                <h3 className="ml-2 font-r text-2xl tracking-widest font-semibold text-[#5e5e5e]" >Education</h3>
              </div>
             
             <div className="mt-4" >
                <div className="bg-[#FFE3BF] flex flex-col rounded-xl p-5" >
                    <p className="text-[#1a100389] font-r text-sm tracking-widest" >2020-2021</p>
                    <h4 className="text-black font-r text-base font-medium tracking-wider py-2" >Software Development </h4>
                    <h4 className="text-black font-r text-sm font-medium tracking-wider"  >Moringa School</h4>
                </div>
                <div className="bg-[#FFE3BF] mt-4 flex flex-col rounded-xl p-5" >
                    <p className="text-[#1a100389] font-r text-sm tracking-widest" >2020-2021</p>
                    <h4 className="text-black font-r text-base font-medium tracking-wider py-2" >Software Development </h4>
                    <h4 className="text-black font-r text-sm font-medium tracking-wider"  >Moringa School</h4>
                </div>
             </div>

            </div>
            <div className="flex justify-center flex-col mt-4" >
              
              <div className="flex items-center" >
                <AcademicCapIcon className=" w-8 h-8 text-xl text-[#f86d03d5]" />
                <h3 className="ml-2 font-r text-2xl tracking-widest font-semibold text-[#5e5e5e]" >Education</h3>
              </div>
             
             <div className="mt-4" >
             <div className="bg-[#FFE3BF] flex flex-col rounded-xl p-5" >
                    <p className="text-[#1a100389] font-r text-sm tracking-widest" >2020-2021</p>
                    <h4 className="text-black font-r text-base font-medium tracking-wider py-2" >Software Development </h4>
                    <h4 className="text-black font-r text-sm font-medium tracking-wider"  >Moringa School</h4>
                </div>
                <div className="bg-[#FFE3BF] mt-4 flex flex-col rounded-xl p-5" >
                    <p className="text-[#1a100389] font-r text-sm tracking-widest" >2020-2021</p>
                    <h4 className="text-black font-r text-base font-medium tracking-wider py-2" >Software Development </h4>
                    <h4 className="text-black font-r text-sm font-medium tracking-wider"  >Moringa School</h4>
                </div>
             </div>

            </div>
        </div>
      </article>

      <article className="mt-24 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-10" >
        <div>
            
            <div className="flex items-center" >
                <h2 className="text-3xl font-r font-bold tracking-wider" >Works Skills</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-[2%] mt-5 " >

                <div className="bg-[#E1E8EF] text-center py-2 rounded-xl" >
                   <p className="font-r font-light tracking-wide text-sm text-black" >Next Js</p>
                </div>
                <div className="bg-[#E1E8EF] text-center py-2 rounded-xl"  >
                    <p className="font-r font-light tracking-wide text-sm text-black" >React Js</p>
                </div>
                <div className="bg-[#E1E8EF] text-center py-2 rounded-xl" >
                    <p className="font-r font-light tracking-wide text-sm text-black" >Html 5</p>
                </div>
                <div className="bg-[#E1E8EF] mt-2 text-center py-2 rounded-xl" >
                   <p className="font-r font-light tracking-wide text-sm text-black" >Css</p>
                </div>
                <div className="bg-[#E1E8EF] mt-2  text-center py-2 rounded-xl"  >
                    <p className="font-r font-light tracking-wide text-sm text-black" >JavaScript</p>
                </div>
                <div className="bg-[#E1E8EF] mt-2  text-center py-2 rounded-xl" >
                    <p className="font-r font-light tracking-wide text-sm text-black" >Tailwind</p>
                </div>
                <div className="bg-[#E1E8EF]  mt-2 text-center py-2 rounded-xl" >
                   <p className="font-r font-light tracking-wide text-sm text-black" >Angular</p>
                </div>
                <div className="bg-[#E1E8EF] mt-2  text-center py-2 rounded-xl"  >
                    <p className="font-r font-light tracking-wide text-sm text-black" >Git</p>
                </div>
                <div className="bg-[#E1E8EF] mt-2  text-center py-2 rounded-xl" >
                    <p className="font-r font-light tracking-wide text-sm text-black" >Swift</p>
                </div>


            
            </div>


        </div>

        <div>
            
            <div className="flex items-center" >
                <h2 className="text-3xl font-r font-bold tracking-wider" >Soft Skills</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-[5%] mt-5 " >

                <div className="bg-[#E1E8EF] text-center py-2 rounded-xl" >
                    <p className="font-r font-light tracking-wide text-sm text-black" >Management</p>
                </div>
                <div className="bg-[#E1E8EF] text-center py-2 rounded-xl"  >
                 <p className="font-r font-light tracking-wide text-sm text-black" >Mentorship</p>
                </div>
                <div className="bg-[#E1E8EF] mt-2 text-center py-2 rounded-xl" >
                 <p className="font-r font-light tracking-wide text-sm text-black" >Research</p>
                </div>


            
            </div>


        </div>
      </article>
    </div>
  )
}