// lib/api.ts

// export type Note = {
//   id: string;
//   title: string;
//   content: string;
//   categoryId: string;
//   userId: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type NoteListResponse = {
//   notes: Note[];
//   total: number;
// };

// axios.defaults.baseURL = "https://next-docs-api.onrender.com";

// export const getSingleNote = async (id: string) => {
//   const res = await axios.get<Note>(`/notes/${id}`);
//   return res.data;
// };


// export type Category = {
//   id: string;
//   name: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export const getCategories = async () => {
//   const res = await axios<Category[]>('/categories');
//   return res.data;
// };

// export const getNotes = async (categoryId?: string) => {
//   const res = await axios.get<NoteListResponse>('/notes', {
//     params: { categoryId },
//   });
//   return res.data;
// };

import axios from 'axios';
import type { Note, NoteTag } from '../app/types/note';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface NewNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  page: number,
  search: string,
  perPage: number = 12,
) => {
  const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  const params: Record<string, string | number> = {
    page,
    perPage,
  };

  if (search.trim()) {
    params.search = search.trim();
  }

  const res = await axios.get<FetchNotesResponse>('/notes', {
    params,
    headers: { Authorization: `Bearer ${myKey}` },
  });

  return res.data;
};

export const createNote = async (newNote: NewNote) => {
  const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  const res = await axios.post<Note>('/notes', newNote, {
    headers: { Authorization: `Bearer ${myKey}` },
  });

  return res.data;
};

export const deleteNote = async (noteId: string) => {
  const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  const res = await axios.delete<Note>(`/notes/${noteId}`, {
    headers: { Authorization: `Bearer ${myKey}` },
  });

  return res.data;
};

export const getSingleNote = async (id: string) => {
  const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  
  const res = await axios.get<Note>(`/notes/${id}`, {
    headers: { Authorization: `Bearer ${myKey}` },
  });
  
  return res.data;
};