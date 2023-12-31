import { BiCodeAlt } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <article className="mt-10" >
        <div className="flex items-center" >
          <h1 className="text-5xl font-r font-bold tracking-wider" >Home</h1>
          <div className="w-[20%] h-[2px] ml-4 bg-gradient-to-r from-[#525ee1a2] to-[#525ee1]" ></div>
        </div>
        <div>
          <p className="text-[#232323] text-lg font-r leading-loose mt-5" >Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and  I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
        </div>
      </article>

      <article className="mt-10" >
        <div className="flex items-center" >
          <h2 className="text-3xl font-r font-bold tracking-wider" >What I do</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5" >

          <div className="bg-[#f86d0310] p-4 rounded-xl" >
            <div className="flex items-center" >
              <BiCodeAlt className="text-xl text-[#f86d03d5]" />
              <h3 className="ml-2 font-r text-lg tracking-wide text-[#454545]" >Web Development</h3>
            </div>
            <p className="font-r mt-2 font-light tracking-wide text-xs leading-6 text-black" >As a developer, I find myself most  captivated by the power and flexibility of  NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and  discover innovative ways to create fast, scalable, and user-friendly applications.</p>
          </div>

          <div className="bg-[#f86d0310] p-4 rounded-xl" >
            <div className="flex items-center" >
              <BiCodeAlt className="text-xl text-[#f86d03d5]" />
              <h3 className="ml-2 font-r text-lg tracking-wide text-[#454545]" >Web Development</h3>
            </div>
            <p className="font-r mt-2 font-light tracking-wide text-xs leading-6 text-black" >As a developer, I find myself most  captivated by the power and flexibility of  NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and  discover innovative ways to create fast, scalable, and user-friendly applications.</p>
          </div>

          <div className="bg-[#f86d0310] p-4 rounded-xl" >
            <div className="flex items-center" >
              <BiCodeAlt className="text-xl text-[#f86d03d5]" />
              <h3 className="ml-2 font-r text-lg tracking-wide text-[#454545]" >Web Development</h3>
            </div>
            <p className="font-r mt-2 font-light tracking-wide text-xs leading-6 text-black" >As a developer, I find myself most  captivated by the power and flexibility of  NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and  discover innovative ways to create fast, scalable, and user-friendly applications.</p>
          </div>

          <div className="bg-[#f86d0310] p-4 rounded-xl" >
            <div className="flex items-center" >
              <BiCodeAlt className="text-xl text-[#f86d03d5]" />
              <h3 className="ml-2 font-r text-lg tracking-wide text-[#454545]" >Web Development</h3>
            </div>
            <p className="font-r mt-2 font-light tracking-wide text-xs leading-6 text-black" >As a developer, I find myself most  captivated by the power and flexibility of  NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and  discover innovative ways to create fast, scalable, and user-friendly applications.</p>
          </div>


          
        </div>
      </article>
    </div>
  )
}