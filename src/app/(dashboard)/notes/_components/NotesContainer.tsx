"use client";

import React from "react";
import NotesList from "./NotesList";
import { useNoteQueries } from "@/hooks/useNoteQueries";
import { useUser } from "@clerk/nextjs";
import { Note } from "@/types";
import { FileText, Loader2 } from "lucide-react";

export const NotesContainerSection = () => {
  const { notes, isLoadingNotes, isErrorNotes } = useNoteQueries();
  const { user } = useUser();

  if (isLoadingNotes) {
    return (
      <div className="flex justify-center items-center h-64 w-full">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (isErrorNotes) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center w-full">
        <p>Could not load your notes. Please try again later.</p>
      </div>
    );
  }

  if (!notes || notes.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64 w-full text-center text-gray-500 border-2 border-dashed rounded-lg">
        <FileText className="h-12 w-12 mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">
          You have no notes yet
        </h3>
        <p className="mt-2">
          Click the &quot;Create Note&quot; button to get started.
        </p>
      </div>
    );
  }

  const formattedNotes = notes?.map((note: Note) => ({
    id: note.$id,
    title: note.title,
    description: note.description || "No description provided.",
    date: new Date(note.createdAt).toDateString(),
    company: { name: "Edify INC", avatar: "/logo.svg" },
    author: {
      name: user?.fullName || "Anonymous User",
      avatar: user?.imageUrl || "/placeholder.svg",
    },
  }));

  return <NotesList notes={formattedNotes || []} />;
};
export default NotesContainerSection;
