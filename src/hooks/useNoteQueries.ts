import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { Note, NewNoteData, UpdateNoteData } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = async <T>(
  url: string,
  method = "GET",
  data?: unknown,
  token?: string
): Promise<T> => {
  const res = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "API error");
  }

  return res.json();
};

export const useNoteQueries = () => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const getNotes = async () => {
    const token = await getToken();
    return fetcher<Note[]>("/api/notes", "GET", undefined, token || undefined);
  };

  const {
    data: notes,
    isLoading: isLoadingNotes,
    isError: isErrorNotes,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  const createNoteMutation = useMutation({
    mutationFn: async (newNote: NewNoteData) => {
      const token = await getToken();
      return fetcher<Note>("/api/notes", "POST", newNote, token || undefined);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: async ({
      noteId,
      data,
    }: {
      noteId: string;
      data: UpdateNoteData;
    }) => {
      const token = await getToken();
      return fetcher<Note>(
        `/api/notes/${noteId}`,
        "PUT",
        data,
        token || undefined
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const deleteNoteMutation = useMutation({
    mutationFn: async (noteId: string) => {
      const token = await getToken();
      return fetcher(
        `/api/notes/${noteId}`,
        "DELETE",
        undefined,
        token || undefined
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return {
    notes,
    isLoadingNotes,
    isErrorNotes,
    createNote: createNoteMutation.mutate,
    isCreatingNote: createNoteMutation.isPending,
    updateNote: updateNoteMutation.mutate,
    isUpdatingNote: updateNoteMutation.isPending,
    deleteNote: deleteNoteMutation.mutate,
    isDeletingNote: deleteNoteMutation.isPending,
  };
};

export const useNoteQuery = (noteId: string) => {
  const { getToken } = useAuth();

  const getNoteById = async () => {
    const token = await getToken();
    return fetcher<Note>(
      `/api/notes/${noteId}`,
      "GET",
      undefined,
      token || undefined
    );
  };

  return useQuery({
    queryKey: ["note", noteId],
    queryFn: getNoteById,
    enabled: !!noteId,
  });
};