import LinkIcon from "../icons/LinkIcon"
import TextIcon from "../icons/TextIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SideBarItem from "./SideBarItem"

const SideBar = () => {
  return (
    <div className="h-screen bg-white border-r border-gray-300 shadow-xl w-72 fixed left-0 top-0">
      <div className="pt-8 mb-16 flex items-center justify-center gap-4 ">
        <img className="h-8 w-8" src="/public/logo.svg" alt="" />
        <div className="text-2xl">
          BrainStorm
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>
        <SideBarItem text="Youtube" icon={<YoutubeIcon/>}/>
        <SideBarItem text="Text" icon={<TextIcon size="lg"/>}/>
        <SideBarItem text="Link" icon={<LinkIcon size="lg"/>}/>
      </div>
    </div>
  )
}

export default SideBar 