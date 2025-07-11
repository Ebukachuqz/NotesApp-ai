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
import { useRouter } from "next/navigation";

import { useNoteQueries } from "@/hooks/useNoteQueries"; // or wherever it's located
import { Button } from "@/components/ui/button"; // assuming you're using Shadcn
import { Loader2 } from "lucide-react";

export interface FormattedNote {
  id: string;
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
}

interface NoteCardProps {
  note: FormattedNote;
  onClick?: () => void;
}

export default function NoteCard({ note, onClick }: NoteCardProps) {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const { deleteNote, isDeletingNote } = useNoteQueries(); // use your mutation hook

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    deleteNote(note.id, {
      onSuccess: () => {
        setShowConfirmDelete(false);
      },
    });
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card's onClick from firing
    router.push(`/notes/${note.id}`);
  };

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
      className="flex flex-col gap-0 py-[12px] h-[196px] bg-white border border-[#DDDDE3] rounded-[6px] shadow-2xs hover:shadow transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between px-[12px] pt-0 pb-[4px]">
        <div className="flex items-center gap-2">
          <Avatar className="w-5 h-5">
            <AvatarImage src={note.company.avatar} alt={note.company.name} />
            <AvatarFallback className="text-xs bg-green-500 text-white">
              {note.company.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-[#60646C] font-[400] text-[14px]">
            {note.company.name}
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
                onClick={handleEdit}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
              >
                <Edit className="w-4 h-4" />
                Edit note
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50">
                <Share className="w-4 h-4" />
                Share note
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
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
            <AvatarImage src={note.author.avatar} alt={note.author.name} />
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
      {showConfirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6">
            <h2 className="text-lg text-gray-900 mb-4">
              Are you sure you want to delete{" "}
              <strong>&quot;{note.title}&quot;</strong>?
            </h2>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                variant="ghost"
                className="text-gray-700"
                onClick={() => setShowConfirmDelete(false)}
                disabled={isDeletingNote}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={confirmDelete}
                disabled={isDeletingNote}
              >
                {isDeletingNote && (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                )}
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
