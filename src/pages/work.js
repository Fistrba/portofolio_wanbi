import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";

export default function Work() {


   const [filter, setFilter] = useState("all") 

   const works = [
    {
    id: 1,
    type: "app",
    typeName: "App development",
    img: "https://i.postimg.cc/mk3qJFSz/pexels-thisisengineering-3912958.jpg",
    name: "Smart Bank App"
   },
    {
    id: 2,
    type: "web",
    typeName: "Web development",
    img: "https://i.postimg.cc/Y96bCBLT/pexels-christina-morillo-1181467.jpg",
    name: "Next js"
   },
    {
    id: 3,
    type: "design",
    typeName: "UI/UX",
    img: "https://i.postimg.cc/jSBX6SzG/pexels-jess-bailey-designs-1764436.jpg",
    name: "Rental"
   },
    {
    id: 4,
    type: "web",
    typeName: "Web Apps",
    img: "https://i.postimg.cc/t4F1fR00/pexels-mart-production-7088530.jpg",
    name: "Web Develeopent"
   },
    {
    id: 5,
    type: "mentor",
    typeName: "Mentorship",
    img: "https://i.postimg.cc/Hn7Wy3dG/pexels-mart-production-7644076.jpg",
    name: "Tech Mentor"
   },

   ]

  return (
    <div className="w-full h-[48rem]" >
      <article className="mt-10" >
        <div className="flex items-center" >
          <h1 className="text-5xl font-r font-bold tracking-wider" >Work</h1>
          <div className="w-[20%] h-[2px] ml-4 bg-gradient-to-r from-[#525ee1a2] to-[#525ee1]" ></div>
        </div>
      </article>
      <article className="mt-10" >
        <div>
            <ul className="flex w-full items-center justify-start" >
                <li  onClick={() => setFilter("all")} className={`${filter === "all" ? "text-[#525FE1]" : "text-[#57657A]"} mr-3 font-r cursor-pointer`} >All</li>
                <li  onClick={() => setFilter("app")}  className={`${filter === "app" ? "text-[#525FE1]" : "text-[#57657A]"} mr-3 font-r cursor-pointer`} >App development</li>
                <li  onClick={() => setFilter("web")}  className={`${filter === "web" ? "text-[#525FE1]" : "text-[#57657A]"} mr-3 font-r cursor-pointer`} >Web development</li>
                <li  onClick={() => setFilter("design")}  className={`${filter === "design" ? "text-[#525FE1]" : "text-[#57657A]"} mr-3 font-r cursor-pointer `} >Design</li>
                <li  onClick={() => setFilter("mentor")}  className={`${filter === "mentor" ? "text-[#525FE1]" : "text-[#57657A]"} mr-3 font-r cursor-pointer`} >Mentorship</li>
            </ul>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-5 mb-3" >
            {filter !== "all" && works.filter((w) => {return w.type === filter}).map((w) => (
                <div className="p-3 bg-[#525ee111] rounded-xl shadow-md cursor-pointer" >
                <div>
                    <img src={w.img} className="w-full h-28 border" alt="img" />
                </div>
                <div className="p-2" >
                    <p className="text-[#1a100350] mt-2 leading-none font-r text-xs tracking-widest" >{w.typeName}</p>
                    <h3 className="text-black font-r text-xl mt-1 font-normal leading-tight" >{w.name}</h3>
                </div>
            </div>
            ))}
            {filter === "all" && works.map((w) => (
                <div className="p-3 bg-[#525ee111] rounded-xl shadow-md cursor-pointer" >
                    <div>
                        <img src={w.img} className="w-full h-28 border" alt="img" />
                    </div>
                    <div className="p-2" >
                        <p className="text-[#1a100350] mt-2 leading-none font-r text-xs tracking-widest" >{w.typeName}</p>
                        <h3 className="text-black font-r text-xl mt-1 font-normal leading-tight" >{w.name}</h3>
                    </div>
                </div>
            ))}
        </div>

      </article>
    </div>
  )
}