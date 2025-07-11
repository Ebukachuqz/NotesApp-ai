"use client";

import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
  ImageResizer,
  type JSONContent,
  handleCommandNavigation,
  handleImageDrop,
  handleImagePaste,
} from "novel";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { defaultExtensions } from "./extensions";
import { ColorSelector } from "./selectors/color-selector";
import { LinkSelector } from "./selectors/link-selector";
import { MathSelector } from "./selectors/math-selector";
import { NodeSelector } from "./selectors/node-selector";
import { Separator } from "./ui/separator";

import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import { uploadFn } from "./image-upload";
import { TextButtons } from "./selectors/text-buttons";
import { slashCommand, suggestionItems } from "./slash-command";

// --- 1. Import hooks and types ---
import { useNoteQueries } from "@/hooks/useNoteQueries";
import { Note } from "@/types";
import { Loader2, Check, AlertCircle } from "lucide-react";

const extensions = [...defaultExtensions, slashCommand];

// --- 2. Add a 'note' prop to the component ---
interface EditorProps {
  note: Note;
}

const TailwindAdvancedEditor = ({ note }: EditorProps) => {
  // --- 3. Get the updateNote mutation and its status ---
  const { updateNote, isUpdatingNote } = useNoteQueries();

  const [initialContent, setInitialContent] = useState<null | JSONContent>(
    null
  );

  // The save status will now be more detailed
  const [saveStatus, setSaveStatus] = useState<
    "Saved" | "Saving..." | "Unsaved" | "Error"
  >("Saved");

  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  // --- 4. Rewrite the debounced function to save to the API ---
  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const json = editor.getJSON();

      // Set status to "Saving..." before the API call
      setSaveStatus("Saving...");

      updateNote(
        {
          noteId: note.$id,
          data: { content: JSON.stringify(json) },
        },
        {
          onSuccess: () => {
            // Set status to "Saved" on success
            setSaveStatus("Saved");
          },
          onError: () => {
            // Set status to "Error" on failure
            setSaveStatus("Error");
          },
        }
      );
    },
    1000 // Debounce for 1 second
  );

  // --- 5. Load initial content from the note prop, not localStorage ---
  useEffect(() => {
    if (note?.content) {
      try {
        setInitialContent(JSON.parse(note.content));
      } catch (e) {
        // If content is not valid JSON, use a default
        setInitialContent({ type: "doc", content: [] });
      }
    }
  }, [note]);

  if (!initialContent) return null; // Or a loading skeleton

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="flex absolute right-5 top-5 z-10 mb-5 gap-2 items-center">
        {/* --- 6. Update the save status indicator --- */}
        <div className="flex items-center gap-2 rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">
          {saveStatus === "Saving..." && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {saveStatus === "Saved" && (
            <Check className="h-4 w-4 text-green-500" />
          )}
          {saveStatus === "Error" && (
            <AlertCircle className="h-4 w-4 text-red-500" />
          )}
          {saveStatus}
        </div>
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="relative min-h-[500px] w-full max-w-screen-lg border-muted bg-background sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class:
                "prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full",
            },
          }}
          onUpdate={({ editor }) => {
            setSaveStatus("Unsaved");
            debouncedUpdates(editor);
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">
              No results
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command(val)}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>

          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical" />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation="vertical" />

            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation="vertical" />
            <MathSelector />
            <Separator orientation="vertical" />
            <TextButtons />
            <Separator orientation="vertical" />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default TailwindAdvancedEditor;
