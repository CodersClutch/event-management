import SettingLink from "@/components/setting/SettingLink";
import { ReactNode } from "react";

export default function SettingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col ">
      {/* bread crim */}
      {/* <h2 className="text-center text-2xl mt-2">System Settings</h2> */}
      <div className="flex flex-1 mt-10">
        {/* Sidebar */}
        <div className="w-1/4 h-full overflow-y-auto sticky top-0">
          <SettingLink />
        </div>

        {/* Scrollable Content */}
        <div className="w-3/4 h-[80vh] overflow-scroll scroll-p-0 scroll-m-0 scroll-smooth ">
          {children}
        </div>
      </div>
    </div>
  );
}
