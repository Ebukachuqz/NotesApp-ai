import React from "react";
import NotesDashboardContentLayout from "../_components/NotesDashboardContentLayout";
import TailwindAdvancedEditor from "@/components/advanced-editor";

const page = () => {
  return (
    <NotesDashboardContentLayout title="Untitled">
      Text Editor
      <div className="flex items-center justify-center w-full">
        <TailwindAdvancedEditor />
      </div>
    </NotesDashboardContentLayout>
  );
};

export default page;
