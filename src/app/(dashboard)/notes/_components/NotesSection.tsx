"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNoteQueries } from "@/hooks/useNoteQueries";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SearchIcon, FileTextIcon, Loader2 } from "lucide-react";
import { NewNoteData } from "@/types";

const NotesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();
  const { createNote, isCreatingNote } = useNoteQueries();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) return;

    const noteData: NewNoteData = {
      title: formData.title,
      description: formData.description,
      content: '{"type":"doc","content":[]}',
    };

    createNote(noteData, {
      onSuccess: (newlyCreatedNote) => {
        setFormData({ title: "", description: "" });
        setIsModalOpen(false);
        router.push(`/notes/${newlyCreatedNote.$id}`);
      },
      onError: (error) => {
        console.error("Failed to create note:", error);
        alert("Failed to create note. Please try again.");
      },
    });
  };

  const handleCancel = () => {
    setFormData({ title: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full gap-4">
      <div className="flex-1 max-w-[322px]">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8b8d98]" />
          <Input
            className="pl-9 py-1.5 h-8 text-xs bg-[#fcfcfd] border-[#dddde3] font-normal font-['Geist',Helvetica] text-[#8b8d98] tracking-[0.04px] leading-4"
            placeholder="Search notes"
          />
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="h-7 px-2 py-1.5 bg-[#5b5bd6] hover:bg-[#4a4ac5] text-[#fcfcfd] text-xs font-medium font-['Geist',Helvetica] tracking-[0] leading-[14px]"
          >
            <FileTextIcon className="h-3.5 w-3.5 mr-1" />
            Create note
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Note</DialogTitle>
            <DialogDescription>
              Add a new note with a title and description. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter note title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter note description"
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isCreatingNote}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isCreatingNote}>
                {isCreatingNote && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isCreatingNote ? "Saving..." : "Save Note"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Add the default export at the end of the file
export default NotesSection;
