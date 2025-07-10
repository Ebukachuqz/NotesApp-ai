"use client";

import { useState, useRef, useEffect } from "react";
import {
  ClockIcon,
  MoreHorizontalIcon,
  Edit,
  Share,
  Trash2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface NoteCardProps {
  note: {
    title: string;
    description?: string;
    date: string;
    company: {
      name: string;
      avatar: string;
    };
    author: {
      name: string;
      avatar: string;
    };
  };
  onClick?: () => void;
}

export default function NoteCard({ note, onClick }: NoteCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Card
      className="flex flex-col gap-0 py-[12px] bg-white border border-[#DDDDE3] rounded-[6px] shadow-2xs hover:shadow transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between px-[12px] pb-[4px]">
        <div className="flex items-center gap-2">
          <Avatar className="w-5 h-5">
            <AvatarImage
              src={note.company.avatar || "/placeholder.svg"}
              alt={note.company.name}
            />
            <AvatarFallback className="text-xs bg-green-500 text-white">
              {note.company.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-[#60646C] font-[400] text-[14px]">
            Edify INC
          </span>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center justify-center hover:bg-gray-100 rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
          >
            <MoreHorizontalIcon className="w-4 h-4 text-[#9ca3af]" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[140px]">
              <button
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                  // Add edit functionality here
                }}
              >
                <Edit className="w-4 h-4" />
                Edit note
              </button>
              <button
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                  // Add share functionality here
                }}
              >
                <Share className="w-4 h-4" />
                Share note
              </button>
              <button
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                  // Add delete functionality here
                }}
              >
                <Trash2 className="w-4 h-4" />
                Delete note
              </button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 px-[12px] pb-[24px]">
        <h3 className="text-[16px] text-[#111827] leading-tight gap-[8px]">
          {note.title}
        </h3>
        <p className="text-[14px] text-[#6b7280] leading-relaxed overflow-hidden pt-2">
          {note.description && note.description.length > 120
            ? `${note.description.substring(0, 120)}...`
            : note.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between pb-[4px] px-[12px] font-[400] text-[12px]">
        <div className="flex items-center gap-2">
          <Avatar className="w-5 h-5">
            <AvatarImage
              src={note.author.avatar || "/placeholder.svg"}
              alt={note.author.name}
            />
            <AvatarFallback className="text-xs bg-gray-400 text-white">
              {note.author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-[#6b7280] ">{note.author.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-3 h-3 text-[#9ca3af]" />
          <span className="text-xs text-[#6b7280]">{note.date}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
