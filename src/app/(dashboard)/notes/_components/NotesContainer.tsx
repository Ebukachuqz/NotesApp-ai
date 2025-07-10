import React from "react";
import NotesList from "./NotesList";

export const NotesContainerSection = () => {
  // Create a data structure for the notes to avoid repetition
  const notes = Array(10).fill({
    company: {
      name: "Edify INC",
      avatar:
        "https://c.animaapp.com/mcx5vg07CJFNc5/img/avatar-w--photo-18.png",
    },
    title: "Investment Note",
    description:
      "Figma ipsum component variant main layer. Union mask shadow ipsum pencil mask align pen layout create.",
    author: {
      name: "Thomas brown",
      avatar: "https://c.animaapp.com/mcx5vg07CJFNc5/img/frame-14619.png",
    },
    date: "Jan 5, 2020",
  });

  return (
    <section className="flex flex-col items-start gap-6 w-full">
      <NotesList notes={notes} />
    </section>
  );
};
export default NotesContainerSection;
