// components/MainContentLayout.tsx
import { ReactNode } from "react";
import { FileTextIcon, BellIcon, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainContentLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function NotesDashboardContentLayout({
  children,
  title = "Notes",
}: MainContentLayoutProps) {
  return (
    <div className="flex-1 flex flex-col ml-[50px]">
      {/* Header */}
      <header className="w-full justify-between px-3 py-[11px] h-13 sticky top-0 z-10 bg-white border-b border-[#e8e8e8] flex items-center">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          {title.toLowerCase() === "Notes".toLowerCase() ? (
            <FileTextIcon className="w-6 h-6" />
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="w-7 h-7 p-1.5 bg-[#fcfcfd] font-bold cursor-pointer rounded-md border border-solid border-[#dddde3]"
            >
              <ChevronLeft className="w-3.5 h-3.5 " />
            </Button>
          )}
          <div className="flex flex-col">
            <div className="text-[#1c2024] text-base font-medium tracking-tight leading-[1.5] whitespace-nowrap">
              {title}
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            className="w-7 h-7 p-1.5 bg-[#fcfcfd] cursor-pointer rounded-md border border-solid border-[#dddde3]"
          >
            <BellIcon className="w-3.5 h-3.5" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex flex-col w-full items-start gap-6">{children}</div>
      </main>
    </div>
  );
}
