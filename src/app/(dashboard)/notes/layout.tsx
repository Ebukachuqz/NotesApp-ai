import { Button } from "@/components/ui/button";
import {
  AlignJustifyIcon,
  ArrowRightFromLineIcon,
  CalendarDaysIcon,
  CheckSquareIcon,
  DollarSignIcon,
  FileLineChartIcon,
  FileTextIcon,
  FolderClosedIcon,
  LandmarkIcon,
  LayoutGridIcon,
  ScrollIcon,
  ScrollTextIcon,
  TargetIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

const NotesDashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Navigation sidebar items data
  const sidebarItems = [
    { icon: <LayoutGridIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <TargetIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <FileLineChartIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <ScrollTextIcon className="w-3.5 h-3.5" />, active: true },
    { icon: <FileTextIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <AlignJustifyIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <DollarSignIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <LandmarkIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <FolderClosedIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <CheckSquareIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <ScrollIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <YoutubeIcon className="w-3.5 h-3.5" />, active: false },
    { icon: <CalendarDaysIcon className="w-3.5 h-3.5" />, active: false },
  ];

  return (
    <div className="bg-[#fcfcfd] flex flex-row justify-center w-full">
      <div className="bg-[#fcfcfd] w-full relative flex">
        {/* Sidebar */}
        <nav className="fixed top-0 left-0 h-screen w-[50px] bg-white border-r border-[#e8e8e8] z-20 flex flex-col items-start">
          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            {/* Logo section */}
            <div className="h-13 justify-center px-3 py-[15px] relative self-stretch w-full bg-[#fcfcfd] border-b border-[#dddde3] flex items-center">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px] ml-[-2.00px] mr-[-2.00px]">
                <div className="relative w-7 h-7 rounded-md bg-[url(https://c.animaapp.com/mcx5vg07CJFNc5/img/logo.png)] bg-cover bg-[50%_50%]" />
                <div className="absolute w-3 h-3 top-[17px] left-[18px] rounded-lg border border-solid border-[#fcfcfd] [background:url(https://c.animaapp.com/mcx5vg07CJFNc5/img/frame-14619.png)_50%_50%_/_cover]" />
              </div>
            </div>

            {/* Sidebar navigation items */}
            <div className="flex flex-col items-center gap-5 pt-4 pb-0 px-3 relative flex-1 self-stretch w-full grow">
              <div className=" inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto] ml-[-4.00px] mr-[-4.00px]">
                {sidebarItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`w-8 h-8 p-1.5 rounded-lg hover:cursor-pointer ${
                      item.active ? "bg-[#e4e4e9]" : "bg-white"
                    }`}
                  >
                    <div className="flex h-5 items-center justify-center gap-1.5 px-0.5 py-0 relative self-stretch w-full">
                      {item.icon}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Collapse sidebar button */}
          <div className="absolute w-[18px] h-[18px] top-[15px] left-[41px] bg-[#fcfcfd] rounded-[100px] overflow-hidden border border-solid border-[#dddde3]">
            <ArrowRightFromLineIcon className="absolute w-2.5 h-2.5 top-1 left-1" />
          </div>
        </nav>

        {/* Main content area */}
        {children}
      </div>
    </div>
  );
};

export default NotesDashboard;
