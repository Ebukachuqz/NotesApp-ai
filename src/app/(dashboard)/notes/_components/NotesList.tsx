"use client";

import NoteCard from "./NoteCard";
import type { FormattedNote } from "./NoteCard"; // Import the shared type

interface NotesListProps {
  notes: FormattedNote[];
  onSelect?: (note: FormattedNote) => void;
}

export default function NotesList({
  notes,
  onSelect = () => {},
}: NotesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onClick={() => onSelect(note)} />
      ))}
    </div>
  );
}
