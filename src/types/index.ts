// This file defines the TypeScript interfaces for our main data structures.

// Represents a Note as it is stored in the Appwrite database and returned by our API.
export interface Note {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  title: string;
  content: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Represents the data needed to create a new note.
// We omit the fields that are generated by the server or database.
export type NewNoteData = Omit<
  Note,
  "$id" | "$createdAt" | "$updatedAt" | "userId" | "createdAt" | "updatedAt"
>;

// Represents the data that can be updated on an existing note.
// We can make all fields optional for flexibility.
export type UpdateNoteData = Partial<NewNoteData>;
