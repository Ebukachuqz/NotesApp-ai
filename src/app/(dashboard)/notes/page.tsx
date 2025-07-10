import NotesContainerSection from "./_components/NotesContainer";
import NotesDashboardContentLayout from "./_components/NotesDashboardContentLayout";
import NotesSection from "./_components/NotesSection";

export default function DashboardPage() {
  return (
    <NotesDashboardContentLayout title="Notes">
      <NotesSection />
      <NotesContainerSection />
    </NotesDashboardContentLayout>
  );
}
