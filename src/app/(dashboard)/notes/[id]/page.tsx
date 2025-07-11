"use client";

import React from "react";
import { redirect, useParams } from "next/navigation";
import { useNoteQuery } from "@/hooks/useNoteQueries";
import NotesDashboardContentLayout from "../_components/NotesDashboardContentLayout";
import TailwindAdvancedEditor from "@/components/advanced-editor";
import { Loader2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

const NoteEditorPage = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    redirect("/sign-in");
  }
  const params = useParams<{ id: string }>();
  const noteId = params.id;

  const { data: note, isLoading, isError } = useNoteQuery(noteId);

  if (isLoading) {
    return (
      <NotesDashboardContentLayout type="editor" title="Loading note...">
        <div className="flex justify-center items-center h-96 w-full">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      </NotesDashboardContentLayout>
    );
  }

  if (isError || !note) {
    return (
      <NotesDashboardContentLayout type="editor" title="Error">
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold">Note Not Found</h2>
          <p className="text-gray-500">
            The note you are trying to edit does not exist or has been deleted.
            Please check the URL or return to the notes list.
          </p>
        </div>
      </NotesDashboardContentLayout>
    );
  }

  return (
    <NotesDashboardContentLayout type="editor" title={note.title}>
      <div className="flex items-center justify-center w-full">
        <TailwindAdvancedEditor note={note} />
      </div>
    </NotesDashboardContentLayout>
  );
};

export default NoteEditorPage;
