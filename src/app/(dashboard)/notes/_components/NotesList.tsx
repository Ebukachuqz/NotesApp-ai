"use client";

import NoteCard from "./NoteCard";

interface NotesListProps {
  notes: any[];
  onSelect?: (note: any) => void;
  currentUser?: string;
}

export default function NotesList({
  notes,
  onSelect = () => {},
  currentUser = "",
}: NotesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={{
            title: note.title,
            description: note.description,
            date: new Date(note.date).toDateString(),
            company: { name: "NoteApp", avatar: "/logo.svg" },
            author: { name: note.author.name, avatar: note.author.avatar },
          }}
          onClick={() => onSelect(note)}
        />
      ))}
    </div>
  );
}
