import { auth } from "@clerk/nextjs/server";
import NotesContainerSection from "./_components/NotesContainer";
import NotesDashboardContentLayout from "./_components/NotesDashboardContentLayout";
import NotesSection from "./_components/NotesSection";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <NotesDashboardContentLayout title="Notes">
      <NotesSection />
      <NotesContainerSection />
    </NotesDashboardContentLayout>
  );
}
