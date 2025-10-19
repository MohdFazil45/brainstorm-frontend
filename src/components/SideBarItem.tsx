import type { ReactElement } from "react";

const SideBarItem = ({text, icon, onClick}: {
  text:string;
  icon:ReactElement;
  onClick: () => void
}) => {
  return (
    <div className="flex hover:scale-105 gap-12 cursor-pointer pl-12 mb-2"onClick={onClick}>
        <div className="text-xl text-gray-600">
          {icon}
        </div>
        <div className="text-xl">
          {text}
        </div>
    </div>
  )
}

export default SideBarItem