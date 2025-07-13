import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return <div className="h-screen bg-white border-2 w-72 fixed left-0 top-0 border-slate-200 pl-4">
    <div className="flex text-2xl pt-8 items-center">
      <div className="pr-4 text-purple-600">
        <Logo />
      </div>
      Brainly
    </div>
    <div className="pt-8 pl-4">
      <SidebarItem text="Twitter" icon={<TwitterIcon />} />
      <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
    </div>

  </div>
}
