import type { ReactElement } from "react";

const SideBarItem = ({text, icon}: {
  text:string;
  icon:ReactElement;
}) => {
  return (
    <div className="flex hover:scale-105 gap-12 cursor-pointer   pl-12 mb-2">
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