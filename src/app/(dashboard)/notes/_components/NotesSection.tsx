import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileTextIcon, SearchIcon } from "lucide-react";
import React from "react";

const NotesSection = () => {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <div className="flex-1 max-w-[322px]">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8b8d98]" />
          <Input
            className="pl-9 py-1.5 h-8 text-xs bg-[#fcfcfd] border-[#dddde3] font-normal font-['Geist',Helvetica] text-[#8b8d98] tracking-[0.04px] leading-4"
            placeholder="SearchIcon notes"
          />
        </div>
      </div>

      <Button
        size="sm"
        className="h-7 px-2 py-1.5 bg-[#5b5bd6] hover:bg-[#4a4ac5] text-[#fcfcfd] text-xs font-medium font-['Geist',Helvetica] tracking-[0] leading-[14px]"
      >
        <FileTextIcon className="h-3.5 w-3.5 mr-[7px]" />
        Create note
      </Button>
    </div>
  );
};
export default NotesSection;
