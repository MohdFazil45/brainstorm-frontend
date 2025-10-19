import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import TextIcon from "../icons/TextIcon";
import LinkIcon from "../icons/LinkIcon";
import SideBarItem from "./SideBarItem";

interface SideBarProps {
  onFilterSelect: (filterType: string | null) => void;
}
const SideBar = ({ onFilterSelect } : SideBarProps) => {
  return (
    <div className="h-screen bg-white border-r border-gray-300 shadow-xl w-68 fixed left-0 top-0">
      <div className="pt-8 mb-16 flex items-center justify-center gap-4">
        <img className="h-8 w-8" src="/public/logo.svg" alt="logo" />
        <div className="text-2xl font-semibold">BrainStorm</div>
      </div>
      <div className="flex flex-col gap-4">
        <SideBarItem text="All Notes" icon={<></>} onClick={() => onFilterSelect(null)} />
        <SideBarItem text="Twitter" icon={<TwitterIcon />} onClick={() => onFilterSelect("twitter")} />
        <SideBarItem text="YouTube" icon={<YoutubeIcon />} onClick={() => onFilterSelect("youtube")} />
        <SideBarItem text="Text" icon={<TextIcon size="lg" />} onClick={() => onFilterSelect("text")} />
        <SideBarItem text="Link" icon={<LinkIcon size="lg" />} onClick={() => onFilterSelect("link")} />
      </div>
    </div>
  );
};

export default SideBar;
