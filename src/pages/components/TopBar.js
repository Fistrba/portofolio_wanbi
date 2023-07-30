import { ArrowUpLeftIcon, BeakerIcon, BriefcaseIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function TopBar() {
    return (
        <div className="container mx-auto flex justify-between py-5 items-center" >
            <h1 className="font-pd font-bold text-xl logo-top-bar" >Peter Wanbi</h1>
            <MoonIcon className='cursor-pointer hover:bg-[#525FE1] transition-all hover:text-[#ffffff] w-10 h-10 p-3 rounded-xl bg-transparent text-[#a7a7a7] border border-[#d9d9d9] shadow-md' />
        </div>
    )
}