import { ArrowUpLeftIcon, BeakerIcon, BriefcaseIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useDark } from 'src/context/DarkContext'

export default function TopBar() {

    const { darkMode, toggleDarkMode } = useDark()

    return (
        <div className="container mx-auto flex justify-between py-5 items-center px-5 absolute w-full left-1/2 -translate-x-1/2" >
            <h1 className="font-pd font-bold text-xl logo-top-bar" >Peter Wanbi</h1>
            {!darkMode ? <MoonIcon onClick={toggleDarkMode} className='cursor-pointer hover:bg-[#525FE1] transition-all hover:text-[#ffffff] w-10 h-10 p-3 rounded-xl bg-transparent text-[#a7a7a7] border border-[#d9d9d9] shadow-md' /> : <SunIcon onClick={toggleDarkMode} className='cursor-pointer hover:bg-[#ffffff] transition-all hover:text-[#0c0e2d] w-10 h-10 p-3 rounded-xl bg-transparent text-[#a7a7a7] border border-[#d9d9d9] shadow-md' />}
        </div>
    )
}